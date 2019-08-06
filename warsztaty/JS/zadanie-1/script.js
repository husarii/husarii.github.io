let paragraf = document.getElementsByClassName("paragraf");

function zmienTlo () {
    paragraf[0].style.backgroundColor = "red";
    paragraf[1].style.backgroundColor = "yellow";
}
 
// document.getElementsById("button").onclick = zmienTlo()
document.getElementById("button").addEventListener("click",zmienTlo)