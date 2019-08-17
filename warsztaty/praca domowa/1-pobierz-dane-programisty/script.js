$(function() {
    $("#przycisk").click(function () {
        $.getJSON(
            "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
            function (data) {
                let daneProgramisty = document.createElement('div');
                daneProgramisty.innerHTML = "Imię: " + data.imie + "<br> " + "Nazwisko: " + data.nazwisko + '<br>' + "Zawód: " + data.zawod + '<br>' + "Firma: " + data.firma
                document.body.appendChild( daneProgramisty );
                // $( "body" ).append( $( "daneProgramisty" ) );
                console.log(data);
            })
            return false
       
    })
    
   })