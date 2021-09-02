import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Random;
 
public class SimpleGame {
    public static void main(String[] args) {
        System.out.println("[1] アメリカの首都はどこですか？");
        System.out.println("[2] １：ニューヨーク");
        System.out.println("[3] ２：ワシントン");
        System.out.println("[4] ３：ロサンジェルス");
        System.out.print("[5] 答えを番号で入力し，改行を押してください。=>");
        InputStreamReader inputStreamReader = new InputStreamReader(System.in);//[6]
        BufferedReader bufferedReader = new BufferedReader(inputStreamReader);//[7]
        int answer = 0;//[8]
        String message = "間違いです。";//[9]
        try {//[10]
            String buf = bufferedReader.readLine();//[11]
            answer = Integer.parseInt(buf);//[12]
        } catch (Exception exception) {//[13]
            answer = 0;//[14]
            message = "答えを番号で入力してください。";//[15]
        }
        if (answer == 2) {//[16]
            message = "正解です。";//[17]
        }
        System.out.println(message);//[18]
    }
}