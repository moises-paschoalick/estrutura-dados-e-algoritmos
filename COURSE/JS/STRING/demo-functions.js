let str1 = "Hello, ";
let str2 = "World!";
let str3 = "This is a test. Testing, test one, two, three.";
let str4 = "Mozilla";

console.log(`str1: "${str1}"`);
console.log(`str2: "${str2}"`);
console.log(`str3: "${str3}"`);
console.log(`str4: "${str4}"`);

/*
------------------------------------------------------------------------------------------------
Quando usar cada um?
indexOf() → Quando quiser saber se a palavra existe e onde ela aparece primeiro (sem regex).
search() → Quando quiser buscar usando regex e só precisa da primeira posição.
match() → Quando quiser pegar todas as ocorrências e trabalhar com regex avançado.
------------------------------------------------------------------------------------------------
*/

// concat()
let concatentaed = str1.concat(str2);
console.log("str1.contact(str2): " + concatentaed)

// indexOf()
let result = str3.indexOf("Test");
console.log("str3.indexOf('Test'):", result);

// match()
console.log("str3.indexOf('test'):", str3.match(/test/g));

// matchAll()
let matchAllResult1 = Array.from(str3.matchAll("test"));
console.log("Array.from(str3.matchAll('test')):", matchAllResult1);

// replace()
console.log("str3.replace('test','demo'):", str3.replace("test", "demo"))

// replaceAll()
console.log("str3.replaceAll('test','demo'):", str3.replaceAll("test", "demo"))

const number = "3.451.897";
const number2 = number.replaceAll(".", "")
console.log("Number2: ", number2);

// search()
console.log("str3.search('test'):", str3.search("test"));

// split()
const s = "batata tomate abacaxi";
console.log(s.split(' ')[1])
console.log("str3.split(' '):", str3.split(" "));

// slice
// Mozilla
console.log("str4.slice(-3):", `"${str4.slice(-3)}"`);    // "lla"
console.log("str4.slice(2, 5):", `"${str4.slice(2, 5)}"`);  // "zil"
console.log("str4.slice(5, 2):", `"${str4.slice(5, 2)}"`);  // ""

// substring()
console.log("str4.substring(-3):", `"${str4.substring(-3)}"`);  // "Mozilla" (índices negativos tornam-se 0)
console.log("str4.substring(2, 5):", `"${str4.substring(2, 5)}"`); // "zil"
console.log("str4.substring(5, 2):", `"${str4.substring(5, 2)}"`); // "zil" (índices são invertidos)

// toLowerCase()
console.log("str2.toLowerCase():", str2.toLowerCase());

// toUpperCase()
console.log("str1.toUpperCase():", str1.toUpperCase());
console.log(str1) // Não modifica a string original

// trim()
const hello = '    Hello World!    '
console.log('"    Hello World!    ".trim():', `"${hello.trim()}"`);

// charAt()
console.log("str2.charAt(1):", str2.charAt(1));

// startsWith()
console.log("str3.startWith('Wor'):", str2.startsWith("Wor"));

// endWith()
console.log("str2.endsWith('!'):", str2.endsWith("!"));