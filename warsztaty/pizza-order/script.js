$(function(){
    let form = $('#formularz');
    let imie = $('#imie');
    let nazwisko = $('#nazwisko');
    let ulica = $('#ulica');
    let numerdomu = $('#numerdomu');
    let kod = $('#kod');
    let miasto = $('#miasto');
    let pizza = $('#pizza') 
    let sospo = $('#sospo');
    let soscz = $('#soscz');
    let przycisk = $('#przycisk');
    let cena = $('#cena');
    let zgoda = $('#zgoda');
    let ostrzezenia = $('#ostrzezenia');
    let priceTable = [
            {val : 0,
            price: 0},
    
            {val: 1,
            price: 23},
    
            {val: 2,
            price: 29},
            
            
            {val: 3,
            price: 30},
    
            
            {val: 4,
            price: 32},
    
            
            {val: 5,
            price: 35
        }]


console.log("pizza", pizza)

pizza.change(function() {
    let pizzaPrice = 0;

    let pizzaType = $(this).val();
    console.log('wybrana pizza', pizzaType)

    if (pizzaType == 0) {
        cena.text(" ");
        return;
    }

    priceTable.forEach(function(element) {
        if (element.val == pizzaType) {
            pizzaPrice = element.price;

            cena.text(pizzaPrice + " PLN");

            return false;
        }
    });
});



przycisk.click(function() {

    ostrzezenia.empty();

    // let ostrzezeniaArray = [];

    if (imie.val() === "") {
        // ostrzezeniaArray.push("Uzupełnij pole:Imię");
        ostrzezenia.append('<li>Pole imię niewypełnione</li>');
        return;
    }
    if (nazwisko.val === "") {
        ostrzezenia.append('<li>Pole nazwisko niewypełnione</li>')
    }
    if (ulica.val === "") {
        ostrzezenia.append('<li>Pole ulica niewypełnione</li>')
    }
    if (numerdomu.val === "") {
        ostrzezenia.append('<li>Pole numer domu/mieszkania niewypełnione</li>')
    }
    if (kod.val === "") {
        ostrzezenia.append('<li>Pole kod niewypełnione</li>')
    }
    if (miasto.val === "") {
        ostrzezenia.append('<li>Pole miasto niewypełnione</li>')
    }
    if (pizza.val === 0) {
        ostrzezenia.append('<li>Rodzaj pizzy nie został wybrany</li>')
    }
    if (zgoda.is(":checked"== false)) {
        ostrzezenia.append('<li>Musisz zaznaczyć zgodę na przetwarzanie danych</li>')
    }
    // if (ostrzezeniaArray.lenght !=0) {
    //     //console.log(errorsArray);

    //     ostrzezeniaArray.forEach(function(
    //         (element, index) {
    //             let liError = "<li>" +element "</li>";
    //             ostrzezenia.append(liError);
    //             return false;
    //     )}
    //     }

        
    }
})

let objectSend = {
    imie: $.trim(imie.val()),
    nazwisko: $.trim(nazwisko.val()),
    ulica: $.trim(ulica.val()),
    numerdomu: $.trim(numerdomu.val()),
    kod: $.trim(kod.val()),
    miasto: $.trim(miasto.val()),
    pizza: $.trim(pizza.val()),
    sospo: $.trim(sospo.is(":checked"())),
    soscz: $.trim(soscz.is(":checked"())),
    zgoda: $.trim(zgoda.is(":checked"()))
}

})


// const order = {
//     imie: "",
//     nazwisko: "",
//     ulica: "",
//     numerdomu: "",
//     kod: "",
//     miasto: "",
//     pizza: "",
//     sosy: [],
//     zgoda: Boolean
// }

// let formularz = $('form')

// console.log (formularz)






// console.log(document.getElementById('formularz').lastElementChild)
// document.getElementById("formularz").lastElementChild.addEventListener('click', function(e){
//     e.preventDefault();
//     let fname = document.getElementsByTagName("input")[0].value;
//     let lname = document.getElementsByTagName("input")[1].value;
//     console.log("jego imię to:" + fname + "a nazwisko to:" + lname)
// })

// document.getElementById("formularz").lastElementChild.addEventListener('click', function (e) {
//     e.preventDefault();
//     let fname = document.getElementsByName("fname")[0]
//     let lname = document.getElementsByName("lname")[0]
//     let email = document.getElementsByName("email")[0]
//     let checkbox = document.getElementsByName("checkbox")[0]
//     if (fname.value == ""){
//         document.getElementById("fname").style.display = "inline-block"
//         document.getElementById("fname").style.color = "red"
//     } else {
//         document.getElementById("fname").style.display = "none"
//     }
//     if (lname.value == ""){
//         document.getElementById("lname").style.display = "inline-block"
//     } else {
//         document.getElementById("lname").style.display = "none"
//     }
//     if (email.value == ""){
//         document.getElementById('email').style.display = "inline-block"
//     } else {
//         document.getElementById("email").style.display = "none"
//     }
//     if (checkbox.checked == false) {
//         document.getElementById('checkbox').style.display = "inline-block"
//     } else {
//         document.getElementById("checkbox").style.display = "none"
//     }
//     })

// document.getElementById("formularz")
// console.log(formularz)

// document.getElementsByType("input")
// console.log(input)