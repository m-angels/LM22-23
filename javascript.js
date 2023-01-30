//NO TOCAR ESTA FUNCIÓN DE JAVASCRIPT - ES EL PRE-LOADER.
var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.01);
        }, 20);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('wrapper').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(2);
});


//  Validaciones del formulario

var = document.getElementById("nom").value;
if (valor == null || valor.length == 0 || /^\s+$/.test(valor) )
{
    alert("Error, el campo debe contener un nombre.")
    return false;
}

var = document.getElementById("correu").value;
if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
  return false;
}

var = document.getElementById("telefon").value;
if( !(/^\d{9}$/.test(valor)) ) {
  return false;
}
