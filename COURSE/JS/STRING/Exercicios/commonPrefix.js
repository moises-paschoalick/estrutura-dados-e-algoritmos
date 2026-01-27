// Problema "prefixo-comun" - longest-common-prefix (Leetcode)
// Fazer: Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".


function longestCommonPrefix(v){
   let prefix = checkCommonWords(v[0],v[1]);
   prefix =  checkCommonWords(prefix,v[2]);
   
   return prefix; 
}

function checkCommonWords(v1, v2){
   // comparar v1 com v2
    let words = longestVector(v1,v2);
    let word1 = words[0];
    let word2 = words[1];
    let longest = [];
    
    for(let i=0; i < word1.length; i++) { 
        for(let j=0; j < word2.length; j++){
          if(word1[i] == word2[j]) 
            longest[i] = word1[i];
        }
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

    return [longestWord,shortestWord];
}


let words = ["flowers", "flow", "flight"];

console.log(longestCommonPrefix(words)); 


