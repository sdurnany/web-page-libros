// $("#slider1_icon_right").attr("onClick").alert("holaa")

function cambia_der(){
    alert("a la derecha")
}
function cambia_izq(){
    alert("a la izquierda")
}
$(document).ready(function(){
    $('.slider').bxSlider({
      auto: true,
      pause: 3000,
      speed: 1300,
      autoControls: true
    });
  });