// Problema "Valid-anagram"
// Fazer: usando o um array com todas as posiçoes de letras do alfabeto, verificar se duas palavras são anagramas uma da outra.
// somente minusculas

function insertAlphabet(word){
    let alphabet = [];
    
    for(let i=0; i < word.length; i++) { 
        let getChar = word[i];
        if(alphabet[getChar.charCodeAt()] != undefined)
          alphabet[getChar.charCodeAt()]++
        else
          alphabet[getChar.charCodeAt()] = 1;                
    } 
   
    return alphabet;
}

function verifyAnagram(word1, word2) {
     
    let alphabet1 = insertAlphabet(word1);    
    let alphabet2 = insertAlphabet(word2);    
    
    let isAanagran = true;
    for(let i=0; i < alphabet1.length; i++) {      
      if(alphabet1[i] !== alphabet2[i])  
        isAanagran = false;
    }

    return isAanagran;

 };

console.log(verifyAnagram("anagram","nagaram"));
