function validateTelefone(string) {
    const regex = /^(?:\+55\s?)?(?:\([1-9]{2}\)|[1-9]{2})\s?(?:9\s?)?[6789][0-9]{3}\s?-?\s?[0-9]{4}$/;
    return regex.test(string); 
}

console.log(validateTelefone("+55 11 97575-7373")) // true
console.log(validateTelefone("+551975757373")) // true
console.log(validateTelefone("11975757373")) // true
console.log(validateTelefone("011975757373")) // false
console.log(validateTelefone("5511975757373")) // false


console.log("-------------------- Date -----------------------") 
// com validação de dia entre 1 e 31, e mês de 1 a 12, podendo ou não ter zero à esquerda dos valores menores que 10)
function validateDate(string) {
    const regex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/(19|20)\d\d$/;
    return regex.test(string); 
}

console.log(validateDate("15/03/2024")) // true
console.log(validateDate("31/02/2024")) // true
console.log(validateDate("32/02/2024")) // false

console.log(validateDate("31/02/2024")) // true
console.log(validateDate("07/02/2024")) // true



