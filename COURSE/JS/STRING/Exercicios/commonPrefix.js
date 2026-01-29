// Problema "prefixo-comun" - longest-common-prefix (Leetcode)
// Fazer: Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length == 0) return ""; 
  if(strs.length == 1) return strs[0]; 

  let last = strs.length-1; 
  let prefix; 
   
  for(i=0; i < last; i++){
     prefix = checkCommonWords(strs[i], strs[i+1]);
  }
     
  if(prefix.length == 0) return "";
  return prefix.join('') ?? ""; 
}

function checkCommonWords(v1, v2){
   // comparar v1 com v2
    let words = longestVector(v1,v2);
    let word1 = words[0];
    let word2 = words[1];
    let longest = [];

    //console.log(word1 + " -" + word2)
    let count = 0;
    
    //TODO Testar comparar com a menor letra (não percorrer todas as letras do maior)
    //maior comparar letra letra 
    for(let i=0; i < word2.length; i++) { 
        if(word1[i] === word2[i]) longest[i] = word1[i];
        else break;
    } 

    return longest;
}

function longestVector(v1, v2){
    let word1 = v1;
    let word2 = v2;
    
    let longestWord = word1;
    let shortestWord = word2;
    
    // pegar a maior
    if(word2.length > word1.length){
       longestWord = word2;
       shortestWord = word1;
    }        

    return [longestWord, shortestWord];
}

// case 1
let words = ["flowers", "flow", "flight"];
// case 2
let words2 = ["dog", "racecar", "car"];
// case 3
let words3 = [""];
// case 4
let words4 = ["reflower","flow","flight"]

console.log(longestCommonPrefix(words4)); 

//console.log(checkCommonWords("racecar","car"));
//console.log(checkCommonWords("car","car"));