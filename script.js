// Función vinculada al botón de encriptar en HTML, a través del atributo onclick
function encriptar() {

    // Obtiene el texto ingresado por el usuario desde el campo de texto
    let texto = document.getElementById("texto").value;
    // Obtiene referencias a otros elementos del DOM
    let linkArco = document.getElementById("linkArco");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    
    // Realiza el cifrado del texto reemplazando cada letra por su correspondiente valor cifrado
    let textocifrado = texto 
        .replace(/e/gi, "enter")   // Reemplaza "e" por "enter"
        .replace(/i/gi, "imes")    // Reemplaza "i" por "imes"
        .replace(/a/gi, "ai")      // Reemplaza "a" por "ai"
        .replace(/o/gi, "ober")    // Reemplaza "o" por "ober"
        .replace(/u/gi, "ufat")    // Reemplaza "u" por "ufat"

    if (texto.length != 0){
        // Si el texto no está vacío, muestra el texto cifrado en el campo de texto
        document.getElementById("texto").value = textocifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = ""; 
        linkArco.src = "images/link_mano.png";  // Cambia la imagen de "linkArco"
    } else {
        // Si el texto está vacío, muestra un mensaje de error, cambia la imagen de "linkArco" y muestra una alerta con SweetAlert
        document.getElementById("linkArco").src = "images/link_apunta.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado.";
        parrafo.textContent = "Ingresa el texto que quieres desencriptar o desencriptar";
        swal("Ooops!", "Te falta el texto", "warning");
    }
}

// Función vinculada al botón de desencriptar en HTML, a través del atributo onclick
function desencriptar(){
    // Obtiene el texto ingresado por el usuario desde el campo de texto
    let texto = document.getElementById("texto").value;
    // Obtiene referencias a otros elementos del DOM
    let linkArco = document.getElementById("linkArco");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    
    // Realiza el descifrado del texto reemplazando cada valor cifrado por su correspondiente letra original
    let textocifrado = texto
        .replace(/enter/gi, "e")   // Reemplaza "enter" por "e"
        .replace(/imes/gi, "i")    // Reemplaza "imes" por "i"
        .replace(/ai/gi, "a")      // Reemplaza "ai" por "a"
        .replace(/ober/gi, "o")    // Reemplaza "ober" por "o"
        .replace(/ufat/gi, "u")    // Reemplaza "ufat" por "u"

    if (texto.length != 0) {
        // Si el texto no está vacío, muestra el texto descifrado en el campo de texto
        document.getElementById("texto").value = textocifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito"; 
        linkArco.src = "images/link-header.png";
    } else {
        // Si el texto está vacío, muestra un mensaje de error, cambia la imagen de "linkArco" y muestra una alerta con SweetAlert
        document.getElementById("linkArco").src = "images/link_apunta.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado.";
        parrafo.textContent = "Ingresa el texto que quieres desencriptar o desencriptar";
        swal("Ooops!", "Te falta el texto", "warning");
    }
}
