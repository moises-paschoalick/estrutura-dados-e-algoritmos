package com.loiane.estruturadados.teste;

import com.loiane.estruturadados.vetor.Vetor;

public class Aula09 {

    public static void main(String[] args) {

        Vetor vetor = new Vetor(5);

        vetor.adiciona("B");
        vetor.adiciona("G");
        vetor.adiciona("D");
        vetor.adiciona("E");
        vetor.adiciona("F");
        System.out.println(vetor);

        vetor.remove(1);
        vetor.remove("B");
        System.out.println(vetor);

    }
}
