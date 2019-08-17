let tablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]

function sortowanie(n) {
  
  for (i = 0; i < n.length; i++) {

      for (j = 1; j < n.length; j++){

        if (n[j-1] > n[j]) {

            [n[j-1], n[j]] = [n[j], n[j-1]];
        }
      }
  }
console.log(n);
return n
}
sortowanie(tablica)