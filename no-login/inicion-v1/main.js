const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .contenido-select');
const hiddenInput = document.querySelector('#inputSelect');

document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contenidoSelect.innerHTML = e.currentTarget.innerHTML;
        select.classList.toggle('active');
        opciones.classList.toggle('active');
        hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText;
    });
});

select.addEventListener('click', () => {
    select.classList.toggle('active');
    opciones.classList.toggle('active');
});

// hiden

$("#radio3").on("click", function() {
    $("#no-shared").hide("slow");
    $("#shared").show("slow");
})

$("#radio2").on("click", function() {
    $("#no-shared").show("slow");
    $("#shared").hide("slow");
})

$("#radio2").on("click", function() {
    $("#no-shared").show("slow");
    $("#shared").hide("slow");
})


$("#boton1").click(function() {
    $("#columna1").hide();
    $("#columna2").show();
    $("#circulo2").removeClass("circulod");
    $("#circulo2").addClass("circuloo");
})
$("#boton2").click(function() {
    $("#columna2").hide();
    $("#columna3").show();
    $("#circulo3").removeClass("circulod");
    $("#circulo3").addClass("circuloo");
})

$("#circulo1").click(function() {
    if ($("#circulo1").hasClass('circuloo')) {
        $("#columna1").show();
        $("#columna2").hide();
        $("#columna3").hide();
    }
})

$("#circulo2").click(function() {
    if ($("#circulo2").hasClass('circuloo')) {
        $("#columna2").show();
        $("#columna1").hide();
        $("#columna3").hide();
    }
})

$("#circulo3").click(function() {
    if ($("#circulo3").hasClass('circuloo')) {
        $("#columna3").show();
        $("#columna2").hide();
        $("#columna1").hide();
    }
})