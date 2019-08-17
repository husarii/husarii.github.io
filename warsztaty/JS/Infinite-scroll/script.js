function getData() {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(response=>{
        console.log(response);

        let begin = document.createElement('p');
        begin.innerHTML = '---------BEGINING OF DATA----------';
        document.body.appendChild( begin );

        for(i=0; i < response.length; i++) {
            let paragraphId = document.createElement('p');
            let paragraphName = document.createElement('p');
            let paragraphUrl = document.createElement('p');
           
            paragraphId.innerHTML = 'User ID:' + response[i].id;
            document.body.appendChild( paragraphId );

            paragraphName.innerHTML = 'User Name:' + response[i].name;
            document.body.appendChild( paragraphName );

            paragraphUrl.innerHTML = 'User Website: http://' + response[i].website + '<br>--------';
            document.body.appendChild( paragraphUrl );
                              
        }
        
        let end = document.createElement('p');
        end.innerHTML = '---------END OF DATA----------<br><br><br><br>';
        document.body.appendChild( end );
    })
}

getData()


window.onscroll = function() {
    let d = document.documentElement;
    let offset = d.scrollTop + window.innerHeight;
    let height = d.offsetHeight;

        console.log('offset = ' + offset);
        console.log('height =' + height );
    if (offset === height) {
        getData()

    }
};
window.onscroll()



// $(function() {
//     $('#pobierzDane').click(function() {

//     }
//     )
// })

// let przycisk = document.getElementById('pobierzDane')
// let numer = document.getElementById('numer')
// let nazwaUzytkownika = document.getElementById('nazwaUzytkownika')
// let url = document.getElementById('url')
