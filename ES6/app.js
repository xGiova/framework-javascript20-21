

// expression function 

const prendiDispari = numero=> numero % 2 !==0


const numeri = [4,7,5,4,2,8,9,9,2,1]
console.log(numeri)
const dispari = numeri.filter(prendiDispari)
console.log("numeri dispari", dispari);

