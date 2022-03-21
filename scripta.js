// // selektimi i elemente permes DOM
// HTML elementet te cilat nuk kane nevoje per selektore
// document.head;
// document.body;
// document.documentElement;

// //selektoret e elementeve
// document.getElementById();//qasja me id
// document.getElementsByClassName();//qasja me klase
// document.querySelector('p');//qasja me emer te elementit, me id ose klase per elementin e pare
// document.querySelectorAll('p');//qasja me emer te elementit, me id ose klase per te gjitha elementet
// document.getElementsByTagName('p');


// // fshirja e elementeve
// function fshij(){
//     let paragrafiPare = document.querySelector('p');
//     paragrafiPare.remove();
    
    
   
// }

// function NgjitElementin(){
//     //krijimi i elementeve
//     let titulli = document.createElement('h1');
//     titulli.innerHTML = "Heading i shtuar me JS"
//     // ngjitja e elemntit ne body
//     let b = document.body
//  // b.prepend(titulli)//shtimi i elementuit ne fillim te body
//     // b.append(titulli)//shtimi i elementit ne fund te prindit te tij
    

// }

// function shto(){
//     let shto = document.createElement('p');
//     shto.innerHTML = 'paragrafi 4';
//     document.body.append(shto);

// }
// function AddClassStiliMire(){

//     let fshi = document.querySelector('p')
//     fshi.remove()
// // document.removeChild()

// }
// let shto = document.createElement('p');
//    shto.innerHTML = 'paragrafi 4';

// function shtopfillim(){
//     document.body.prepend(shto.cloneNode(true))
// }


// function shtopfund(){
//     document.body.append(shto.cloneNode(true))
// }
let p1 = document.querySelector('p');
let p2 = document.querySelector('.paragrafiDyte')
let p3 = document.querySelector('.paragrafiTrete')

function StiliMire(){
    p1.classList.remove('stiliKeq')
    p2.classList.remove('stiliKeq')
    p3.classList.remove('stiliKeq')
    p1.classList.add('stiliMire')
    p2.classList.add('stiliMire')
    p3.classList.add('stiliMire')

}

function StiliKeq(){
    p1.classList.remove('stilimire')
    p1.classList.remove('stiliMire')
    p1.classList.remove('stiliMire')
    p1.classList.add('stiliKeq')
    p2.classList.add('stiliKeq')
    p3.classList.add('stiliKeq')

}


// function stili


