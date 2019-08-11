
// Pobierz dane z adresu URL - funkcja fetch(zwraca obiekt Promise - Obietnica)
// Jeśli Promise zostanie rozwiązany to fetch() zwróci obiekt odpowiedzi (response)
// Zwracamy obiekt odpowiedzi przetworzony na obiekt JSON
// Od tego momemtu możemy korzystać z tych danych
$(function(){

let body = $('#resBody')
let iden = $('#resName')
let title = $ ('#resTitle')

$('#btnGetData').click(function() {

    let numberInput = document.getElementById("number").value
    console.log(numberInput)

    fetch(`https://jsonplaceholder.typicode.com/posts/${numberInput}`)
    .then(response =>response.json())
    .then(response=>{
        console.log(response);
        body.text(response.body);
        iden.text(response.id);
        title.text(response.title);
        // albo
        // $('#resBody').text(response.body);
        // $('#resName').text(response.id);
        // $('#resTitle').text(response.title);
    });
})


})
