
let dirigirSolucion = 0;
let entrenarSolucion = 0;
let apoyarSolucion = 0;
let delegarSolucion = 0;

let personalidad = 1;
let resultadoPersonalidadUno;
let resultadoPersonalidadDos;
let resultadoPersonalidadTres;
let resultadoPersonalidadCuatro;
let resultadoPersonalidadCinco;
let resultadoPersonalidadSeis;
let resultadoPersonalidadSiete;
let resultadoPersonalidadOcho;
let resultadoPersonalidadNueve;
let resultadoPersonalidadDiez;
let resultadoPersonalidadOnce;
let resultadoPersonalidadDoce;


botonAgregar.addEventListener("click", function(event){


    const botonAgregar = document.getElementById('botonAgregar');
    const respuestaUno = document.getElementsByName("respuestaUno");
    const respuestaDos = document.getElementsByName("respuestaDos");
    const respuestaTres = document.getElementsByName("respuestaTres");
    const respuestaCuatro = document.getElementsByName("respuestaCuatro");
    const respuestaCinco = document.getElementsByName("respuestaCinco");
    const respuestaSeis = document.getElementsByName("respuestaSeis");
    const respuestaSiete = document.getElementsByName("respuestaSiete");
    const respuestaOcho = document.getElementsByName("respuestaOcho");
    const respuestaNueve = document.getElementsByName("respuestaNueve");
    const respuestaDiez = document.getElementsByName("respuestaDiez");
    const respuestaOnce = document.getElementsByName("respuestaOnce");
    const respuestaDoce = document.getElementsByName("respuestaDoce");

     
    for (let i = 0; i< respuestaUno.length; i++){
        if(respuestaUno[i].checked == true){
            respuestaUno[i].value;
            if( respuestaUno[i].value == "A"){
               dirigirSolucion++;
               resultadoPersonalidadUno = (personalidad * 2);
            }else if(respuestaUno[i].value == "B"){
                apoyarSolucion++;
                resultadoPersonalidadUno = personalidad * (-1);
            }else if(respuestaUno[i].value == "C"){
                entrenarSolucion++;
                resultadoPersonalidadUno = personalidad * 1;
            }else if(respuestaUno[i].value == "D"){
                delegarSolucion++;
                resultadoPersonalidadUno = personalidad* (-2);
            }
        }
    }
    
    for (let i= 0; i < respuestaDos.length; i++){
        if (respuestaDos[i].checked ==  true){
            respuestaDos[i].value;
            if( respuestaDos[i].value == "A"){
                entrenarSolucion++;
                resultadoPersonalidadDos= personalidad * (2);
             }else if(respuestaDos[i].value == "B"){
                 delegarSolucion++;
                 resultadoPersonalidadDos= personalidad * -2;
             }else if(respuestaDos[i].value == "C"){
                 apoyarSolucion++;
                 resultadoPersonalidadDos= personalidad * (1);
             }else if(respuestaDos[i].value == "D"){
                 dirigirSolucion++;
                 resultadoPersonalidadDos= personalidad * (-1);
             }
        }
    }
    
    for (let i= 0; i < respuestaTres.length; i++){
        if (respuestaTres[i].checked ==  true){
            respuestaTres[i].value;
            if( respuestaTres[i].value == "A"){
                entrenarSolucion++;
                resultadoPersonalidadTres= personalidad * (1);
             }else if(respuestaTres[i].value == "B"){
                 delegarSolucion++;
                 resultadoPersonalidadTres= personalidad * (-1);
             }else if(respuestaTres[i].value == "C"){
                 dirigirSolucion++;
                 resultadoPersonalidadTres= personalidad * -2;
             }else if(respuestaTres[i].value == "D"){
                 apoyarSolucion++;
                 resultadoPersonalidadTres = personalidad * (2);
             }
        }
    }

    for (let i= 0; i < respuestaCuatro.length; i++){
        if (respuestaCuatro[i].checked ==  true){
            respuestaCuatro[i].value;
            if( respuestaCuatro[i].value == "A"){
                apoyarSolucion++;
                resultadoPersonalidadCuatro= personalidad * (1);
             }else if(respuestaCuatro[i].value == "B"){
                 dirigirSolucion++;
                 resultadoPersonalidadCuatro= personalidad * (-2);
             }else if(respuestaCuatro[i].value == "C"){
                 delegarSolucion++;
                 resultadoPersonalidadCuatro= personalidad * 2;
             }else if(respuestaCuatro[i].value == "D"){
                 entrenarSolucion++;
                 resultadoPersonalidadCuatro = personalidad * (-1);
             }
        }
    }

    for (let i= 0; i < respuestaCinco.length; i++){
        if (respuestaCinco[i].checked ==  true){
            respuestaCinco[i].value;
            if( respuestaCinco[i].value == "A"){
                delegarSolucion++;
                resultadoPersonalidadCinco= personalidad * (-2);
             }else if(respuestaCinco[i].value == "B"){
                 entrenarSolucion++;
                 resultadoPersonalidadCinco= personalidad * (1);
             }else if(respuestaCinco[i].value == "C"){
                 dirigirSolucion++;
                 resultadoPersonalidadCinco= personalidad * 2;
             }else if(respuestaCinco[i].value == "D"){
                 apoyarSolucion++;
                 resultadoPersonalidadCinco = personalidad * (-1);
             }
        }
    }

    for (let i= 0; i < respuestaSeis.length; i++){
        if (respuestaSeis[i].checked ==  true){
            respuestaSeis[i].value;
            if( respuestaSeis[i].value == "A"){
                apoyarSolucion++;
                resultadoPersonalidadSeis= personalidad * (-1);
             }else if(respuestaSeis[i].value == "B"){
                 dirigirSolucion++;
                 resultadoPersonalidadSeis= personalidad * (1);
             }else if(respuestaSeis[i].value == "C"){
                 delegarSolucion++;
                 resultadoPersonalidadSeis= personalidad * (-2);
             }else if(respuestaSeis[i].value == "D"){
                 entrenarSolucion++;
                 resultadoPersonalidadSeis = personalidad * (2);
             }
        }
    }

    for (let i= 0; i < respuestaSiete.length; i++){
        if (respuestaSiete[i].checked ==  true){
            respuestaSiete[i].value;
            if( respuestaSiete[i].value == "A"){
                dirigirSolucion++;
                resultadoPersonalidadSiete= personalidad * (-2);
             }else if(respuestaSiete[i].value == "B"){
                 apoyarSolucion++;
                 resultadoPersonalidadSiete= personalidad * (2);
             }else if(respuestaSiete[i].value == "C"){
                 entrenarSolucion++;
                 resultadoPersonalidadSiete= personalidad * (-1);
             }else if(respuestaSiete[i].value == "D"){
                 delegarSolucion++;
                 resultadoPersonalidadSiete = personalidad * (1);
             }
        }
    }

    for (let i= 0; i < respuestaOcho.length; i++){
        if (respuestaOcho[i].checked ==  true){
            respuestaOcho[i].value;
            if( respuestaOcho[i].value == "A"){
                delegarSolucion++;
                resultadoPersonalidadOcho= personalidad * (2);
             }else if(respuestaOcho[i].value == "B"){
                 entrenarSolucion++;
                 resultadoPersonalidadOcho= personalidad * (-1);
             }else if(respuestaOcho[i].value == "C"){
                 dirigirSolucion++;
                 resultadoPersonalidadOcho= personalidad * (-2);
             }else if(respuestaOcho[i].value == "D"){
                 apoyarSolucion++;
                 resultadoPersonalidadOcho = personalidad * (1);
             }
        }
    }

    for (let i= 0; i < respuestaNueve.length; i++){
        if (respuestaNueve[i].checked ==  true){
            respuestaNueve[i].value;
            if( respuestaNueve[i].value == "A"){
                delegarSolucion++;
                resultadoPersonalidadNueve= personalidad * (-2);
             }else if(respuestaNueve[i].value == "B"){
                 entrenarSolucion++;
                 resultadoPersonalidadNueve= personalidad * (1);
             }else if(respuestaNueve[i].value == "C"){
                 dirigirSolucion++;
                 resultadoPersonalidadNueve= personalidad * 2;
             }else if(respuestaNueve[i].value == "D"){
                 apoyarSolucion++;
                 resultadoPersonalidadNueve = personalidad * (-1);
             }
        }
    }

    for (let i= 0; i < respuestaDiez.length; i++){
        if (respuestaDiez[i].checked ==  true){
            respuestaDiez[i].value;
            if( respuestaDiez[i].value == "A"){
                apoyarSolucion++;
                resultadoPersonalidadDiez= personalidad * (1);
             }else if(respuestaDiez[i].value == "B"){
                 dirigirSolucion++;
                 resultadoPersonalidadDiez= personalidad * (-2);
             }else if(respuestaDiez[i].value == "C"){
                 delegarSolucion++;
                 resultadoPersonalidadDiez= personalidad * (-1);
             }else if(respuestaDiez[i].value == "D"){
                 entrenarSolucion++;
                 resultadoPersonalidadDiez = personalidad * (2);
             }
        }
    }

    for (let i= 0; i < respuestaOnce.length; i++){
        if (respuestaOnce[i].checked ==  true){
            respuestaOnce[i].value;
            if( respuestaOnce[i].value == "A"){
                dirigirSolucion++;
                resultadoPersonalidadOnce= personalidad * (-2);
             }else if(respuestaOnce[i].value == "B"){
                 apoyarSolucion++;
                 resultadoPersonalidadOnce= personalidad * (2);
             }else if(respuestaOnce[i].value == "C"){
                 entrenarSolucion++;
                 resultadoPersonalidadOnce= personalidad * (-1);
             }else if(respuestaOnce[i].value == "D"){
                 delegarSolucion++;
                 resultadoPersonalidadOnce = personalidad * (1);
             }
        }
    }

    for (let i= 0; i < respuestaDoce.length; i++){
        if (respuestaDoce[i].checked ==  true){
            respuestaDoce[i].value;
            if( respuestaDoce[i].value == "A"){
                entrenarSolucion++;
                resultadoPersonalidadDoce= personalidad * (-1);
             }else if(respuestaDoce[i].value == "B"){
                 delegarSolucion++;
                 resultadoPersonalidadDoce= personalidad * (2);
             }else if(respuestaDoce[i].value == "C"){
                 dirigirSolucion++;
                 resultadoPersonalidadDoce= personalidad * (-2);
             }else if(respuestaDoce[i].value == "D"){
                 apoyarSolucion++;
                 resultadoPersonalidadDoce = personalidad * (1);
             }
        }
    }
    let textoPersonalidad = "texto";
    function sumaPersonalidad (suma){
        if(suma <= (-17)){
        textoPersonalidad = "Infelxible";
        }else if(suma <= (-9) && suma >= (-16)){
            textoPersonalidad = "Dificilmente Flexible";
        }else if ( suma <= (-1) && suma >= (-8)){
            textoPersonalidad= "Ocacionalmente Flexible";
        }else if(suma <= (8) && suma >= (0)){
            textoPersonalidad = "Moderadamente Flexible";
        }else if (suma <= (16 && suma >=9)){
            textoPersonalidad = "Flexible";
        }else if(suma >=(17)){
            textoPersonalidad = "Muy Flexible";
        }
}
    let suma = resultadoPersonalidadUno + resultadoPersonalidadDos + resultadoPersonalidadTres + resultadoPersonalidadCuatro + resultadoPersonalidadCinco + resultadoPersonalidadSeis + resultadoPersonalidadSiete + resultadoPersonalidadOcho + resultadoPersonalidadNueve + resultadoPersonalidadDiez + resultadoPersonalidadOnce + resultadoPersonalidadDoce;

    sumaPersonalidad(suma);

    console.log(dirigirSolucion, apoyarSolucion, entrenarSolucion, delegarSolucion);
    console.log(suma);
    let sumaLiderazgo= dirigirSolucion + apoyarSolucion + entrenarSolucion + delegarSolucion;
    let porcentajeDirigir = ((dirigirSolucion * 100)/ sumaLiderazgo).toFixed(0);
    let porcentajeEntrenar = ((entrenarSolucion * 100)/ sumaLiderazgo).toFixed(0);
    let porcentajeApoyar = ((apoyarSolucion * 100)/ sumaLiderazgo).toFixed(0);
    let porcentajeDelegar = ((delegarSolucion * 100)/ sumaLiderazgo).toFixed(0);


    console.log(porcentajeDirigir);
    console.log(porcentajeEntrenar);
    console.log(porcentajeApoyar);
    console.log(porcentajeDelegar);

    const nombre = document.getElementById("firstName").value;
    const apellido = document.getElementById("lastName").value;
    const correoElectronico = document.getElementById("email").value;
    const contenido = document.getElementById("contenido").innerHTML = (`
    <p>Hola ${nombre} ${apellido}, <br>
    gracias por contestar esta encuesta. Te enviaremos una copia de los resultados al correo electronico:<strong> ${correoElectronico}</strong>
    </p>
    <p><strong>Los resultados son:</strong>
    </p>
    <h3><strong>Liderazgo</strong>
    </h3>

    <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Dirigir
            <span class="badge rounded-pill" style="background-color: #e0cffc;">${porcentajeDirigir}%</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Entrenar
            <span class="badge rounded-pill" style="background-color: #fecba1;">${porcentajeEntrenar}%</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Apoyar
            <span class="badge rounded-pill" style="background-color: #a6e9d5;">${porcentajeApoyar}%</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Delegar
            <span class="badge rounded-pill" style="background-color: #ffe69c;">${porcentajeDelegar}%</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
        Tu Flexibilidad para Liderar es:
            <span class="badge bg-primary rounded-pill">${textoPersonalidad}</span>
        </li>
    </ul>
    
    `);
    
    const ctx = document.getElementById('myChart');

    const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Dirigir', 'Entrenar', 'Apoyar', 'Delegar'],
            datasets: [{
                label: 'Resultados Liderazgo',
                data: [porcentajeDirigir, porcentajeEntrenar, porcentajeApoyar, porcentajeDelegar],
                backgroundColor: [
                    '#e0cffc',
                    '#fecba1',
                    '#a6e9d5',
                    '#ffe69c'
                ],
                borderColor: [
                    '#e0cffc',
                    '#fecba1',
                    '#a6e9d5',
                    '#ffe69c'
                ],
                borderWidth: 1
            }]
        },
       
    });
    

    //validacion de formulario

const formulario = document.getElementById("formulario");
const radiosButtons = document.querySelector(`.form-check-input:checked`)

formulario.addEventListener("submit", function (event){
    if(nombre == "" || apellido == "" || correoElectronico == "" || radiosButtons == false){
        const alerta = document.createElement(`div`);
        alerta.classList.add(`invalid-feedback`, `d-block`, `text-center`);
        alerta.textContent = `Todos los campos son obligatorios`;
        document.querySelector(`.warning`).appendChild(alerta);
        event.preventDefault();
    }else {   
        alert("caca");
        //Mostrar y ocultar secciones
        ocultarFormulario();
        mostrarResultado();
        event.preventDefault();
    }
    
}) 
});



//Codigo para ocultar y mostrar
function ocultarFormulario() {
    const formularioContenedor = document.getElementById('formularioContenedor');
    formularioContenedor.style.display = 'none';
}

function mostrarResultado() {
    const resultadoEncuesta = document.getElementById('resultadoEncuesta');
    resultadoEncuesta.style.display = 'block';
}


