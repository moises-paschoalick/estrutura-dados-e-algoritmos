package com.loiane.estruturadados.teste;

import com.loiane.estruturadados.vetor.Lista;
import com.loiane.estruturadados.vetor.VetorObjetos;

public class Aula11 {

    public static void main(String[] args) {
        Contato c1 = new Contato("Contato 1", "1234-4567", "contanto1@email.com");

        // Um vetor armazena uma sequência de valores onde todos são do mesmo tipo.
        Lista<String> lista = new Lista<String>(1);
        Lista<Number> lista2 = new Lista(1); // Não precisa <String>
        Lista<Contato> lista3 = new Lista(1);

        Lista<Contato> lista4 = new Lista(1, Contato.class);

        lista.adiciona("Elemento do tipo string");
        lista2.adiciona(1);
        lista3.adiciona(c1);

        System.out.println(lista);

    }
}
