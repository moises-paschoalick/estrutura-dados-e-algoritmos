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

//console.log(verifyAnagram("anagram","nagaram"));

// Problema "Valid-anagram"
// Fazer: sem array 
// somente minuscula
/*
function verifyAnagram2(word1, word2){
  let separateWord1 = word1.split("");  
  let separateWord2 = word2.split("");

  separateWord1.sort();
  separateWord2.sort();
  
  let concateWord1 = separateWord1.join('');
  let contateWord2 = separateWord2.join('');

  return concateWord1 === contateWord2;    
}

console.log(verifyAnagram2("anagram","nagaram")); // true
console.log(verifyAnagram2("anagram","nagaran")); // false
*/

function areAnagrams(firstWord, secondWord) {
    const sortedFirstWord = firstWord.split('').sort().join('');
    const sortedSecondWord = secondWord.split('').sort().join('');
    
    return sortedFirstWord === sortedSecondWord;
}

console.log(areAnagrams("anagram","nagaram")); // true