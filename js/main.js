// Variables y arrays necesarios
let gatos = [];

// Funciones esenciales del proceso a simular
function agregarGato(nombre, personalidad) {
    gatos.push({nombre: nombre, personalidad: personalidad});
}

function recomendarJuguete(gato) {
    if (gato.personalidad === "travieso") {
        return "Te recomendamos un juguete interactivo como una varita con plumas o un ratón de peluche que se mueva.";
    } else if (gato.personalidad === "tranquilo") {
        return "Te recomendamos un juguete suave y mullido, como un peluche o una pelota de lana.";
    } else if (gato.personalidad === "curioso") {
        return "Te recomendamos juguetes que estimulen su curiosidad, como un túnel para gatos.";
    } else {
        return "Te recomendamos experimentar con diferentes tipos de juguetes para descubrir cuáles le gustan más.";
    }
}

function mostrarRecomendacion(nombreGato, recomendacion) {
    console.log("Recomendación para " + nombreGato + ": " + recomendacion);
    alert("Recomendación para " + nombreGato + ": " + recomendacion);
}

function iniciarSimulador() {
    console.log("Bienvenido al simulador");
    alert("¡Bienvenido! Te invitamos a encontrar el mejor juguete para tu gato");

    while (true) {
        let nombreGato = prompt("Antes de empezar, por favor introduce el nombre de tu gato:");
        console.log("Nombre del gato:", nombreGato);

        let personalidad = prompt("Por favor, elige su personalidad:\n1. Travieso\n2. Tranquilo\n3. Curioso\n4. Otro");

        if (personalidad === "1" || personalidad === "2" || personalidad === "3" || personalidad === "4") {
            if (personalidad === "1") {
                console.log("El gato es travieso");
            } else if (personalidad === "2") {
                console.log("El gato es tranquilo");
            } else if (personalidad === "3") {
                console.log("El gato es curioso");
            } else if (personalidad === "4") {
                console.log("El gato es único");
            }
        } else {
            alert("¡Opción incorrecta! Por favor, elige una opción válida.");
            continue;
        }

        agregarGato(nombreGato, personalidad);
        let recomendacion = recomendarJuguete({nombre: nombreGato, personalidad: personalidad});
        mostrarRecomendacion(nombreGato, recomendacion);

        let respuesta = prompt("¿Deseas probar con otro gato? (Si/No)");

        if (respuesta !== null && respuesta.toLowerCase() !== "si") {
            alert("¡Que te diviertas mucho con tus gatitos y sus juguetes!");
            break;
        }
    }
}

// Asignar evento click al botón para iniciar el simulador
document.getElementById("iniciarSimulador").addEventListener("click", iniciarSimulador);
