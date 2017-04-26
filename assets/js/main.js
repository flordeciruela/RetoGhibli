
function start(e) {
	e.dataTransfer.effecAllowed = 'move'; 
	e.dataTransfer.setData("Text", e.target.id); 
	e.target.style.opacity = '0.4';
}


function end(e){
	e.target.style.opacity = ''; 
	e.dataTransfer.clearData("Data");
}

function enter(e) {
	return true;
}


function over(e) {
	if ((e.target.className == "contenedorPieza") || (e.target.id == "contenedorPiezas"))
		return false;
	else
	return true;
}


function drop(e){
	e.preventDefault(); 
	var elementoArrastrado = e.dataTransfer.getData("Text");
	e.target.appendChild(document.getElementById(elementoArrastrado)); 
	comprobarPuzzle();
}

function comprobarPuzzle(){
	if((document.getElementById('pieza1').parentNode.id=='uno') &&
		(document.getElementById('pieza2').parentNode.id=='dos') &&
		(document.getElementById('pieza3').parentNode.id=='tres') &&
		(document.getElementById('pieza4').parentNode.id=='cuatro'))
	{
		document.getElementById("congrats").innerHTML="Felicidades, has hecho el puzzle.";
	}
}


function comprobarnavegador() {
	if(
		(navigator.userAgent.toLowerCase().indexOf('msie ') > -1) ||
		((navigator.userAgent.toLowerCase().indexOf('safari') > -1) && (navigator.userAgent.toLowerCase().indexOf('chrome') == -1)))
	{
		alert("Tu navegador no soporta correctamente las funciones Drag & Drop de HTML5. Prueba con otro navegador.");
	}

}
