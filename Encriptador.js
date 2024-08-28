let arrayEncriptado = [];
let arrayDesencriptado = [];
let textoEncriptadoParaMostrar = "";
let textoEncriptado = "";

function botonEncriptar () {

    /*document.getElementById("textoUsuario").addEventListener("input", function() {
        // Obtener el valor actual del textarea
        let paraFiltrar = this.value;
        // Eliminar caracteres que no sean letras minúsculas
        let textoFiltrado = paraFiltrar.replace(/[^a-z\s]/g, '');
        console.log(textoFiltrado);
        // Reemplazar el valor del textarea con el texto filtrado
        this.value = textoFiltrado;
    });*/



    let paraEncriptar = document.getElementById("textoUsuario").value;
    //let paraEncriptar = textoFiltrado;
    if (paraEncriptar.trim() === ""){
        alert('Por favor escriba el texto a encriptar!');
    } else {
        let longitud = paraEncriptar.length;
        console.log("la longitud es", longitud);
        const mensaje = new String (paraEncriptar);
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
        
        document.getElementById("textoEncriptadoMensaje").innerText = textoEncriptado;
        document.getElementById("textoUsuario").value = "";
        
        borrImagen=document.querySelector('.texto_salida')
        borrImagen.style.backgroundImage = "none";

        return textoEncriptado;
    }
}


function copiarTexto (textoEncriptado) {
    //document.getElementById.textoEncriptadoParaMostrar = document.getElementById(textoEncriptadoMensaje).value;
    console.log(textoEncriptado);

    
    let textoCopiado = document.getElementById(textoEncriptado).value;
    
    navigator.clipboard.writeText(textoCopiado)
        .then(() => {
            console.log("Texto copiado al portapapeles con éxito!");
            // Aquí puedes agregar una notificación o alguna otra acción
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
            // Aquí puedes manejar el error si la copia falla
        });
    return;
}


function botonDesencriptar () {
    longitud2 = arrayEncriptado.length;
    console.log(longitud2);
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
    
    const textoDesencriptado = arrayDesencriptado.join("");
    console.log(textoDesencriptado);
    document.getElementById("textoEncriptadoMensaje").value = textoDesencriptado;
    return textoDesencriptado;
}

function reiniciar(){
    location.reload();
}

/*
function verificador (str){
    
}

*/