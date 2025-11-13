function validateCEP(cep) {
    const regex = /^\d{5}-?\d{3}$/;
    return regex.test(cep)
}

console.log(validateCEP('12345-678'));
console.log(validateCEP('12345678'));
console.log(validateCEP('1234-5678'));

// \D -> O que não for digito
function removeNonDigits(string) {
    const regex = /\D/g;
    return string.replace(regex, "");
}

console.log(removeNonDigits("94923784799"));
console.log(removeNonDigits("213.445.034-82"));


// Termina com .br $ -> tem q terminar com
function validateBrDomain(domain) {
    const regex = /\.br$/;
    return regex.test(domain);
}

console.log(validateBrDomain("batata.com.br"));
console.log(validateBrDomain("banana.com"));
