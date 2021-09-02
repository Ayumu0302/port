import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Random;

public class jankencount{
    //ルールの解説とインプット
    public static void main(String[] args){
    System.out.println("じゃんけんをしましょう");
    System.out.println("ルール①");
    System.out.println("パーは「１」、グーは「２」、チョキは「３」と入力してね");
    System.out.println("じゃあ、いくよ！");
    System.out.println("最初はぐー！　じゃんけん！(数字を入力して改行)");
    int x = 0;
    int co = 0;
    int co1 = 0;
    while(x == 0){
        InputStreamReader hands = new InputStreamReader(System.in);
        BufferedReader hands1 = new BufferedReader(hands);
        
        String message = "bye!";
        int answer = 0;

        //機械の手はランダムで生成
        Random random = new Random();
        int Value = random.nextInt(3);
        
        try {
            String hands2 = hands1.readLine();
            answer = Integer.parseInt(hands2);
        } catch  (Exception exception) {
            message = "番号で入力してください。";
        }
        
        
        if (answer == 1 || answer == 2 || answer == 3) {
            switch(Value){
                case 0:
                    System.out.println("あなたの負けです");
                    co1 = co1 + 1;
                    x = 1;
                    break;
                case 1:
                    System.out.println("あいこで!");
                    continue;
                case 2:
                    System.out.println("あなたの勝ちです");
                    co = co + 1;
                    x = 1;
                    break;
            }
        }else{
            System.out.println("ちゃんと入力してね");
        }
        
        
        System.out.println(message);
    }
        
    System.out.println("もう一回、いくよ！");
    System.out.println("最初はぐー！　じゃんけん！(数字を入力して改行)");
    x = 0;
    while(x == 0){
        InputStreamReader hands = new InputStreamReader(System.in);
        BufferedReader hands1 = new BufferedReader(hands);
        
        String message = "bye!";
        int answer = 0;

        //機械の手はランダムで生成
        Random random = new Random();
        int Value = random.nextInt(3);
        
        try {
            String hands2 = hands1.readLine();
            answer = Integer.parseInt(hands2);
        } catch  (Exception exception) {
            message = "番号で入力してください。";
        }
        
        
        if (answer == 1 || answer == 2 || answer == 3) {
            switch(Value){
                case 0:
                    System.out.println("あなたの負けです");
                    co1 = co1 + 1;
                    x = 1;
                    break;
                case 1:
                    System.out.println("あいこで!");
                    continue;
                case 2:
                    System.out.println("あなたの勝ちです");
                    co = co + 1;
                    x = 1;
                    break;
            }
        }else{
            System.out.println("ちゃんと入力してね");
        }
        
        
        System.out.println(message);
    }
        
    System.out.println("ラスト、いくよ！");
    System.out.println("最初はぐー！　じゃんけん！(数字を入力して改行)");
    x = 0;
    while(x == 0){
        InputStreamReader hands = new InputStreamReader(System.in);
        BufferedReader hands1 = new BufferedReader(hands);
        
        String message = "bye!";
        int answer = 0;

        //機械の手はランダムで生成
        Random random = new Random();
        int Value = random.nextInt(3);
        
        try {
            String hands2 = hands1.readLine();
            answer = Integer.parseInt(hands2);
        } catch  (Exception exception) {
            message = "番号で入力してください。";
        }
        
        
        if (answer == 1 || answer == 2 || answer == 3) {
            switch(Value){
                case 0:
                    System.out.println("あなたの負けです");
                    co1 = co1 + 1;
                    x = 1;
                    break;
                case 1:
                    System.out.println("あいこで!");
                    continue;
                case 2:
                    System.out.println("あなたの勝ちです");
                    co = co + 1;
                    x = 1;
                    break;
            }
        }else{
            System.out.println("ちゃんと入力してね");
        }
        
        
        System.out.println(message);
    }
    if (co == 3) {
        System.out.println("完勝！　素晴らしい！");
    }else if(co == 2){
        System.out.println("2回勝ち越し、やるね");
    }else if(co == 1){
        System.out.println("負けちゃったね、どんまい");
    }else if(co == 1){
        System.out.println("完敗！　弱いね＝！");
    }
    }
}