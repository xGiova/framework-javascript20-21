var saluto1 = "ciao"; // vanilla variabile 

const saluto = "ciao"; // costante = variabile ES6 più rigida quindi non si puo ridichiarare e ne riassegnare un valore.

const colori = [];

colori.push('red') // in questo caso ho aggiunto un nuovo valore dentro all' array colori.

console.log (colori);

colori.push('green');
console.log (colori);

let numeri = [1,2,3,4,5]; // con let posso fare una nuova riassegnazione.

numeri = "uno, due, tre, quattro, cinque" // ma non posso ridichiarare.

const num = [1,2,3,4,5,6,7,8,9]
// 2,4,6,8...

const perDueArray = num.map(function (numero){
    return numero * 2;
})


// arrow function 
const res = num.map((numero) => { // in questo caso quando ho un solo argomento nella callback posso togliere le parentesi
return numero * 2;
})

// arrow function secondo caso (versione minimale)
// se la funzione di callback contiene una sola riga di codice posso omettere le parentesi graffe e il return.
const res1 = num.map((numero) => numero * 2)

    

console.log(res);
console.log(res1);
console.log(perDueArray);

// function expression 

let sum = (a,b) => a + b;

let sum2 = function (a,b) 
{
    return a+b;   
}

// quadrato di un numero

function square (n)
{
const res = n * n;
return res;

}

// const res = square (5) // console.log(25)

// function expression square 

const squareexpression = function (n)
{
 return n*n;   
}

// function expression con arrow function 

const squarearrow = (n) => { return n*n;}

// secondo caso (versione semplificata)

const squareeasy = n => n * n;

squareeasy(5);

// array quadrato con arrow function 

const numeriquadrato = [5,3,2]
const quadratoarray = numeriquadrato.map(n=> n * n).filter(n => n % 2 === 0); // in questo caso ottengo i numeri pari restituiti con array map.

