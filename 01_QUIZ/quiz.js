let btnEvaluar = document.querySelector("#evaluar");
btnEvaluar.onclick = () => {
  var correctas = [2, 2, 1, 3, 4, 1, 1, 2, 4, 3];
  var aciertos = 0;
  for (let i = 1; i <= 5; i++) {
    let respuestaSeleccionada = document.querySelector('input[name="p' + i + '"]:checked');
    if (!respuestaSeleccionada) {
      swal.fire({ icon: 'error', title: 'ERROR', text: 'FALTA SELECCIONAR RESPUESTA', footer: 'Quiz' });
      return;
    }
    let respuestaSeleccionadaId = respuestaSeleccionada.id;
    let respuestaCorrectaId = 'p' + i + 'r' + correctas[i - 1];
    if (respuestaSeleccionadaId === respuestaCorrectaId) {
      aciertos++;
    }
  }
  if (aciertos >= 3) {
    swal.fire({ icon: 'success', title: 'APROBADO', text: 'CALIFICACION ' + (aciertos * 2), footer: 'Quiz' });
  } else {
    swal.fire({ icon: 'error', title: 'NO APROBADO', text: 'CALIFICACION ' + (aciertos * 2), footer: 'Quiz' });
  }
  
};


var resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", function() {
 
  var radioButtons = document.getElementsByClassName("from-check-input");


  for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
});