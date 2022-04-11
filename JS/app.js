/*
File: app.js
Author: Márton Nikolett Judit
Copyright: 2022, Márton Nikolett
Group: Szoft I E 1/3
Date: 2022-04-11
Github:https://github.com/nikolettmarton
Licenc: GNU GPL
*/

const oktogonOldalMezo = document.querySelector('#oktogonOldal');
const oktogonTeruletMezo = document.querySelector('#oktogonTerulet');
const oktogonSzamitasGomb = document.querySelector('#teruletSzamitas');
/*T = 2*(1+sqrt[2])*a^2*/


oktogonSzamitasGomb.addEventListener('click',() => {
    let oldal= oktogonOldalMezo.value;
    if (isNaN(oldal)) {
        oktogonTeruletMezo.value="Számot kérek"
    }
    else {
        if (oldal<=0){
            oktogonTeruletMezo.value="Csak nagyobb szám lehet mint nulla!"
        }
        else{
        let eredmeny= 2*(1+Math.sqrt(2))* Math.pow(oldal, 2);
        oktogonTeruletMezo.value=eredmeny.toFixed(2);
            }
    }
})
