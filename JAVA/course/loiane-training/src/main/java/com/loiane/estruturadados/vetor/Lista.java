package com.loiane.estruturadados.vetor;

import java.lang.reflect.Array;

//Diamond <>
//T -> Class type
public class Lista<T> {

    //Generics iniciou no Java 5...
    private T[] elementos;
    private int tamanho;

    public Lista(int capacidade) {
        // Solução mais elegante
        this.elementos = (T[]) new Object[capacidade]; // Solução do livro java effetivo
        this.tamanho = 0;
    }

    // Opção 2
    // Reflection JAVA -> instanciar objetos
    public Lista(int capacidade, Class<T> tipoClasse) {
        //new T[capacidade] -> java não permite
        this.elementos = (T[]) Array.newInstance(tipoClasse, capacidade);
        this.tamanho = 0;
    }


    public boolean adiciona(T elemento) {
        this.aumentaCapacidade();
        if (this.tamanho < this.elementos.length){
            this.elementos[this.tamanho] = elemento;
            this.tamanho++;
            return true;
        }
        return false;
    }
    //Overloading -> Sobrecarregar o método adiciona, modificando a assinatura
    public boolean adiciona(int posicao, T elemento) {
        if (!(posicao >= 0 && posicao < tamanho)) {
            throw new IllegalArgumentException("Posição Inválida");
        }

        this.aumentaCapacidade();

        for (int i=this.tamanho-1; i>=posicao; i--){
            this.elementos[i+1] = this.elementos[i];
        }
        this.elementos[posicao] = elemento;
        this.tamanho++;

        return true;
    }

    public void remove(int posicao) {
        if (!(posicao >= 0 && posicao < tamanho)) {
            throw new IllegalArgumentException("Posição Inválida");
        }

        for (int i=posicao; i<tamanho-1; i++){//
            this.elementos[i] = this.elementos[i+1];

        }
        this.elementos[tamanho-1] = null;
        this.tamanho--;
    }

    public void remove(T elemento) {

        int posicao = busca(elemento);
        if(posicao == -1)
            throw new IllegalArgumentException("Elemento não existe no vetor");

        remove(posicao);
    }

    public int tamanho() {
        return this.tamanho;
    }

    //RuntimeException -> não precisa do Throws Exception
    public Object busca(int posicao) {
        if (!(posicao >= 0 && posicao < tamanho)) {
            throw new IllegalArgumentException("Posição Inválida");

        }
        return this.elementos[posicao];
    }

    // Sobrescrever o método
    public int busca(T elemento) {
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
            T[] elementosNovos = (T[]) new Object[this.elementos.length * 2];
            for (int i=0; i<this.elementos.length; i++){
                elementosNovos[i] = this.elementos[i];
            }
            this.elementos = elementosNovos;
        }
    }

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
