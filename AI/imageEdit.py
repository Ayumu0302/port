# coding utf8
# python3.x

import cv2
import numpy as np
import random
import config

# cropped_imageをDeepLearning用に編集して、出力を返す。
# データセット作成段階、AIモデルでの予測判別段階など、
# 画像編集統一した画像編集を行えるように作成する。

# 処理内容
# # selectorのデフォルト設定'[1,1,1]'では、外部コートで呼び出された際に
#   画像を入力値として受け取り、規定の処理を行い、処理後のimgをリターンする。
#   *selector[1,0,0]では'1'に該当する処理のみ行う

# # 規定の処理内容
#   画像の'サイズ調整'150x60リサイズ倍率はconfigで指定
#   config.set_colorにより決定されているカラーでの'バックグラウンド画像'を作成
#   作成したバックグランド画像とimgを'中央位置'で合成
#   cropped画像をさらに２値化し白っぽい部分をconfig.set_colorで統一
#   画像の'フリップ処理'（左右上下ランダムに）

class ImageEditing():
    def __init__(self, imgResize=config.resize_magnification, mode_selector=config.ImageEditMode, color_type=config.color_type, imgSizeW=config.image_size[0], imgSizeH=config.image_size[1]):
        self.imgSizeW = imgSizeW
        self.imgSizeH = imgSizeH
        self.mode_selector = mode_selector
        self.imgResize = imgResize
        self.color_type = color_type
        
    def reset(self, imgResize):
        self.imgResize = imgResize
    
    def Edit(self, img):
        self.img = img
        # サイズ調整(倍率指定)
        self.resizing()
        # color or gray
        self.colorScale()
        # ２値化
        self.Binarization()
        # 重ね合わせ合成
        self.overlay()
        self.Binarization()
        # フリップ処理 and return img
        self.fliping()
        return self.img
    
    def colorScale(self):
        if self.color_type == "gray":
            self.img = cv2.cvtColor(self.img, cv2.COLOR_BGR2GRAY)
    def resizing(self):
        if self.mode_selector[3]:
            self.img = cv2.resize(self.img, dsize=None, fx=self.imgResize, fy=self.imgResize)

    def Binarization(self ,none=0):
        if self.mode_selector[0]:
            # 白っぽいところをset_color 白っぽいの定義 rgb(180,180,180) rgb(255,255,255)
            if self.color_type == "gray":
                binari = cv2.inRange(self.img, (170), (255))
                binari2 = cv2.inRange(self.img, (0), (15))
            else:    
                binari = cv2.inRange(self.img, (180,180,180), (255, 255, 255))
                binari2 = cv2.inRange(self.img, (0,0,0), (15, 15, 15))
            # config.set_colorで上書き
            self.img[binari == 255] = config.set_color[0]
            self.img[binari2 == 255] = config.set_color[0]
            # ２値化で潰した画像を出力する場合
            if none:
                self.img = binari

    def overlay(self):
        x = 0
        y = 0
        # バックグランドの作成
        if self.color_type == "gray":
            back = np.zeros((self.imgSizeH, self.imgSizeW))
        else:
            back = np.zeros((self.imgSizeH, self.imgSizeW, 3))
        back += config.set_color[1]
        image_height, image_wide = self.img.shape[:2]
        # selectorが'1'なら、重ね位置は中央位置　'0'なら左上
        if self.mode_selector[1]:#[0,1,0]０１のリスト
            back_height, back_wide = back.shape[:2]
            # 芋の画像の中身位置の計算。int()で小数点が出た場合を整数に整える
            x1 = round(image_wide * 0.5)
            y1 = round(image_height * 0.5)
            # バックグラウンドの中心位置
            x2 = round(back_wide * 0.5)
            y2 = round(back_height * 0.5)
            # 合成位置座標計算
            x = x2 - x1
            y = y2 - y1
        #try:
        back[y:y+image_height, x:x+image_wide] = self.img
        #except Exception as e:
         #   print("\n出ないはず*警告*画像処理時にエラーが発生しました。ファイルを確認して対処してください。***合成処理***")
        self.img = back

    def fliping(self):
        if self.mode_selector[2]:
            # フリップ方向をランダムに設定
            direction = random.choice([1, 0, -1])
            # 左右　上下　左右上下
            self.img = cv2.flip(self.img, direction)

    def get(self):
        return self.img

if __name__=='__main__':
    print('組込を想定しているコードです。\nテストするには、ソースコードのコメントアウトを解除してください。')
    
#    imagePath = input(str('画像パスを入力'))
#    image = cv2.imread(imagePath)
#    print(type(image))
#    Eclass = ImageEditing()
#    img = Eclass.Edit(image)
#    print(type(img))
#    print(type(image))
#    cv2.imwrite( 'tmp_imageEdit.png', img)