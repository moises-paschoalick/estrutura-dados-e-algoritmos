// Com padStart
function formatDate(day, month, year) {
        
    const formatDay = String(day).padStart(2, '0');
    const formatMonth = String(month).padStart(2, '0');
    
    return `${formatDay}/${formatMonth}/${addZero(year)}`;    
}
/*
function formatDate(day, month, year) {
    return `${addZero(day)}/${addZero(month)}/${addZero(year)}`;    
}*/

function addZero(n) {
    if (n < 10) {
        return `0${n}`;
    }
    return `${n}`;
}



/*
function extractDateData(date) {
    const dataJson = JSON.parse(date);    
    return `${dataJson.day}/${dataJson.month}/${dataJson.year}`;    
}

const jsonString = '{"day": "21", "month": "7", "year": "2010"}';

const dataResult = extractDateData(jsonString);
*/

//console.log(`${dataResult}`);

console.log(formatDate(21,7,2010));





