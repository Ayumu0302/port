#!/usr/bin/env python
#-*- coding: utf-8 -*-
from tensorflow import keras
from tensorflow.keras import models
import numpy as np
import datetime
import argparse
import os
import config
import matplotlib.pyplot as plt
# tesorflowの設定に関する注意を消す。
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '1'

class TrainingAmaHime():
    def __init__(self):
        
        # --- --- --- ニューラルネットワークの設定 --- --- --- 
        self.img_shape = ()
        # アウトプット層のニューロン数
        out_units = 4
        # 1層目CNNレイヤーのfilters数を指定　2層目以降は2倍
        min_filters = 32
        DenseN = 80
        
        # --- --- --- 学習回数、テストデータの割合、一度に学習するデータ数 --- --- ---
        # 学習回数
        epochs = 2
        # テストデータの割合
        validation = 0.2
        # 一度に学習するデータ数
        batch_size = 64
        
        # --- --- --- modelとlogの保存場所の指定 --- --- ---
        model_path = './'
        #model_path = '/Users/taketaeishi/big_datas/h5/'
       
        log_dir_path = './logs/fit/'
        #log_dir_path = '/Users/taketaeishi/big_datas' + '/logs/fit/'
        
        # modelとlogのファイル,ディレクトリ名をセット.未入力の場合は'tmp'
        self.logs = str(input("\n logs and model names（保存するファイル名を入力）>> "))
        if self.logs == "":
            self.logs = "tmp"
            print('モデルとlogのファイル名の末尾は "tmp"')
        
        # --- --- --- 実行処理（データセット読み込み>>モデル作成>>学習処理>>保存）--- --- ---
        # データセットの読み込み
        input_data, label_data = self.input_dataset()
        self.model = self.getModel(out_units, min_filters, DenseN)
        self.Training_now(input_data, label_data, log_dir_path, batch_size, epochs, validation)
        self.save_model(model_path)

    ##############################################
    # ニューラルネットワークを作成
    def getModel(self, out_units, minN, DenseN, data_shape=(1)):
        # ニューロン数の設定
        Conv2D_n1 = minN
        Conv2D_n2 = Conv2D_n1 * 2
        Conv2D_n3 = Conv2D_n2 * 2
        Conv2D_n4 = Conv2D_n3 * 2
        
        inputImg = keras.layers.Input(shape=self.img_shape)
        input1 = keras.layers.Input(shape=data_shape)
        # CNNによる画像の特徴抽出
        x = keras.layers.Conv2D(filters=Conv2D_n1, kernel_size=(3, 3), padding='valid', activation='relu')(inputImg)
        x = keras.layers.MaxPooling2D(pool_size=(2, 2), strides=None, padding='valid')(x)
        x = keras.layers.Conv2D(filters=Conv2D_n2, kernel_size=(3, 3), padding='valid', activation='relu')(x)
        x = keras.layers.MaxPooling2D(pool_size=(2, 2), strides=None, padding='valid')(x)
        x = keras.layers.Conv2D(filters=Conv2D_n3, kernel_size=(3, 3), padding='valid', activation='relu')(x)
        x = keras.layers.MaxPooling2D(pool_size=(2, 2), strides=None, padding='valid')(x)
