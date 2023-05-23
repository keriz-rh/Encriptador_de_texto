/*Funcion vinculada al botón del mismo nombre en HTML
atraves del atributo onclick*/

function encriptar() {

    let texto = document.getElementById("texto").value;
    let linkArco = document.getElementById("linkArco");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    
    let textocifrado = texto 
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")

    if (texto.length != 0){
        document.getElementById("texto").value = textocifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = ""; 
        linkArco.src = "images/link_mano.png";
    } else {
        document.getElementById("linkArco").src = "images/link_apunta.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado."
        parrafo.textContent = "Ingresa el texto que quieres desencriptar o desencritar"
        swal("Ooops!", "Te falta el texto", "warning");
    }
    }

    function desencriptar(){
        let texto = document.getElementById("texto").value;
        let linkArco = document.getElementById("linkArco");
        let tituloMensaje = document.getElementById("titulo-mensaje");
        let parrafo = document.getElementById("parrafo");
        
        let textocifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u")

        if (texto.length != 0) {
            document.getElementById("texto").value = textocifrado;
            tituloMensaje.textContent = "Texto desencriptado con éxito"; 
            linkArco.src = "images/link-header.png";
        } else {
        document.getElementById("linkArco").src = "images/link_apunta.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado."
        parrafo.textContent = "Ingresa el texto que quieres desencriptar o desencritar"
        swal("Ooops!", "Te falta el texto", "warning");
        }
    }
