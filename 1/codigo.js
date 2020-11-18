
var btn = document.getElementById("btn");
var resultado = document.getElementById("resultado")
var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");

btn.addEventListener("click", function(){
	var n1 = inputUno.value;
	var n2 = inputDos.value;
	resultado.innerHTML = calcular(n1, n2);
});

function calcular(n1, n2){
	if ((parseInt(n1) > parseInt(n2)) || (parseInt(n2) == parseInt(n1))){
		return "Numeros incorrectos, ingrese nuevamente";
	} else {
		return Math.floor(Math.random()*(((parseInt(n2))-(parseInt(n1)))+1)+(parseInt(n1)));
	}
}