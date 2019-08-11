// $(function() {
//     $('#pobierzDane').click(function() {

//     }
//     )
// })

// let przycisk = document.getElementById('pobierzDane')
// let numer = document.getElementById('numer')
// let nazwaUzytkownika = document.getElementById('nazwaUzytkownika')
// let url = document.getElementById('url')



document.getElementById( "pobierzDane" ).addEventListener("click", showText ); 

function showText() {
    console.log( "click" );

    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response =>response.json())
    .then(response=>{
        console.log(numer);
        console.log(response);
        document.getElementById( "numer" ). innerHTML = response.id; 
        document.getElementById( "nazwaUzytkownika" ). innerHTML = response.name; 
        document.getElementById( "url" ). innerHTML = response.website; 
        
    });

    }