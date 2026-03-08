package com.loiane.estruturadados.teste;

import com.loiane.estruturadados.vetor.Vetor;

public class Aula03 {

    public static void main(String[] args) {
        Vetor vetor = new Vetor(2);

        //Usando exception
        /*
        try{
            vetor.adiciona("Elemento 1");
            vetor.adiciona("Elemento 2");
            vetor.adiciona("Elemento 3");

        } catch (Exception e){
            e.printStackTrace();
        }*/

        // Sem exception
        vetor.adiciona("Elemento 1");
        vetor.adiciona("Elemento 2");
        vetor.adiciona("Elemento 3");
    }

}
