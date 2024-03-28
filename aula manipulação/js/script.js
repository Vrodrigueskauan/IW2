/* Arquivo JS + alterar CSS */

let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 Manipular CSS'
titulo.innerHTML = 'Aula Manipular CSS'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'img/ben10.jpg')
imagem.setAttribute('width', '280px')
imagem.style.borderRadius = "6px";

/* MANIPULAR CSS */
document.querySelector('h1').style.color = "white";
titulo.style.color = "white";
titulo.style.backgroundColor = "green";
titulo.style.borderBottom = "2px #006400";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "145px";

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'escura')
box[0].removeAttribute('class')

/////// MODOS DE COR ///////
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')

let btnblue = document.querySelector('#btblue')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)
btnblue.addEventListener('click', modoblue)

function modoDark() {
    //event.preventDefault();
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("light");
    tela.classList.remove("blue");
    imagem.setAttribute('src', 'img/alienx.webp')
    imagem.setAttribute('width', '280px')
    titulo.style.backgroundColor = "black";
    titulo.style.borderBottom = "2px white";
}

function modoLight() {
    //event.preventDefault();
    console.log('modo light')
    tela.classList.remove("dark");
    tela.classList.remove("blue");
    tela.classList.add("light");
    imagem.setAttribute('src', 'img/ben10.jpg')
    imagem.setAttribute('width', '280px')
    titulo.style.backgroundColor = "green";
    titulo.style.borderBottom = "2px white";
    
}
function modoblue() {
    //event.preventDefault();
    console.log('modo blue')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.add("blue");
    imagem.setAttribute('src', 'img/xrl8.webp')
    imagem.setAttribute('width', '280px')
    titulo.style.backgroundColor = "#1a237e";
    titulo.style.borderBottom = "2px white";
    
}

/*
titulo.addEventListener('click', mudarId)
function mudarId() {
    titulo.id = 'titulo'
    console.log(titulo.id)
}
*/
