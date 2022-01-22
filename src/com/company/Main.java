package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        try {
//            Scanner in = new Scanner(System.in);
//            System.out.print("Input key and text with enter: ");
//            String key = in.nextLine();
//            String text = in.nextLine();
//            in.close();
            String key = "password";
            String text = "texttext";
            String ciphertext = SimpleCrypto.encrypt(key, text);
            String result = SimpleCrypto.decrypt(key, ciphertext);
            System.out.println("You wan to encrypt: " + text);
            System.out.println("Encryption result: " + ciphertext);
            System.out.println("Decrypting result: " + result);
        }
        catch (Exception ex) {
            ex.printStackTrace();
        }
    }
}
