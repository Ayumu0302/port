#!/usr/bin/env python
# -*- coding: utf8 -*-

# 入力データ項目
el_in = (
    ("figure",  "長さ(細長さ)",   ("長　", "長手", "長手短手", "短手", "丸　")),
    ("bante", "番手", ("１番手","２番手","３番手","４番手","Ｂ品　")),
)

# 計測データ項目
el_ms = (
    ("width",   "幅",   "cm"),  # 長さ(細長さ)に関係
    ("heght",   "長さ", "cm"),   # 長さ(細長さ)に関係
    ("weight",  "重さ", "g")    # サイズに対応
)

# プレディクション用 APP_prediction_M2.2
output = (
    ("figure",  "長さ(細長さ)",   ("　長　　", "　長手　", "長手短手", "　短手　", "　丸　　")),
    ("bante", "番手", ("１番手　","２番手　","３番手　","４番手　","Ｂ品　　")),
    ("size", "サイズ", ("　　Ｓ　", "　　Ｍ　", "　　Ｌ　", "　２Ｌ　", "　３Ｌ　"))
)


# データの背景色を設定

set_color = (255,255,255)
#set_color = (200,200,200)
#set_color = (0,0,0)

# -=-=-=-=- この設定は、'imageEdit.py'を呼び出すプログラムで使用される -=-=-=-=-


# データの画像サイズを設定 (width, height) # default(150, 60)

#image_size = (2, 5)
#image_size = (4, 10)
#image_size = (12, 30)
#image_size = (20, 50)
image_size = (30, 75)
#image_size = (40, 100)
#image_size = (50, 125)
#image_size = (60, 150)
#image_size = (80, 200)
#image_size = (120, 300)
#image_size = (160, 400)

# -=-=-=-=- この設定は、'TrainingAmaHime_customize.py'及び'imageEdit.py'を呼び出すプログラムで使用される -=-=-=-=-


# imageEdit.pyでの画像リサイズ倍率
# 小型ハードではオリジナル画像のサイズが変わるため再設定が必要　現状は'(5/21)'
# original_size = (210, 525)

resize_magnification = image_size[1] / 525

# -=-=-=-=- この設定は、MakeDataAmaHime_imageEdit.pyで使用される -=-=-=-=-


# データセットのカラースケールを設定  "gray" or "bgr"

color_type = "bgr"
#color_type = "gray"

# -=-=-=-=- この設定は、'TrainingAmaHime_customize.py'及び'imageEdit.py'を呼び出すプログラムで使用される -=-=-=-=-


# imageEdit.pyでの編集実施項目を選択
#   [1,0,0,0]は２値化処理により、サツマイモの抽出処理の有無
#   [0,1,0,0]は画像のオーバレイ設定でcropped画像を合成する位置を中央にするか'1',左上にするか'0'
#   [0,0,1,0]はフリップ処理実施の有無（方向はrandom）
#   [0,0,0,1]はリサイズ処理を実施の有無

ImageEditMode = [1, 1, 1, 1]

# -=-=-=-=- この設定は、'imageEdit.py'を呼び出すプログラムで使用される -=-=-=-=-



# Specify 0 if you selected the original size
if image_size == (210, 525):
    ImageEditMode[3] = 0
# Specifies the color channel when grayscale is selected
if color_type == "gray":
    ch = 1
else:
    ch = 3
print('-------------------------------------',
      '\n画像サイズ :', image_size,
      '\nリサイズ倍率 :', resize_magnification,
      '\nバックグラウンドカラー :',set_color,
      '\nカラースケール :', color_type,
      '\n画像処理設定 :', ImageEditMode,
      '\n-------------------------------------')