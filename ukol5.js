
let cislo = Number(prompt("Zadej:"));
let pole = [];

while (cislo != 0) {
  pole.push(cislo); 
  cislo = Number(prompt("Zadej:"));
    }

//let nejmensi = pole[0];
//for (let i =0; i < pole.length; i++)  {
 // if (nejmensi > pole[i]) {
   // nejmensi = pole [i];
  //}
//}

let nejmensi = pole[0];
for (let cislo of pole) {
  if (nejmensi > cislo) {
    nejmensi = cislo;
  }
}
console.log("Nejmenší zadané číslo je: " + nejmensi);



