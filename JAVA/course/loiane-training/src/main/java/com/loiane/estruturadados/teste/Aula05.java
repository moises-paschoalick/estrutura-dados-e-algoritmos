package com.loiane.estruturadados.teste;

import com.loiane.estruturadados.vetor.Vetor;

public class Aula05 {

    public static void main(String[] args) {
        Vetor vetor = new Vetor(10);

        vetor.adiciona("Elemento 1");
        vetor.adiciona("Elemento 2");
        vetor.adiciona("Elemento 3");

        System.out.println(vetor.busca(3)); // Null
        System.out.println(vetor.busca(15)); // Excetion

        //System.out.println(vetor.toString());
    }
}
