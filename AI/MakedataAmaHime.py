#!/usr/bin/env python
# -*- coding: utf8 -*-
import argparse
import glob
import cv2
import random
import numpy as np
import sys
import config

class makeDataset:
    def __init__(self):
        # コマンドラインでのオプション指定 -i は必須
        ap = argparse.ArgumentParser()
        ap.add_argument("-i", "--input", required=True, help="directores of data. delimiter is ':' ")
        ap.add_argument("-o", "--output", required=True, help="output")
        ap.add_argument("-f", "--format", required=True, help="npy or png", choices=['npy', 'png'])
        args = vars(ap.parse_args())
        #print(args['input'])

        # csvファイルの検索
        csvlist = self.searchCSV(args['input'].split(':'))
        # 出力ファイルのオープン
        if args['format'] == 'png':
            output = open(args['output']+'/'+'data.csv', mode = 'w')
        # 通し番号初期化
        i = 0
        dataset_list = []
        # 検索csvファイルの読み込み
        for filepath in csvlist:  
            # csvファイルオープン。下記のように書くとf.close()が要らない
            with open(filepath) as f:
                while True:
                    s_line = f.readline()
                    # 読み込み終わりの場合ブレイク
                    if not s_line:
                        break
                    # 一行づつの処理
                    data = s_line.split(',')
                    # 画像読み込み
                    img = cv2.imread(filepath.replace('data.csv', '') + data[0].zfill(6) + '.jpg')      
                    # 画像のリサイズ
                    img = cv2.resize(img, (4, 10))  
                    # 進捗表示
                    sys.stderr.write('\r\033[K' + 'Processing Data No. ' + str(i).zfill(6))
                    sys.stderr.flush()
                    # 画像&csv出力
                    if args['format'] == 'png':
                        cv2.imwrite(args['output'] + '/' + str(i).zfill(6) + '.png', img)
                        row = str(i) 
                        for j in range(len(data) - 1):
                        # 定義ファイルの入力要素(通し番号分+1)がcsvの一行の要素より少なければ、計測要素がある
                            row += ',' + data[j + 1].strip()
                        #output.write( str(i) + ',' + data[1] + ',' + data[2] + ',' + data[3] + ',' + data[4].strip() + '\n' )
                        output.write(row + '\n')
                    # 配列に変換
                    else:
                        row = [img] 
                        for j in range(len(data) - 1):
                            row.append( int( data[j + 1].strip() ) )
                        dataset_list.append( row )
                    i = i + 1

        # 進捗表示の最期改行
        sys.stderr.write('\n')
        sys.stderr.flush()

        # 出力ファイルのクローズ
        if args['format'] == 'png':
            output.close()
        else:
            #  配列をシャッフル
            random.shuffle(dataset_list)  
 
            # 配列をnpy配列に変換
            
            #convlist = [[0]*len(data)]*i
            convlist = []
            for l in range(len(data)):
                tmp = []
                for m in range(i):
                    tmp.append(dataset_list[m][l])
                convlist.append(tmp)
            
            np.save(file=args['output'] + '/' + "image_train.npy",arr=np.array(convlist[0]))

            for n in range(len(data) - 1):
                if n < len(config.el_in):
                    np.save(file=args['output'] + '/' + str(config.el_in[n][0])+"_train.npy",arr=np.array(convlist[n+1]))
                else:
                    np.save(file=args['output'] + '/' + str(config.el_ms[n-len(config.el_in)][0])+"_train.npy",arr=np.array(convlist[n+1]))

    def searchCSV(self, pathinfo):
        list = []
        for path in pathinfo:  
            search_files = str(path) + "/**/**/*.csv"
            #print (search_files)
            result = glob.glob(search_files)
            for match_path in result:
                list.append(match_path)
        return list

if __name__ == '__main__':
   makeDataset()