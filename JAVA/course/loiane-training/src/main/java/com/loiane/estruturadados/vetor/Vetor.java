package com.loiane.estruturadados.vetor;

import java.util.Arrays;

public class Vetor {

    private String[] elementos;
    private int tamanho;

    public Vetor(int capacidade) {
        this.elementos = new String[capacidade];
        this.tamanho = 0;
    }

    // Não eficiente
    /*
    public void adiciona(String elemento) {
        for (int i=0; i<this.elementos.length; i++) {
            if (this.elementos[i] == null) {
                this.elementos[i] = elemento;
                break;
            }
        }
    }*/

    /*
    public void adiciona(String elemento) throws Exception {
        if (this.tamanho < this.elementos.length){
            this.elementos[this.tamanho] = elemento;
            this.tamanho++;
        } else {
            throw new Exception("Vetor já está cheio, não é possível adicionar mais elementos");
        }
    }*/

    public boolean adiciona(String elemento) {
        this.aumentaCapacidade();
        if (this.tamanho < this.elementos.length){
            this.elementos[this.tamanho] = elemento;
            this.tamanho++;
            return true;
        }
        return false;
    }
    //Overloading -> Sobrecarregar o método adiciona, modificando a assinatura
    public boolean adiciona(int posicao, String elemento) {
        if (!(posicao >= 0 && posicao < tamanho)) {
            throw new IllegalArgumentException("Posição Inválida");
        }

        this.aumentaCapacidade();

        /*
        for(int i=this.tamanho; i>posicao; i--){
            String auxElemento = this.elementos[i-1];
            String posElemento = this.elementos[i];
            this.elementos[i-1] = posElemento;
            this.elementos[i] = auxElemento;
        }
         */

        for (int i=this.tamanho-1; i>=posicao; i--){
            this.elementos[i+1] = this.elementos[i];
        }
        this.elementos[posicao] = elemento;
        this.tamanho++;

        return true;
    }

    public int tamanho() {
        return this.tamanho;
    }

    //RuntimeException -> não precisa do Throws Exception
    public String busca(int posicao) {
        if (!(posicao >= 0 && posicao < tamanho)) {
            throw new IllegalArgumentException("Posição Inválida");

        }
        return this.elementos[posicao];
    }

    // Sobrescrever o método
    public int busca(String elemento) {
        for (int i=0; i<this.tamanho; i++) {
            if (this.elementos[i].equals(elemento)) {
                return i;
            }
        }
        return -1; // Não existe
    }

    private void aumentaCapacidade() {
        if(this.tamanho == this.elementos.length) {
            // dobra a capacidade, melhor forma dobrar o tamanho;
            String[] elementosNovos = new String[this.elementos.length * 2];
            for (int i=0; i<this.elementos.length; i++){
                elementosNovos[i] = this.elementos[i];
            }
            this.elementos = elementosNovos;
        }
    }


    /*
    @Override
    public String toString() {
        //Sem StringBuilder
        String s = "[";
        //Pega todos os elementos menos o último
        for (int i=0; i<this.tamanho-1; i++){
            s += this.elementos[i];
            s += ", ";
        }

        //Pega o último elemento
        if (this.tamanho>0) {
            s += this.elementos[this.tamanho-1];
        }

        s += "]";

        return s;

        //return Arrays.toString(elementos);
    }*/

    //Com StringBuilder
    @Override
    public String toString() {
        StringBuilder s = new StringBuilder();
        s.append("[");

        //Pega todos os elementos menos o último
        for (int i=0; i<this.tamanho-1; i++){
            s.append(this.elementos[i]);
            s.append(", ");
        }

        //Pega o último elemento
        if (this.tamanho>0) {
            s.append(this.elementos[this.tamanho-1]);
        }
        s.append("]");
        return s.toString();
    }

}
