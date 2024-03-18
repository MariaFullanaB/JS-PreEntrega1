function simuladorJuguetes() {
    console.log("Bienvenido al simulador")
    alert("¡Bienvenido! Te invitamos a encontrar el mejor juguete para tu gato");


    while (true) {
        let nombreGato = prompt("Antes de empezar, por favor introduce el nombre de tu gato:");
        console.log("Nombre del gato:", nombreGato);

        let personalidad = prompt("Por favor, elige su personalidad:\n1. Travieso\n2. Tranquilo\n3. Curioso\n4. Otro");

            if (personalidad === "1" || personalidad === "2" || personalidad === "3" || personalidad === "4") {
                if (personalidad === "1") {
                    console.log("El gato es travieso")
                    alert("¡" + nombreGato + " es travieso! Te recomendamos un juguete interactivo como una varita con plumas o un ratón de peluche que se mueva.");
                } else if (personalidad === "2") {
                    console.log("El gato es tranquilo")
                    alert("¡" + nombreGato + " es tranquilo! Te recomendamos un juguete suave y mullido, como un peluche o una pelota de lana.");
                } else if (personalidad === "3") {
                    console.log("El gato es curioso")
                    alert("¡" + nombreGato + " es curioso! Te recomendamos juguetes que estimulen su curiosidad, como un túnel para gatos.");
                } else if (personalidad === "4"){
                    console.log("El gato es único")
                    alert("¡" + nombreGato + " tiene una personalidad única! Te recomendamos experimentar con diferentes tipos de juguetes para descubrir cuáles le gustan más.");
                }
            } else {
                alert("¡Opción incorrecta! Por favor, elige una opción válida.");
                continue; 
            }

        let respuesta = prompt("¿Deseas probar con otro gato? (Si/No)");

        if (respuesta !== null && respuesta.toLowerCase() !== "si") {
            alert("¡Que te diviertas mucho con tu gatito y sus juguetes!");
            break;
        }
    }

}

simuladorJuguetes();
