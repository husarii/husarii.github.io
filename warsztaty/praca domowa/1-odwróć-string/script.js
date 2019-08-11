// let paragraf = document.getElementById("p1")

// paragraf.innerHTML = '801aimedkaA'

// console.log(paragraf)

let paragraf = document.getElementById('p1')

console.log(paragraf)

let text = document.getElementById('p1').textContent

console.log(text)


function sortString(str) {
    let splitString = str.split(""); 
    let sortArray = splitString.sort(); 
    let joinArray = sortArray.join(""); 
    return joinArray; 
}
 
console.log(sortString(text));





