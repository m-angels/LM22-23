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
