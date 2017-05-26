// Función que sirve para ocultar las cosas que
// te pueda interesar (por ejemplo: creas un 
// botón que contenga cierta información pero
// que solo la saque al pulsar)

function showHide(idObjetivo) {
	var elementoObjetivo = document.getElementById(idObjetivo);
	if (elementoObjetivo.style.display == "none" || elementoObjetivo.style.display == "") {
		elementoObjetivo.style.display = "block";
	} else {
		elementoObjetivo.style.display = "none";
	}
	
}
