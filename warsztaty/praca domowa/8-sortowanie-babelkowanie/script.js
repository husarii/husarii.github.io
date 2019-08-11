let tablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]

function sortowanie() {
  
  for (i = 0; i < tablica.length; i++) {

      for (j = 1; j < tablica.length; j++){

        if (tablica[j-1] > tablica[j]) {

            [tablica[j-1], tablica[j]] = [tablica[j], tablica[j-1]];
        }
      }
  }
return tablica
}
console.log(sortowanie())