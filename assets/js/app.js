window.addEventListener('load',continuar);
var menu = document.getElementById(menu);
    
    function menuDesplegable(menu){
        menu.classList.toggle("change");
        document.getElementById("myDropdown").classList.toggle("show"); 
    }

function continuar(){

 // FORMULARIO1  - SELECIONA O QUIZ

var form1 = document.querySelector(".form-up"); //trae el primer elemento de la "clase"; tbm se pudo haber usado: document.getElementsByClassName("form-sub")[0];
form1.addEventListener("submit", function (event) {
    "use strict";
    event.preventDefault();
    seleccion();

});

var edad = document.getElementById("edad"),  
    color = document.getElementById("color"),     
    musica = document.getElementById("musica"),
    lugar = document.getElementById("lugar"),
    personaje = document.getElementById("personaje");
var err0=document.getElementById("err0"),
    err1=document.getElementById("err1"),
    err2=document.getElementById("err2"),
    err3=document.getElementById("err3");


    personaje.addEventListener('keyup',convertir);
    function convertir(){             
        personaje.value = personaje.value.toUpperCase();
    }
    lugar.addEventListener('keyup',function(){             
        lugar.value = lugar.value.toUpperCase();
    });

function seleccion(){
    if(edad.value = null){
        err0.style.display ="block";
        err0.innerHTML="Complete";
        edad.focus();
        return false;

    }
    else{
            err0.style.display = "none";
            color.focus();
        }

    // form1.reset();

}
   

// FORMULARIO2

var element = document.querySelector(".form-signup"); //trae el primer elemento de la "clase"; tbm se pudo haber usado: document.getElementsByClassName("form-sub")[0];
element.addEventListener("submit", function (event) {
    "use strict";
    event.preventDefault();
    validateForm();

});

function validateForm(){
    var name = document.getElementById("name"),
        email = document.getElementById("email"),
        coment = document.getElementById("coment"),
        enviar= document.getElementById("form-btn");
    var span0 = document.getElementById("wrong0"),
        span1 = document.getElementById("wrong1"),
        span2 = document.getElementById("wrong2");
        
    if(name.value == ""){
        span0.style.display = "block";
        span0.innerHTML = " Debe ingresar su nombre";
        name.focus();
        return false;
    }
    else if(/([A-ZÑÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+/.test(name.value) == false){
        span0.style.display = "block";
        span0.innerHTML = " Primera letra en mayúscula";
        name.focus();
        return false;
    }
        else{
            span0.style.display = "none";
            email.focus();
        }
    if(/[\w]+@{1}[\w\-]+\.[a-z]{2,3}/.test(email.value)==false){
        span1.style.display = "block";
        span1.innerHTML = "Verifique su e-mail";
        email.focus();
        return false;
    }
        else{
            span1.style.display = "none";
            coment.focus();
        }
    
    if(coment.value == ""){
        span2.style.display = "block";
        span2.innerHTML = "Dejenos un comentario";
        coment.focus();
        return false;
    }
    else{
        span2.style.display = "none";
        span2.innerHTML = "";
        enviar.focus();
    }
    element.reset();
}
}
