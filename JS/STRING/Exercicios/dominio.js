/*function extractEmailInformation(email) {
    const user = email.split("@")[0];
    const domain = email.split("@")[1];
    const isBrazil = domain.endsWith(".br") ? "sim": "nao";

    return `Usuario: ${user} \nDominio: ${domain}\nBrasileiro: ${isBrazil}`
    
}

console.log(extractEmailInformation("joao.silva23@yahoo.com.br"));
console.log(extractEmailInformation("maria123@gmail.com"));
*/

// Solução Nelio
function extractEmailInformation(email) {

    const parts = email.split("@");
    const username = parts[0];
    const domain = parts[1];

    const isBrazilian = domain.endsWith(".bir");

    return { username, domain, isBrazilian};

}

const emailInfo = extractEmailInformation("maria123@gmail.com");
console.log("Usuario:", emailInfo.username);
console.log("Domínio:", emailInfo.domain);
console.log("Brasileiro:", emailInfo.isBrazilian ? "sim" : "não");
