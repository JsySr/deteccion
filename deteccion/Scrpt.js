import { insertarJson } from './senddate.js';
let usuario = 'jasmin'
// Función para interpretar los comandos de voz
function interpretCommand(command) {
    // Verificar los comandos relacionados con la recámara
    if (command.includes("la luz de la recámara")) {
        if (command.includes("siri encender")) {
            // Agregar lógica para encender la luz de la recámara
            console.log("Encendiendo la luz de la recámara...");
            insertarJson('Se encendió la luz de la recámara', usuario);
        } else if (command.includes("siri apagar")) {
            // Agregar lógica para apagar la luz de la recámara
            console.log("Apagando la luz de la recámara...");
            insertarJson('Se apagó la luz de la recámara', usuario);
        }
    }

    // Verificar los comandos relacionados con la sala
    if (command.includes("la luz de la sala")) {
        if (command.includes("siri encender")) {
            // Agregar lógica para encender la luz de la sala
            console.log("Encendiendo la luz de la sala...");
            insertarJson('Se encendió la luz de la sala', usuario);
        } else if (command.includes("siri apagar")) {
            // Agregar lógica para apagar la luz de la sala
            console.log("Apagando la luz de la sala...");
            insertarJson('Se apagó la luz de la sala', usuario);
        }
    }

    // Verificar los comandos relacionados con las luces del jardín
    if (command.includes("luces del jardín")) {
        if (command.includes("siri encender")) {
            // Agregar lógica para encender las luces del jardín
            console.log("Encendiendo las luces del jardín...");
            insertarJson('Se encendieron las luces del jardín', usuario);
        } else if (command.includes("siri apagar")) {
            // Agregar lógica para apagar las luces del jardín
            console.log("Apagando las luces del jardín...");
            insertarJson('Se apagaron las luces del jardín', usuario);
        }
    }


    // Verificar los comandos relacionados con el ventilador
    if (command.includes("ventilador")) {
        if (command.includes("siri encender")) {
            // Agregar lógica para encender el ventilador
            console.log("Encendiendo el ventilador...");
            insertarJson('Se encendió el ventilador', usuario);
        } else if (command.includes("siri apagar")) {
            // Agregar lógica para apagar el ventilador
            console.log("Apagando el ventilador...");
            insertarJson('Se apagó el ventilador', usuario);
        }
    }

    // Verificar los comandos relacionados con las cortinas
    if (command.includes("cortinas")) {
        if (command.includes("siri abrir")) {
            // Agregar lógica para abrir las cortinas
            console.log("Abriendo las cortinas...");
            insertarJson('Se abrieron las cortinas', usuario);
        } else if (command.includes("siri cerrar")) {
            // Agregar lógica para cerrar las cortinas
            console.log("Cerrando las cortinas...");
            insertarJson('Se cerraron las cortinas', usuario);
        }
    }

    // Verificar los comandos relacionados con la alarma de la casa
    if (command.includes("alarma de la casa")) {
        if (command.includes("siri encender")) {
            // Agregar lógica para activar la alarma de la casa
            console.log("Activando la alarma de la casa...");
            insertarJson('Se activó la alarma de la casa', usuario);
        } else if (command.includes("siri apagar")) {
            // Agregar lógica para desactivar la alarma de la casa
            console.log("Desactivando la alarma de la casa...");
            insertarJson('Se desactivó la alarma de la casa', usuario);
        }
    }

    // Verificar los comandos relacionados con las cámaras de seguridad
    if (command.includes("cámara de seguridad")) {
        if (command.includes("siri encender")) {
            // Agregar lógica para encender las cámaras de seguridad
            console.log("Encendiendo las cámaras de seguridad...");
            insertarJson('Se encendieron las cámaras de seguridad', usuario);
        } else if (command.includes("siri apagar")) {
            // Agregar lógica para apagar las cámaras de seguridad
            console.log("Apagando las cámaras de seguridad...");
            insertarJson('Se apagaron las cámaras de seguridad', usuario);
        }
    }
}

// Función para iniciar el reconocimiento de voz
function startSpeechRecognition() {
    const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.lang = 'es-ES'; // Configura el idioma de reconocimiento

    recognition.onresult = function(event) {
        const result = event.results[event.results.length - 1];
        const command = result[0].transcript.trim().toLowerCase();
        console.log("Comando reconocido:", command);
        interpretCommand(command);
    }

    recognition.onend = function() {
        console.log("Reconocimiento de voz detenido. Reiniciando...");
        startSpeechRecognition(); // Reinicia el reconocimiento de voz para que esté siempre escuchando
    }
    recognition.start();
    console.log("Escuchando...");
}
// Iniciar el reconocimiento de voz al cargar la página
window.onload = startSpeechRecognition;
