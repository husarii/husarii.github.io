let items = document.getElementById("items");
console.log (items)

// document.getElementsByTagName("button").addEventListener("click", addItem ); 
let przycisk = document.getElementsByTagName ("button")

console.log (przycisk)

function addItem(){
  console.log ("click");
  let liElem = document.getElementsByClassName("item");

    for (i = 0; i < liElem.length; i++){

      let newItem = document.createElement('li');
      
      let classAtr = document.createAttribute("class");
      classAtr.value= "item";
      newItem.setAttributeNode( classAtr );
    
      newItem.innerHTML = 'Item' + [liElem.length+1];
      items.appendChild (newItem);
    
  }

}

przycisk.onclick = addItem(); 
