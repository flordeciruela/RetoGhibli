var menu = document.getElementById(menu);
function menuDesplegable(menu){
	menu.classList.toggle("change");
	document.getElementById("myDropdown").classList.toggle("show");	
}




// FORMULARIO

var element = document.querySelector(".form-sub"); //trae el primer elemento de la "clase"; tbm se pudo haber usado: document.getElementsByClassName("form-sub")[0];
element.addEventListener("submit", function (event) {
    "use strict";
    event.preventDefault();
    send();
});

function send() {
    "use strict";
    var name = document.getElementById("name").value,
        email = document.getElementById("email").value,
        phone = document.getElementById("phone").value,
        alert0 = document.getElementById("err00"),
        alert1 = document.getElementById("err01"),
        alert2 = document.getElementById("err02");

    if (name === null || name.length === 0 || /[0-9]+/.test(name) || /[^A-ZÁÉÍÓÚ a-zñáéíóú]+/.test(name)) {
        alert0.innerHTML = "Fill out the field correctly, use only letters.";
        document.getElementById("name").focus();
        return false;
    } else if (/^([A-ZÁÉÍÓÚ a-zñáéíóú\s\D]*)/.test(name)) {
        alert0.innerHTML = "";
    }
    if (email.length === 0 || /[\w]+@{1}[\w\-]+\.[a-z]{2,3}/.test(email) === false) {
        alert1.innerHTML = "Please use a valid format: (example@hosting.domain)";
        document.getElementById("email").focus();
        return false;
    } else {
        alert1.innerHTML = "";
    }
    if (/[0-9]+/.test(phone) === false) {
        alert2.innerHTML = "Fill out the field just with numbers";
        document.getElementById("phone").focus();        
        return false;
    } else {
        alert2.innerHTML = "";
    }
    element.reset();
}
