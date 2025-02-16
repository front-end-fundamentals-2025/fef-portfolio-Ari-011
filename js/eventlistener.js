/*The following code is inspired by: https://youtu.be/i_8NQuEAOmg?si=kTFiNiWxXyrh98Qy  Accessed: 2025-02-16 */

const dark = document.getElementById('dark-button');
const light = document.getElementById('light-button');


dark.addEventListener("click", darkMode);
light.addEventListener("click", lightMode);


function darkMode(){
  document.body.style.background = "black";
  document.body.style.color = "white";
}

function lightMode(){
  document.body.style.background = "White";
  document.body.style.color = "Black";
}