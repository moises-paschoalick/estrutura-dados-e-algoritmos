function print(n) {    
    console.log(n);
    if(n > 0) print(n -1);
}
//print(5);


// Solução interativa sequencial
function sumNaturals(n) {
    let total = 0;
    for (let i=0; i<= n; i++) {
        total = total + i;
    }
    return total;
}

// Solução recursiva
function sumNaturalsR(n) {
    if(n === 0) {
        return 0; //Corta a função
    }

    return n + sumNaturals(n-1)
}


//const result = sumNaturals(4);
const result = sumNaturalsR(2);
console.log(result)