import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Random;
 
public class SimpleGame {
    public static void main(String[] args) {
        System.out.println("ことわざの急がば回れの語源となったのはどこ？");
        System.out.println("１：富士山");
        System.out.println("２：鳥取砂丘");
        System.out.println("３：琵琶湖");
        System.out.println("４：清水寺");
        System.out.print("答えを番号で入力し，改行を押してください。=>");
        String message = "間違いです。";
        int x = 1;
        while(x == 0){
        InputStreamReader inputStreamReader = new InputStreamReader(System.in);//[6]
        BufferedReader bufferedReader = new BufferedReader(inputStreamReader);//[7]
        int answer = 0;//[8]
        try {//[10]
            String buf = bufferedReader.readLine();
            answer = Integer.parseInt(buf);
        } catch (Exception exception) {
            answer = 0;
            message = "答えを番号で入力してください。";
        }
        if (answer == 3) {
            message = "正解です。";
            x = 0;
        }else{
            x = 0;
        }
        }
        

        System.out.println(message);
    }
}