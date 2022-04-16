
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


let dirigirFinal = 0;
let entrenarFinal = 0;
let apoyarFinal = 0;
let delegarFinal = 0;

botonAgregar.addEventListener("click", function(event){
    event.preventDefault() 

    const botonAgregar = document.getElementById('botonAgregar');

    const preguntaUno = document.getElementById("pregunta1");
    
    const respuestaUno = document.getElementsByName("paymentMethod");
     
    for (let i = 0; i< respuestaUno.length; i++){
        if(respuestaUno[i].checked == true){
            respuestaUno[i].value;
            if( respuestaUno[i].value == "A"){
               dirigirFinal++;
            }else if(respuestaUno[i].value == "B"){
                apoyarFinal++;
            }else if(respuestaUno[i].value == "C"){
                entrenarFinal++;
            }else if(respuestaUno[i].value == "D"){
                delegarFinal++;
            }
        }
    }
    console.log(dirigirFinal, apoyarFinal, entrenarFinal, delegarFinal);
      
})