#        x = keras.layers.Conv2D(filters=Conv2D_n4, kernel_size=(3, 3), padding='valid', activation='relu')(x)
#        x = keras.layers.MaxPooling2D(pool_size=(2, 2), strides=None, padding='valid')(x)
        x = keras.layers.Dropout(0.20)(x)
        x = keras.layers.Flatten()(x)
        # 重さ数値データを追加
        x1 = keras.layers.concatenate([x, input1])
        # 全結合NN
        x1 = keras.layers.Dense(units=DenseN, activation='relu')(x1)
        x1 = keras.layers.Dropout(0.4)(x1)
        prediction = keras.layers.Dense(units=out_units, activation='softmax', name='pre_bante')(x1)
        model = keras.Model(inputs=[inputImg, input1], outputs=prediction)
        return model
    
    ##############################################
    # 学習処理
    def Training_now(self, input_data, label_data, log_dir_path, batch_size, epochs, validation):

        
        # モデルのコンパイル
        self.model.compile(optimizer='adam', loss={'pre_bante':'sparse_categorical_crossentropy'}, metrics=['accuracy'])
        # モデルをプレビュー
        self.model.summary()
        
        # --- tensorbordを不使用 ---
        #self.model.fit(input_data, label_data, epochs=epochs, validation_split=validation, batch_size=batch_size)
        
        # --- tensorbordを使用 ---
        # TensorBoard用のログを保存するための定義 実行コマンド %'tensorboard --logdir (保存したログのパス)'　そしてウェブブラウザで'http://localhost:6006/'
        log_dir = log_dir_path + self.logs + datetime.datetime.now().strftime("_%m%d-%H%M")
        tensorboard_callback = keras.callbacks.TensorBoard(log_dir=log_dir, histogram_freq=1)
        self.model.fit(input_data, label_data, epochs=epochs, validation_split=validation, batch_size=batch_size, callbacks=[tensorboard_callback])
        history = self.model.fit(input_data, label_data, epochs=epochs, validation_split=validation, batch_size = batch_size, callbacks=[keras.callbacks.EarlyStopping(patience=10, restore_best_weights=True), tensorboard_callback])
        # 学習したデータでのモデル評価 loss　accuracy　を表示
        print(self.model.evaluate(input_data, label_data, verbose=1))
        # 学習データの表示
        print(history.history.keys())
        print(history.history['accuracy'],'\n')
        print(history.history['val_accuracy'])
        acc = history.history['accuracy']
        val_acc = history.history['val_accuracy']

        loss = history.history['loss']
        val_loss = history.history['val_loss']
        
        epochs_range = range(epochs)
        

        
        plt.figure(figsize=(8, 8))
        plt.subplot(1, 2, 1)
        plt.plot(epochs_range, acc, label='Training Accuracy')
        plt.plot(epochs_range, val_acc, label='Validation Accuracy')
        plt.legend(loc='lower right')
        plt.title('Training and Validation Accuracy')

        plt.subplot(1, 2, 2)
        plt.plot(epochs_range, loss, label='Training Loss')
        plt.plot(epochs_range, val_loss, label='Validation Loss')
        plt.legend(loc='upper right')
        plt.title('Training and Validation Loss')
        plt.show()
        
        predictions = self.model.predict(input_data[-15:])
        print(predictions[0])
        print(np.argmax(predictions[0]))
        print(input_data[0].shape)
        img = np.delete(input_data[0], [0, 1], 3)
        img = np.squeeze(img)
        img = img[-15:]
        label_data = label_data[-15:]
        print(img.shape)
        
        #ひとつの画像をテストしてグラフにする
        i = 0
        plt.figure()
        plt.subplot(1,2,1)
        self.plot_image(i, predictions, img, label_data)
        plt.subplot(1,2,2)
        self.plot_value_array(i, predictions,  label_data)
        plt.show()
        
        # X個のテスト画像、予測されたラベル、正解ラベルを表示します。
        # 正しい予測は青で、間違った予測は赤で表示しています。
        num_rows = 5
        num_cols = 3
        num_images = num_rows*num_cols
        plt.figure(figsize=(2*2*num_cols, 2*num_rows))
        for i in range(num_images):
            plt.subplot(num_rows, 2*num_cols, 2*i+1)
            self.plot_image(i, predictions, img, label_data)
            plt.subplot(num_rows, 2*num_cols, 2*i+2)
            self.plot_value_array(i, predictions,  label_data)
        plt.show()

    ##############################################
    # 学習したモデルの保存
    def save_model(self, model_path):
        # model save
        self.model.save(model_path + self.logs + '.h5')
        print("学習終了。学習データセットは", self.logs + '_' + datetime.datetime.now().strftime("%m%d-%H%M"))

    ##############################################
    # データセットの読み込み
    def input_dataset(self):
        # データセット格納ディレクトリの入力処理
        ap = argparse.ArgumentParser()
        ap.add_argument("-i", "--input", required=True, help="dataset dir")
        args = vars(ap.parse_args())
        # 画像 番手ラベル 重さの読み込み
        image_train = np.load(file=args['input'] + "/image_train.npy")
        bante_label = np.load(file=args['input'] + "/bante_train.npy")
        weight_train = np.load(file=args['input'] + "/weight_train.npy")
        # グレースケールの場合に実行する処理 shapeを(None, 縦, 横)から(None, 縦, 横, 1)に変換
        if len(image_train.shape) == 3:
            print("カラー　グレースケール", image_train.shape, end="")
            image_train = image_train.reshape(image_train.shape[0], config.image_size[1], config.image_size[0], 1)
            print(">> 変換後 >>",image_train.shape)
        else:
            print("読み込みデータセット", image_train.shape, "カラー　BGR")
            

        
        #画像確認
        image_train1 = np.delete(image_train, [0, 1], 3)
        image_train1 = np.squeeze(image_train1)
        print(image_train1.shape)
        
        plt.figure()
        plt.imshow(image_train1[1])
        plt.colorbar()
        plt.grid(False)
        plt.show()
        
                #読み込んだデータに合わせて、ニューラルネットワークのインプット層を決定する。
        self.img_shape = image_train.shape[1:]
        # 画像の正規化（min0~max255 -> min0.0 ~ max1.0）
        image_train = image_train / 255
        # 数値weightの正規化(Mサイズ150g~230g)
        weight_train = (weight_train - 150) / (230 - 150)
        return [image_train, weight_train], bante_label
    


    #評価グラフの表示
    def plot_image(self, i, predictions_array, img, true_label):
        class_names = ['1bante', '2bante', '3bante', '4bante']
        predictions_array, true_label, img = predictions_array[i], true_label[i], img[i]
        plt.grid(False)
        plt.xticks([])
        plt.yticks([])

        plt.imshow(img, cmap=plt.cm.binary)

        predicted_label = np.argmax(predictions_array)
        if predicted_label == true_label:
            color = 'blue'
        else:
            color = 'red'

            plt.xlabel("{} {:2.0f}% ({})".format(class_names[predicted_label],
                                                 100*np.max(predictions_array),
                                                 class_names[true_label]), color=color)
    
    def plot_value_array(self, i, predictions_array, true_label):
        print(i)
        predictions_array, true_label = predictions_array[i], true_label[i]
        plt.grid(False)
        plt.xticks([])
        plt.yticks([])
        thisplot = plt.bar(range(4), predictions_array, color="#777777")
        plt.ylim([0, 1]) 
        predicted_label = np.argmax(predictions_array)

        thisplot[predicted_label].set_color('red')
        thisplot[true_label].set_color('blue')

if __name__ == "__main__" :
    TrainingAmaHime()