//Función para convertir la frase de entrada a minusculas
function minuscula(frase){
    fraseMinus=frase.toLowerCase();
    return(fraseMinus)
}
//El agregar el ""event" & "preventDefault" es para que no se actualice la pagina
//Función para encriptar el texto
function encriptar(event){
    event.preventDefault(); //Evitar la actualización de la pag.
    var frase= document.getElementById("texto_entrada").value;
    frase=minuscula(frase); //Convertir el texto a minusculas
    var frasesalida= frase.replace(/e/mg,"enter").replace(/i/mg,"imes").replace(/a/mg,"ai").replace(/o/mg,"ober").replace(/u/mg,"ufat");
    console.log(frasesalida)
    document.getElementById("texto_salida").innerHTML=frasesalida; //Mostrar el texto encriptado
}
//Teniamos un valor nulo por lo que no podiamos mostrar nada
//El Script cargaba antes que el HTML
//Cargar el evento cuando el DOM se haya terminado de cargar
document.addEventListener('DOMContentLoaded',function(){
    var btn= document.querySelector("#boton_encriptar");
    btn.onclick=encriptar;
});
//Función para desencriptar texto
function desencriptar(event){
    event.preventDefault(); //Evitar la actualización de la pag.
    var frase= document.getElementById("texto_entrada").value;
    frase=minuscula(frase);//Convertir el texto a minusculas
    var frasesalida= frase.replace(/enter/mg,"e").replace(/imes/mg,"i").replace(/ai/mg,"a").replace(/ober/mg,"o").replace(/ufat/mg,"u");
    console.log(frasesalida)
    document.getElementById("texto_salida").innerHTML=frasesalida; //Mostrar el texto desencriptado
}
//Cargar el evento cuando el DOOM se haya terminado de cargar
document.addEventListener('DOMContentLoaded',function(){
    var btn= document.querySelector("#boton_desencriptar");
    btn.onclick=desencriptar; //Agregar la función de desencriptar al boton
});
//Funcion para copiar el texto
function copiar(event){
    event.preventDefault(); //Evitar la actualización de la pag
    var textoCopiado=document.getElementById("texto_salida");
    textoCopiado.select();//seleccionar el texto
    document.execCommand("copy");//Comando de copiar
    console.log("Esto he copiado: "+textoCopiado.value);
}
//Cargar el evento cuando el DOM se haya terminado de cargar
document.addEventListener('DOMContentLoaded', function(){
    var botonCopiar=document.getElementById("boton_copiar");
    botonCopiar.addEventListener("click", copiar) //Asignar la function copiar al boton
})

////La manera mas basica de hacerlo es atraves de .lenght para saber el tamaño de la
//variable y con ello realizar 5 ciclos for por cada letra que se desee cambiar
//para  desecniptar es algo parecido pero se haria con condiciones true para saber que
//se cumplen con algunas condiciones del orden de las letras
//el resultado se guardaria en una variable aparte