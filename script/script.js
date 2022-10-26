/*

**Consegna:**
Riprendiamo l’esercizio carosello e rifacciamolo, questa volta usando un array di oggetti.
Ogni elemento deve avere un titolo, una descrizione e il riferimento ad una immagine.
Immagini proposte (non obbligatorie):
Svezia http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg
Perù https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg
Chile https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c
Argentina https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg
Colombia https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop
Le immagini devono essere 5 e nella grafica devono essere presenti:
- immagine in evidenza
- thumbnail di tutte le immagine con in evidenza l’immagine attiva
- bottone avanti e indietro

*/

/* 
1) inserire i dati in un array di oggetti
2) ciclare e stampare immagine e descrizione oggetti nel box-img
3) stampare immagine nel carousel
*/

const gallery = [
  {
    titolo: 'Svezia',
    descrizione: 'lorem',
    photo: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg'
  },

  {
    titolo: 'Perù',
    descrizione: 'lorem',
    photo: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg'
  },

  {
    titolo: 'Chile',
    descrizione: 'lorem',
    photo: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c'
  },

  {
    titolo: 'Argentina',
    descrizione: 'lorem',
    photo: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg'
  },

  {
    titolo: 'Colombia',
    descrizione: 'lorem',
    photo: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop'
  }
];

const boxImg = document.querySelector('.box-img');
const carousel = document.querySelector('.carousel');

const back = document.querySelector('.back');
const next = document.querySelector('.next');

const numImg = 5;
let counterImg = '';

let boxImgHtml = '';
let carouselHtml = '';



for(let img of gallery){
  `<img src="${img.photo}" class="item" alt="${img.photo}">`;
  console.log(img.photo);
}

boxImg.innerHTML += boxImgHtml;