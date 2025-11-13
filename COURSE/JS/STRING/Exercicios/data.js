function extractDateData(date) {
    
    const parts = date.split("/");
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    
    return { day, month, year };
}

const obj = extractDateData("21/07/2010");
console.log(`Dia: ${obj.day}`);
console.log(`Mês: ${obj.month}`);
console.log(`Year: ${obj.year}`);


/*
// Adicione zeros à esquerda em datas no formato DD/MM/AAAA
function extractDateData(date) {
    let day = Number(date.split("/")[0]);
    let month = Number(date.split("/")[1]);
    const year = date.split("/")[2];

    if(day < 10)
       day = "0" + day;
   
    if(month < 10)
        month = "0" + month;

    return day + "/" + month + "/" + year;
}

const result = extractDateData("1/7/2010");
console.log(result);
*/


/*
const parts = "21/07/2010".split("/");
const month = Number(parts[1]);
console.log("Month:", month);
*/