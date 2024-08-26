//let textoUsuario = 'abcd';
let arrayEncriptado = [];
//const salidaMensaje = document.querySelector(".cuadro_salida")


function cifrar () {
    let paraEncriptar = document.getElementById("textoUsuario").value;
    let longitud = paraEncriptar.length;
    console.log("la longitud es", longitud);
    const mensaje = new String (paraEncriptar);
    //console.log("la letra es", letra);
    for(let i = 0; i < longitud; i ++){
        letra = mensaje[i];
        if(letra == "a"){
            arrayEncriptado[i] = "ai";
        } else {
            if(letra == "e"){
                arrayEncriptado[i] = "enter";
            } else {
                if(letra == "i"){
                    arrayEncriptado[i] = "imes";
                } else {
                    if(letra == "o"){
                        arrayEncriptado[i] = "ober";
                    } else {
                        if(letra == "u"){
                            arrayEncriptado[i] = "ufat";
                        } else {
                            arrayEncriptado[i] = letra;
                        }
                    }
                }
            }
        }
    }
    //console.log(arrayEncriptado);
    const textoEncriptado = arrayEncriptado.join("");
    console.log(textoEncriptado);
    //salidaMensaje.value = textoEncriptado
    document.getElementById("textoEncriptadoMensaje").innerText = textoEncriptado;
    return;
}

/*
function verificador (str){
    
}

/*
function botonDescifrar () {    

}

function descifrar () {

}

function copiar () {
    
}
*/