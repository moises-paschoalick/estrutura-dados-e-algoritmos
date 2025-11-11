//  A concatenação usando s = s + valor não é eficiente em loops grandes porque strings em
//  JavaScript são imutáveis. Cada concatenação cria uma nova string na memória, copiando todo
//  o conteúdo anterior e acrescentando o novo caractere, o que impacta desempenho e consumo de
//  memória. A alternativa mais performática é usar um array com push() e ao final aplicar 
// join("").

/*
function removeNonDigits(str) {
    let s = "";

    for (let i = 0; i < str.length; i++) {
        //console.log(str[i]);        
        if( str[i] >= '0' && str[i] <= '9') {
            s = s + str[i]; //Não eficiente para muitas concatenações
        }        
    }

    return s;
}*/


function removeNonDigits(str) {
    let charArray = [];

    for (let i = 0; i < str.length; i++) {        
        if( str[i] >= '0' && str[i] <= '9') {
            charArray.push(str[i]); //Mais eficiente
        }        
    }

    return charArray.join("");
}



function removeNonDigits2(str) {
    const regex = /\D/g;
    return str.replace(regex, "");    
}

//console.log(removeNonDigits("87409217293"));
//console.log(removeNonDigits("874092172-93"));
console.log(removeNonDigits("874.092.172-93"));
