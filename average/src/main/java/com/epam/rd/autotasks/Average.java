package com.epam.rd.autotasks;

import java.util.Scanner;

public class Average {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // Use Scanner methods to read input
        int num = scanner.nextInt();
        int sum = num;
        int avg = 0;
        int count = 0;
        while(num!=0){
            num = scanner.nextInt();
            sum+=num;
            count++;

        }
        avg = sum/count;
        System.out.println(avg);
    }

}