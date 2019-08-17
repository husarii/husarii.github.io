let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

// console.log(cities)

let listaNumerowana = document.createElement('ol');
listaNumerowana.innerHTML = 'Lista miast:';
document.body.appendChild(listaNumerowana);



function listaMiast() {



  for(i=0; i < cities.length; i++) {

    let parCity = document.createElement('ul');

    let classAtr = document.createAttribute("class");
    classAtr.value= "miasta";
    parCity.setAttributeNode( classAtr );

    parCity.innerHTML = [i+1] + '. ' + cities[i];
    listaNumerowana.appendChild (parCity);
  
  }

}

listaMiast()

