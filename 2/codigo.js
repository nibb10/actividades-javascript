
var btnSuma = document.getElementById("btnSuma");
var btnResta = document.getElementById("btnResta");
var btnMulti = document.getElementById("btnMulti");
var btnDivi = document.getElementById("btnDivi");
var resultado = document.getElementById("resultado");
var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");

btnSuma.addEventListener("click", function(){
	var n1 = inputUno.value;
	var n2 = inputDos.value;
	if ((isNaN(parseInt(n1)))||(isNaN(parseInt(n2)))){
		resultado.innerHTML = "<span style='color: red;'>Ingrese números</span>";
	} else if ((n1 % 1 == 0) && (n2 % 1 == 0)){
		resultado.innerHTML = sumar(n1, n2);
	} else {
		resultado.innerHTML = "<span style='color: red;'>Debe ingresar números enteros</span>";
	}
});

btnResta.addEventListener("click", function(){
	var n1 = inputUno.value;
	var n2 = inputDos.value;
	if ((isNaN(parseInt(n1)))||(isNaN(parseInt(n2)))){
		resultado.innerHTML = "<span style='color: red;'>Ingrese números</span>";
	} else if ((n1 % 1 == 0) && (n2 % 1 == 0)){
		resultado.innerHTML = restar(n1, n2);
	} else {
		resultado.innerHTML = "<span style='color: red;'>Debe ingresar números enteros</span>";
	}
});

btnMulti.addEventListener("click", function(){
	var n1 = inputUno.value;
	var n2 = inputDos.value;
	if ((isNaN(parseInt(n1)))||(isNaN(parseInt(n2)))){
		resultado.innerHTML = "<span style='color: red;'>Ingrese números</span>";
	} else if ((n1 % 1 == 0) && (n2 % 1 == 0)){
		resultado.innerHTML = multiplicar(n1, n2);
	} else {
		resultado.innerHTML = "<span style='color: red;'>Debe ingresar números enteros</span>";
	}
});

btnDivi.addEventListener("click", function(){
	var n1 = inputUno.value;
	var n2 = inputDos.value;
	if (parseInt(n2)==0){
		resultado.innerHTML = "<span style='color: red;'>No se puede dividir por cero</span>";
	} else if ((isNaN(parseInt(n1)))||(isNaN(parseInt(n2)))){
		resultado.innerHTML = "<span style='color: red;'>Ingrese números</span>";
	} else if ((n1 % 1 == 0) && (n2 % 1 == 0)){
		resultado.innerHTML = dividir(n1, n2);
	} else {
		resultado.innerHTML = "<span style='color: red;'>Debe ingresar números enteros</span>";
	}
});

function sumar(n1, n2){
	return parseInt(n1) + parseInt(n2);
}

function restar(n1, n2){
	return parseInt(n1) - parseInt(n2);
}

function multiplicar(n1, n2){
	return parseInt(n1) * parseInt(n2);
}

function dividir(n1, n2){
	return parseInt(n1) / parseInt(n2);
}