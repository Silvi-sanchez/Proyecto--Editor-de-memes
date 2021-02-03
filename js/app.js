
// Elementos a los que le aplicaremos el innerHTML o donde se ingresa el DOM
const primerTexto = document.getElementById('primer-texto');
const segundoTexto = document.getElementById('segundo-texto');
const colorLetra = document.getElementById('color-letra');
const colorFondo = document.getElementById('color-fondo');
const colorTexto = document.getElementById('colorTexto');
const fondoColor = document.getElementById('fondoColor');
const centroTexto = document.getElementById('centro-texto');
const spanColores = document.getElementById('spanColores');


// Elementos a los que se les aplicara los eventos
const textoSuperior = document.getElementById('texto-superior');
const textoInferior = document.getElementById('texto-inferior')
const topCheck = document.getElementById('top-check');
const topCheck2 = document.getElementById('top-check-2')
const tipoFuentes = document.getElementById('tipo-fuentes');
const tamanioLetra = document.getElementById('tamanio-letra');
const izquierda = document.getElementById('izquierda');
const derecha = document.getElementById('derecha');
const centrar = document.getElementById('centrar');
const transparente = document.getElementById('transparente');
const urlImg = document.getElementById('urlImg');
const columnaImg = document.getElementById('columna-img');
const columnaTexto = document.getElementById('columna-texto');
const botonNinguno = document.getElementById('botonNinguno');
const botonClaro = document.getElementById('botonClaro');
const botonOscuro = document.getElementById('botonOscuro');
const espaciado = document.getElementById('espaciado');
const interlineado = document.getElementById('interlineado');
const inputColores = document.getElementById('input-colores');
const inputColumnaColores = document.getElementById('input-columna-colores');
const barraBrillo = document.getElementById('barra-brillo');
const barraOpacidad = document.getElementById('barra-opacidad');
const barraContraste = document.getElementById('barra-contraste');
const barraDesenfoque = document.getElementById('barra-desenfoque');
const barraEscalaGrises = document.getElementById('barra-escala-grises');
const barraSepia = document.getElementById('barra-sepia');
const barraHue = document.getElementById('barra-hue');
const barraSaturado = document.getElementById('barra-saturado');
const barraNegativo = document.getElementById('barra-negativo');
const botonRestablecer = document.getElementById('boton-restablecer');
const botonDescargarMeme = document.getElementById('botonDescargarMeme');
const contenedorMeme = document.getElementById('contenedorMeme');

         // Funciones cuando se carga la página
window.onload = () => {
  espaciadoValor();
  mostrarColumnaImg()
};

 
        // Mostrar columna imagen al cargarse la página
function mostrarColumnaImg(){
  columnaTexto.style.display = 'none';
  columnaImg.style.display = '';
}
function mostrarColumnaTexto(){
  columnaImg.style.display = 'none';
  columnaTexto.style.display = '';
}

        //Cambio a modo claro y modo oscuro
function cambioAModoClaro(){
  document.body.classList.remove('cambiarModoOscuro');
  document.body.classList.add('cambiarModoClaro');
}
function cambioAModoOscuro(){
  document.body.classList.remove('cambiarModoClaro');
  document.body.classList.add('cambiarModoOscuro');
}


        //Botones para mostrar aside imagen
function ocultarMostrarImagen(){
  columnaImg.style.display = '';
  columnaTexto.style.display = 'none';
}
       //Botones para mostrar aside texto
function ocultarMostrarTexto(){
  columnaTexto.style.display = '';
  columnaImg.style.display = 'none';
}

        //Escribir texto superior
textoSuperior.addEventListener('keyup', () => {
  primerTexto.innerHTML = textoSuperior.value;
});

       //Escribir texto inferior
textoInferior.addEventListener('keyup', () => {
  segundoTexto.innerHTML = textoInferior.value;
});

      //Mostrar y ocultar parte superior
topCheck.addEventListener('click',() => {
  if(topCheck.checked){
    primerTexto.style.backgroundColor = 'black';
  } else {
    primerTexto.style.backgroundColor = 'white';
  }
});

      //Mostrar y ocultar parte inferior
topCheck2.addEventListener('click',() => {
  if(topCheck2.checked){
    segundoTexto.style.backgroundColor = 'black';
  } else {
    segundoTexto.style.backgroundColor = 'white';
    }
});

        //Aplicar tipos de fuentes
tipoFuentes.addEventListener('change', () => {
  primerTexto.style.fontFamily = `${tipoFuentes.value}`;
  segundoTexto.style.fontFamily = `${tipoFuentes.value}`;
});

        //Aplicar tipos de tamaño letra
tamanioLetra.addEventListener('keyup', () => {
  primerTexto.style.fontSize = `${tamanioLetra.value}px`
  segundoTexto.style.fontSize = `${tamanioLetra.value}px`
});
tamanioLetra.addEventListener('click', () => {
  primerTexto.style.fontSize = `${tamanioLetra.value}px`
  segundoTexto.style.fontSize = `${tamanioLetra.value}px`
});
   
       //Aplicar izquierda, centrado, derecha del texto
izquierda.addEventListener('click', (e) => {
  e.preventDefault();
  primerTexto.style.textAlign = 'left';
  segundoTexto.style.textAlign = 'left';
});
derecha.addEventListener('click', (e) => {
  e.preventDefault();
  primerTexto.style.textAlign = 'right';
  segundoTexto.style.textAlign = 'right';
});
centrar.addEventListener('click', (e) => {
  e.preventDefault();
  primerTexto.style.textAlign = 'center';
  segundoTexto.style.textAlign = 'center';
});

       //Aplicar color al texto
