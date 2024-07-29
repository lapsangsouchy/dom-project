// Add your code to this file

/* Get references */
let body = document.querySelector('body');

let introduction = document.querySelector('.introduction');

let pokemonMainHeader = document.querySelector('.introduction h1');

let incredibleHeader = document.querySelector('.introduction h2');

let startersImage = document.querySelector('#starters_image_div img');

let pokemonImages = document.getElementsByClassName('pokemon_images');

let pokemonNames = document.getElementsByClassName('pokemon_names');

let bulbasaurContainer = document.getElementById('bulbasaur_container');

/* Make Changes */

// Turn body background color blue (exact color found in color-picker)
body.style.backgroundColor = '#00008b';

// Underline the Pokemon! h1 in the introduction
pokemonMainHeader.style.textDecoration = 'underline';

// Center the h2 in the introduction
introduction.style.textAlign = 'center';

// Change the text in that same h2
incredibleHeader.innerHTML = "Here are Pokemon's incredible Gen 1 starters!";

// Add dotted #FFCB05 border to image within #starters_imgage_div
startersImage.style.border = 'dotted #FFCB05 4px';

// Loop through each pokemon image and give it a #FFCB05 dotted border
for (let i = 0; i < pokemonImages.length; i++) {
  pokemonImages[i].style.border = 'dotted #FFCB05 4px';
}

// Loop through each pokemon name and:
// 1. Change the text color to #FFCB05
// 2. Add an exclamation mark to the end of the string
for (let i = 0; i < pokemonNames.length; i++) {
  pokemonNames[i].style.color = '#FFCB05';
  pokemonNames[i].innerHTML += '!';
}

// Change the background color of the bulbasaur container to #388e8e
bulbasaurContainer.style.backgroundColor = '#388e8e';
