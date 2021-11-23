
/*
let erssteZahl = 2;
let zweiteZahl = 3;

function substraktion() {
  let substraktion = ersteZahl - zweiteZahl;
  console.log("Die substraktion ist:",substraktion);

} 
function myFunction() {
    console.log("Hallo Welt");
}
*/
/*
// function schreiben
let isMouseAlive = true


function miau() {console.log("miau, miau, miau");
}

function fangeineMaus() {console.log("...Quitsch");
}

function aufDenBaum() {console.log("oben auf den Baum");

}
console.log("Die Katze ruht sich aus");
function aufDenBaum(){
  if (isMouseAlive) {
      console.log( "Die Maus versteckt sich vor der Katze");
  } else {
      console.log("Die Katze ruht sich aus")
  } 
}

miau();
fangeineMaus();
aufDenBaum();
*/

let isMouseAlive = true; //Auf false setzen und nochmal das Programm ausführen

function miau() {
    console.log("Miau, miau, miau");
}

function catchMouse() {
    isMouseAlive = false;
    console.log("Maus am Leben?", isMouseAlive);
}

function climbTree() {
    if (isMouseAlive) {
        miau();
        console.log("Die Katze versteckt sich vor der Maus");
    } else {
        catchMouse();
        console.log("Die Katze ruht sich aus");
    }
}

climbTree();


