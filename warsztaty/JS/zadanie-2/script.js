console.log(document.getElementById('formularz').lastElementChild)
document.getElementById("formularz").lastElementChild.addEventListener('click', function(e){
    e.preventDefault();
    let fname = document.getElementsByTagName("input")[0].value;
    let lname = document.getElementsByTagName("input")[1].value;
    console.log("jego imię to:" + fname + "a nazwisko to:" + lname)
})

document.getElementById("formularz").lastElementChild.addEventListener('click', function (e) {
    e.preventDefault();
    let fname = document.getElementsByName("fname")[0]
    let lname = document.getElementsByName("lname")[0]
    let email = document.getElementsByName("email")[0]
    let checkbox = document.getElementsByName("checkbox")[0]
    if (fname.value == ""){
        document.getElementById("fname").style.display = "inline-block"
        document.getElementById("fname").style.color = "red"
    } else {
        document.getElementById("fname").style.display = "none"
    }
    if (lname.value == ""){
        document.getElementById("lname").style.display = "inline-block"
    } else {
        document.getElementById("lname").style.display = "none"
    }
    if (email.value == ""){
        document.getElementById('email').style.display = "inline-block"
    } else {
        document.getElementById("email").style.display = "none"
    }
    if (checkbox.checked == false) {
        document.getElementById('checkbox').style.display = "inline-block"
    } else {
        document.getElementById("checkbox").style.display = "none"
    }
    })

document.getElementById("formularz")
console.log(formularz)

document.getElementsByType("input")
console.log(input)