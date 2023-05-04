var btn_encriptar = document.getElementById("btn_encriptar");
var btn_desencriptar = document.getElementById("btn_desencriptar");
var input_texto = document.getElementById("input_mensaje_entrada");
var msn_error = document.getElementById("mensaje_error");
var mensajeError = document.getElementById("section_error");
var msmEncriptado = document.getElementById("msmEncriptado");
var mensaje = document.getElementById("mensaje");

var vocal = ["e","i","a","o","u"];
var cifrado = ["enter","imes","ai","ober","ufat"];
var mensaje_limpio;

btn_encriptar.addEventListener('click',encriptar,true);

btn_desencriptar.addEventListener('click',desencriptar,true);

function encriptar(){   
    if(validarTextoEntrada()){
        let i = 0;
            while (i <= 4) {
            mensaje_limpio = mensaje_limpio.replaceAll(vocal[i],cifrado[i]);
            i++;
            console.log("-> " + mensaje_limpio);
            }
        console.log("Texto encriptado completo -> "+ mensaje_limpio);
        mensajeError.style.display="none";
        msmEncriptado.style.display="block";
        mensaje.innerHTML = mensaje_limpio;    
    }
}
function desencriptar(){
    if (validarTextoEntrada()) {
        let i = 0;
        while (i <= 4) {
            mensaje_limpio = mensaje_limpio.replaceAll(cifrado[i],vocal[i]);
            i++;
            console.log("-> " + mensaje_limpio);
        }
        console.log("Texto DES-encriptado completo -> "+ mensaje_limpio)
        mensajeError.style.display="none";
        msmEncriptado.style.display="block";
        mensaje.innerHTML = mensaje_limpio;
    }
    
}

function validarTextoEntrada() {
    if (input_texto.value == "") {
        mensajeError.style.display="block";
       mensaje.innerHTML = "";
        return false;
    }
    else{
        mensaje_limpio = removeAccents(input_texto.value);
        return true;
    } 
    }
//funcion para remover acentos y caracteres especiales del string.
function removeAccents(texto){
    texto = texto.toLowerCase();
    texto = texto.replace(new RegExp(/[(%&='¡!|°¬^+"#?:*[@$?¡\-_)]/g),"");
    texto = texto.replace(new RegExp(/[àáâãäå]/g),"a");
    texto = texto.replace(new RegExp(/[èéêë]/g),"e");
    texto = texto.replace(new RegExp(/[ìíîï]/g),"i");              
    texto = texto.replace(new RegExp(/[òóôõö]/g),"o");
    texto = texto.replace(new RegExp(/[ùúûü]/g),"u");
    return texto;
  } 

