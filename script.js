const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
var buentexto = document.querySelector(".text-area");
var imagenDeFondoOriginal = mensaje.style.backgroundImage;
function btnEncriptar()  { 
    const textoEncriptado = encriptar(textArea.value);  
    buentexto = encriptar(textArea.value); 
    if(textArea.value == ""){
        /*mensaje.style.backgroundImage = "none";*/
        mensaje.value = "Ingrese texto para desencriptar por favor";
        return;
    } else
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
}
 
/* Se activará cada vez que el usuario ingrese texto en el área correspondiente. Se obtiene el área de texto 
   mediante event.target y el contenido del texto mediante areaTexto.value. Luego, transformo el texto ingresado
   a minúscula usando texto.toLowerCase(), y procedo a realizar la transformación de las vocales acentuadas por vocales
   sin acento, uso un objeto reemplazos y mapeo las vocales acentuadas a su correspondiente vocal sin acento.
   Recorro reemplazos y se utiliza el método replace junto con una expresión regular para reemplazar todas las
   apariciones de cada vocal acentuada por su correspondiente vocal sin acento.*/

   function transformarVocalesAcentuadas(event) {
    var areaTexto = event.target;
    var texto = areaTexto.value;
    
      texto = texto.toLowerCase();
      var reemplazos = {
        'á': 'a',
        'é': 'e',
        'í': 'i',
        'ó': 'o',
        'ú': 'u'
      };
  
      for (var key in reemplazos) {
        texto = texto.replace(new RegExp(key, 'g'), reemplazos[key]);
      }
  
      areaTexto.value = texto;
    
  }
  
  // Visualiza textos
var areaTexto = document.getElementById("miAreaTexto"); // Reemplaza "miAreaTexto" con el ID de tu área de texto
  
areaTexto.addEventListener("input", transformarVocalesAcentuadas);
  
function encriptar(stringEncriptada) {
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0; i < matrizcodigo.length; i++){
       if(stringEncriptada.includes(matrizcodigo[i][0])){
          stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1]);
       }
    }
    return stringEncriptada;
}
function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    buentexto = desencriptar(textArea.value);
    mensaje.style.backgroundImage = "none";
    mensaje.value = textoEncriptado;
    textArea.value = "";
}
function desencriptar(stringDesencriptada) {
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i=0; i < matrizcodigo.length; i++){
       if(stringDesencriptada.includes(matrizcodigo[i][1])){
          stringDesencriptada = stringDesencriptada.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0]);
       }
    }
    return stringDesencriptada;
} 


function btnCopiar() {
    textArea.value = buentexto;
    mensaje.value = "";
    mensaje.style.backgroundImage = imagenDeFondoOriginal;
}
function btnTextarea() {
    mensaje.value = "";
   
}

