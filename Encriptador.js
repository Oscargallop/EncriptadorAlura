//let textoUsuario = 'abcd';
let arrayEncriptado = [];
let arrayDesencriptado = [];
let textoEncriptadoParaMostrar = "";
//const salidaMensaje = document.querySelector(".cuadro_salida")
//let textoUsuario = "";

function botonEncriptar () {    
    const textoEncriptadoParaMostrar = cifrar();
    //let paraBorrar = document.getElementById("textoUsuario").value;
    //cuadro_salida.value = textoEncriptadoParaMostrar;
    //cuadro_salida.style.backgroundImage = 
    //document.getElementById('img').style.display = "none";
    console.log(textoEncriptadoParaMostrar);
    return;
}

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
    //
    //salidaMensaje.value = textoEncriptado
    document.getElementById("textoEncriptadoMensaje").innerText = textoEncriptado;
    document.getElementById("textoUsuario").value = "";
    return arrayEncriptado;
}

function copiarTexto () {
    document.getElementById.textoEncriptadoParaMostrar = document.getElementById(textoEncriptadoMensaje).value;
    console.log(textoEncriptadoParaMostrar);
    return;
}


function botonDesencriptar () {
    //let arrayEncriptado = arrayEncriptado;
    //console.log(arrayEncriptado.length);
    longitud2 = arrayEncriptado.length;
    console.log(longitud2);
    //let paraDesencriptar = document.getElementById(textoEncriptado).value;
    //let longitud = arrayEncriptado.length;
    //console.log("la longitud es", longitud);
    //const mensaje = new String (paraDesencriptar);
    //console.log("la letra es", letra);
    for(let i = 0; i < longitud2; i ++){
        arr = arrayEncriptado[i];
        if(arr == "ai"){
            arrayDesencriptado[i] = "a";
        } else {
            if(arr == "enter"){
                arrayDesencriptado[i] = "e";
            } else {
                if(arr == "imes"){
                    arrayDesencriptado[i] = "i";
                } else {
                    if(arr == "ober"){
                        arrayDesencriptado[i] = "o";
                    } else {
                        if(arr == "ufat"){
                            arrayDesencriptado[i] = "u";
                        } else {
                            arrayDesencriptado[i] = arr;
                        }
                    }
                }
            }
        }
    }
    console.log (arrayDesencriptado);
    
    //console.log(arrayEncriptado);
    const textoDesencriptado = arrayDesencriptado.join("");
    console.log(textoDesencriptado);
    //reversaMensaje.value = textoDesencriptado
    //document.getElementById("textoUsuario").innerText = textoDesencriptado;
    document.getElementById("textoEncriptadoMensaje").value = textoDesencriptado;
    return textoDesencriptado;
}


/*
function verificador (str){
    
}

*/