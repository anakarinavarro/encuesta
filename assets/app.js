
const preguntas = [

    { PREGUNTA : 1,
    A : 1,
    B: 1,
    C: 1,
    D: 1,
    },
    {
        PREGUNTA: 2,
        A:1,
        B:1,
        C:1,
        D:1,
    },
    {
        PREGUNTA: 3,
        A:1,
        B:1,
        C:1,
        D:1,
    },
    {
        PREGUNTA: 4,
        A:1,
        B:1,
        C:1,
        D:1,
    },
    {
        PREGUNTA: 5,
        A:1,
        B:1,
        C:1,
        D:1,
    },
    {
        PREGUNTA: 6,
        A:1,
        B:1,
        C:1,
        D:1,
    },
    {
        PREGUNTA: 7,
        A:1,
        B:1,
        C:1,
        D:1,
    },
    {
        PREGUNTA: 8,
        A:1,
        B:1,
        C:1,
        D:1,
    },
    {
        PREGUNTA: 9,
        A:1,
        B:1,
        C:1,
        D:1,
    },
    {
        PREGUNTA: 10,
        A:1,
        B:1,
        C:1,
        D:1,
    },
    {
        PREGUNTA: 11,
        A:1,
        B:1,
        C:1,
        D:1,
    },
    {
        PREGUNTA: 12,
        A:1,
        B:1,
        C:1,
        D:1,
    },

]


const dirigir = (preguntas[0].A) + (preguntas[1].D) + (preguntas[2].C) + (preguntas[3].B) +(preguntas[4].C) + (preguntas[5].B) + (preguntas[6].A) + (preguntas[7].C) +(preguntas[8].C) +(preguntas[9].B) +(preguntas[10].A) + (preguntas[11].C);

const entrenar = (preguntas[0].C) + (preguntas[1].A) + (preguntas[2].A) + (preguntas[3].D) +(preguntas[4].B) + (preguntas[5].D) + (preguntas[6].C) + (preguntas[7].B) +(preguntas[8].B) +(preguntas[9].D) +(preguntas[10].C) + (preguntas[11].A);

const apoyar = (preguntas[0].B) + (preguntas[1].C) + (preguntas[2].D) + (preguntas[3].A) +(preguntas[4].D) + (preguntas[5].A) + (preguntas[6].B) + (preguntas[7].D) +(preguntas[8].D) +(preguntas[9].A) +(preguntas[10].B) + (preguntas[11].D);

const delegar = (preguntas[0].D) + (preguntas[1].B) + (preguntas[2].B) + (preguntas[3].C) +(preguntas[4].A) + (preguntas[5].C) + (preguntas[6].D) + (preguntas[7].A) +(preguntas[8].A) +(preguntas[9].C) +(preguntas[10].D) + (preguntas[11].B);


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
    event.preventDefault() 

    const botonAgregar = document.getElementById('botonAgregar');

    const preguntaUno = document.getElementById("pregunta1");
    
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
    
    function sumaPersonalidad (suma){
        if(suma <= (-17)){
            console.log ("inflexible");
        }else if(suma <= (-9) && suma >= (-16)){
            console.log("dificilmente flexible");
        }else if ( suma <= (-1) && suma >= (-8)){
            console.log("ocacionalmente flexible");
        }else if(suma <= (8) && suma >= (0)){
            console.log("moderadamente flexible");
        }else if (suma <= (16 && suma >=9)){
            console.log("flexible");
        }else if(suma >=(17)){
            console.log("muy flexible");
        }
    }
    let suma = resultadoPersonalidadUno + resultadoPersonalidadDos + resultadoPersonalidadTres + resultadoPersonalidadCuatro + resultadoPersonalidadCinco + resultadoPersonalidadSeis + resultadoPersonalidadSiete + resultadoPersonalidadOcho + resultadoPersonalidadNueve + resultadoPersonalidadDiez + resultadoPersonalidadOnce + resultadoPersonalidadDoce;

    sumaPersonalidad(suma);

    console.log(dirigirSolucion, apoyarSolucion, entrenarSolucion, delegarSolucion);
    console.log(suma);



})
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Dirigir', 'Entrenar', 'Apoyar', 'Delegar'],
        datasets: [{
            label: 'Resultados Liderazgo',
            data: [12, 19, 3, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
});

