let items = document.getElementById("items");
console.log (items)

let przycisk = document.getElementsByTagName ("button")
przycisk[0].addEventListener("click", addItem ); 


console.log (przycisk)

function addItem(){
  
  let liElem = document.getElementsByClassName("item");
  console.log(liElem);

    //for (i = 0; i < liElem.length; i++){

      let newItem = document.createElement('li');
      //console.log(newItem)
      
      let classAtr = document.createAttribute("class");
      classAtr.value= "item";
      newItem.setAttributeNode( classAtr );
    
      newItem.innerHTML = 'Item ' + [liElem.length+1];
      //console.log (newItem)

      items.appendChild (newItem);
        
  }



// przycisk.onclick = addItem(); 
