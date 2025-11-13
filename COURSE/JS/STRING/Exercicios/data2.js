function extractDateData(date) {
    const dataJson = JSON.parse(date);    
    return `${dataJson.day}/${dataJson.month}/${dataJson.year}`;    
}

const jsonString = '{"day": "21", "month": "7", "year": "2010"}';

const dataResult = extractDateData(jsonString);

console.log(`${dataResult}`);





