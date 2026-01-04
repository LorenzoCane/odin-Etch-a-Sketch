//Etch-a-Sketch Assignement (Odin Project)
//Lorenzo Cane

//----------------------------------------------
//CONST & VARIABLES
const log = console.log;
const resMin = 1;
const resMax = 100;
let basicColor = "white";
let resolution = 16;


//QUERIES
const mainContainer = document.querySelector(".mainContainer");
const resBtn = document.querySelector("#resBtn");
const wipeBtn = document.querySelector("#wipeBtn");

//----------------------------------------------
//FUNCTIONS

function createSquare(){
    const square =  document.createElement("div");
    square.classList.add("square");
    square.style.backgroundColor = basicColor;
    square.style.height = `${100 / resolution}%`;
    square.style.flexBasis  = `${100 / resolution}%`;
    mainContainer.appendChild(square);
    log("Square created.");
}

function createGrid(){
    for(let i = 0; i < resolution*resolution; i++){
        createSquare();
    }
}

createGrid(); 