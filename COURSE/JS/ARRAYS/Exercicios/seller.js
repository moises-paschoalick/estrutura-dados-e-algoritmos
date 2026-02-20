
async function maxSeller() {

   const response = await fetch("./seller.json");
   const jsonData = await response.json();

   let max = jsonData[0];

   for (let item of jsonData) {
      if(item.amount > max.amount)  
        max = item;
   }

   return max;   
}

//console.log(maxSeller());

(async () => {
    const result = await maxSeller();
    console.log(result);
})();