colorLetra.addEventListener('input', (e) =>{
  const textoColor = e.target.value;
  primerTexto.style.color = textoColor ;
  segundoTexto.style.color = textoColor ;
  colorTexto.innerHTML = textoColor.toUpperCase();
})

       //Aplicar color de fondo al texto
colorFondo .addEventListener('input', (e) =>{
  const backgrondColor = e.target.value;
  primerTexto.style.backgroundColor = backgrondColor;
  segundoTexto.style.backgroundColor = backgrondColor;
  fondoColor.innerHTML = backgrondColor.toUpperCase();
})

        //Aplicar transparencia al texto
transparente.addEventListener('click', (e) => {
  if(e.target.checked){
    primerTexto.style.backgroundColor = 'transparent';
    segundoTexto.style.backgroundColor = 'transparent';
    primerTexto.style.position= 'absolute';
  }else{
    const color = colorFondo.value;
    colorFondo.innerText = color.toUpperCase();
    primerTexto.style.backgroundColor = color;
    segundoTexto.style.backgroundColor = color;
    primerTexto.style.position='absolute';
  }
})

        //Aplicar contorno al texto
botonNinguno.addEventListener('click', (e) =>  {
  e.preventDefault();
  primerTexto.style.textShadow = 'none'
  segundoTexto.style.textShadow = 'none'
})
botonClaro.addEventListener('click', (e) =>  {
  e.preventDefault();
  primerTexto.style.textShadow = `2px 2px #999`;
  segundoTexto.style.textShadow = `2px 2px #999`;
})
botonOscuro.addEventListener('click', (e) =>  {
  e.preventDefault();
  primerTexto.style.textShadow = `2px 2px #000`;
  segundoTexto.style.textShadow = `2px 2px #000`;
})

         //Aplicar espaciado al texto
const espaciadoValor = () => {
  let valorEspaciado = espaciado.value;
  primerTexto.style.padding = `${valorEspaciado}px 50px`;
  segundoTexto.style.padding = `${valorEspaciado}px 50px`;
}
 
        //Aplicar interlineado al texto
interlineado.addEventListener('change', () =>{
  const valorInterlineado = interlineado.value;
  primerTexto.style.lineHeight = valorInterlineado;
  segundoTexto.style.lineHeight = valorInterlineado;
})

       //Aplicar URL
urlImg.addEventListener('keyup', (e) => {
  const src = urlImg.value;
  centroTexto.style.backgroundImage = `url('${src}')`;
  centroTexto.style.backgroundPosition = 'center';
  centroTexto.style.backgroundRepeat = 'no-repeat';
  centroTexto.style.backgroundSize = 'cover';
});

       //Aplicar color fondo a la imagen
inputColores.addEventListener('input', cambiandoColoresImg);

function cambiandoColoresImg() {
 const fondoImagen = inputColores.value;
 centroTexto.style.backgroundColor = fondoImagen ;
 spanColores.innerHTML = fondoImagen.toUpperCase();
};

       //Aplicar filtros al fondo de la imagen
const actualizarColorMezcla = (evento) =>{
  spanColores.innerText = evento.target.value.toUpperCase()
  centroTexto.style.backgroundColor = evento.target.value;
}
const actualizarTipoMezcla = (evento) =>{
  centroTexto.style.backgroundBlendMode = evento.target.value;
}

spanColores.addEventListener('input', actualizarColorMezcla);
inputColumnaColores.addEventListener('change', actualizarTipoMezcla);


       //Aplicar filtros a la imagen
//Brillo
barraBrillo.addEventListener('change', () =>{
  aplicacionFiltros()
  });

//Opacidad
barraOpacidad.addEventListener('change', () =>{
  aplicacionFiltros()
});

//Contraste
barraContraste.addEventListener('change', () =>{
  aplicacionFiltros()
});

//Desenfoque
barraDesenfoque.addEventListener('change', () =>{
  aplicacionFiltros();
});

//Escala de grises
barraEscalaGrises.addEventListener('change', () =>{
  aplicacionFiltros();
});

//Sepia
barraSepia.addEventListener('change', () =>{
  aplicacionFiltros();
});

//Hue
barraHue.addEventListener('change',() =>{
  aplicacionFiltros();
});

//Saturado
barraSaturado.addEventListener('change', () =>{
  aplicacionFiltros();
});

//Negativo
barraNegativo.addEventListener('change', () =>{
  aplicacionFiltros();
});

//Reestablecer filtros
botonRestablecer.addEventListener('click', restablecerFiltros);

function restablecerFiltros() {
  barraBrillo.value = 1;
  barraOpacidad.value = 1;
  barraContraste.value = 100;
  barraDesenfoque.value = 0;
  barraEscalaGrises.value = 0;   
  barraSepia.value = 0;
  barraHue.value = 0;
  barraSaturado.value = 100;
  barraNegativo.value = 0;

  cambiandoColoresImg();
  aplicacionFiltros()
};

function aplicacionFiltros() {
  centroTexto.style.filter = `brightness(${barraBrillo.value}) opacity(${barraOpacidad.value}) contrast(${barraContraste.value}%) blur(${barraDesenfoque.value}px) grayscale(${barraEscalaGrises.value}%) sepia(${barraSepia.value}%) hue-rotate(${barraHue.value}deg) saturate(${barraSaturado.value}%) invert(${ barraNegativo.value})`;
};
  
        //Boton descargar meme
const descargarMeme = () => {
  domtoimage.toBlob(contenedorMeme).then(function (blob){
  saveAs(blob, 'mi-meme.png')
})
}
