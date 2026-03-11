package com.loiane.estruturadados.teste;

import com.loiane.estruturadados.vetor.Vetor;
import com.loiane.estruturadados.vetor.VetorObjetos;

public class Aula10 {

    public static void main(String[] args) {

        VetorObjetos vetor = new VetorObjetos(3);
        Contato c1 = new Contato("Contato 1", "1234-4567", "contanto1@email.com");
        Contato c2 = new Contato("Contato 2", "2345-6789", "contanto2@email.com");
        Contato c3 = new Contato("Contato 3", "3456-7890", "contanto3@email.com");


        Contato c4 = new Contato("Contato 3", "3456-7890", "contanto3@email.com");

        //vetor.adiciona(3); //Autoboxing do Java

        vetor.adiciona(c1);
        vetor.adiciona(c2);
        vetor.adiciona(c3);

        System.out.println("Tamanho = " + vetor.tamanho());
        System.out.println(vetor);

        int pos = vetor.busca(c4); // Usando equals
        if(pos > -1) System.out.printf("Elemento existe no vetor");
        else System.out.printf("Elemento não existe no vetor");

    }
}
