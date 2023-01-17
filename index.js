function encriptacion(texto){
    texto = texto.toLowerCase();
    let array = texto.split("");
    for(let i = 0; i < array.length; i++){
        switch(array[i]){
            case 'a':
                array[i] = 'ai';
                break;
            case 'e':
                array[i] = 'enter';
                break;
            case 'i': 
                array[i] = 'imes';
                break;
            case 'o':
                array[i] = 'ober';
                break;
            case 'u':
                array[i] = 'ufat';
                break;
        }
    }

    return array.join("");
    
}

function desencriptacion(texto){
    texto = texto.toLowerCase();
    let array = texto.split("");
    for(let i = 0; i < array.length; i++){
        switch(array[i]){
            case 'a':
                array.splice([i+1],1);
                break;
            case 'e':
                array.splice([i+1],4); 
                break;
            case 'i': 
                array.splice([i+1],3); 
                break;
            case 'o':
                array.splice([i+1],3)
                break;
            case 'u':
                array.splice([i+1],3)
                break;
        }
    }

    return array.join("");
}

function encriptarTexto() {
    
    
    // Configuración de la visualización despues de la encriptación del texto
    document.getElementById("copiar").style.visibility="initial";
    document.getElementById("texto_modificado").style.visibility="initial";
    document.getElementsByClassName("rectangulo_contenido")[0].style.visibility="hidden";
    
    // Encriptación
    let texto = document.getElementById("ingreso_texto").value;
    texto = encriptacion(texto);
     // Condición al no haber texto de entrada
    if(texto === ""){
        texto = "No ha ingresado ningún texto para encriptar";
    }
    document.getElementById("texto_modificado").innerText = texto;

}

function desencriptarTexto() {

    // Configuración de la visualización despues de la encriptación del texto
    document.getElementById("copiar").style.visibility="initial";
    document.getElementById("texto_modificado").style.visibility="initial";
    document.getElementsByClassName("rectangulo_contenido")[0].style.visibility="hidden";

    // Desencriptación
    let texto = document.getElementById("ingreso_texto").value;
    texto = desencriptacion(texto);
    // Condición al no haber texto de entrada
    if(texto === ""){
        texto = "No ha ingresado ningún texto para desencriptar";
    }
    document.getElementById("texto_modificado").innerText = texto;


}

function copiarTexto(){
    let texto_copiado = document.getElementById("texto_modificado").value;
    navigator.clipboard.writeText(texto_copiado);
    //alert("El siguiente texto fue copiado: " + texto_copiado);

}