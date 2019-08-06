// let imiona = ['Monika','Krystian','Łukasz'];

// imiona[3] = 'Tania';
// imiona[2] = 'Ela';

// imiona.push('Geralt');

// console.log("imiona:",imiona);

// imiona.pop();
// imiona.pop();

// console.log("imiona po pop()", imiona);

// console.log(imiona.join('-'));
// console.log(imiona.reverse());

// let wynik

// function iloczyn (a,b,c) {
//   wynik = a * b * c;
//   return wynik
// }

// iloczyn (7,3,1);

// console.log(wynik);

// if (wynik % 3 == 0) {
//    console.log(`Wynik ${wynik} jest podzielny przez 3`)
//  } else {
//    console.log(`Wynik ${wynik} jest nie jest podzielny przez 3`)
//  }

// let names = ["Ania", "Beata", "Mateusz", "Karolina", "Bartosz", "Eugeniusz"]

// for(let i = 0; i < names.length; i++) { 
//     console.log(i + 1, names[i])}


function silnia(n) {
   let wynik1 = 1;
    for(let i = 1; i <= n; i++) {
        wynik1 = wynik1 * i;
     }
    return wynik1
}
    
let wynik = silnia(4)
console.log(wynik)