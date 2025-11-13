function findEmails(string) {
    const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
    const result = string.match(regex); //ocorrências q possui, nulo se não encontrar
    if (result) {
        return result;
    }
    return [];
}

const text = "Para mais informações, contate-nos em contato@exemplo.com ou suporte@exemplo.com.br.";

const emails = findEmails(text);


if (emails.length > 0) {
    console.log("Emails encontrados:");
    for (let i = 0; i < emails.length; i++) {
        console.log(emails[i]);
    }
}
else {
    console.log("Nenhum email encontrado.")
}