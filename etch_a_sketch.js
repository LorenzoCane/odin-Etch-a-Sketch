//Etch-a-Sketch Assignement (Odin Project)
//Lorenzo Cane

//----------------------------------------------
//CONST & VARIABLES
const log = console.log;

const resMin = 1;
const resMax = 100;

let basicColor = "white";
let resolution = 16;

let opacity = false;
let colorWrite = false;

//QUERIES
const mainContainer = document.querySelector(".mainContainer");
const resBtn = document.querySelector("#resBtn");
const clearBtn = document.querySelector("#clearBtn");

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
    };
}

function getColor(){
    if (!colorWrite){
        return "black";
    };

    return "green"
}

function drawHover(elem){
    if (elem.target.classList[0] == "square"){
        let choosenColor = getColor();
        elem.target.style.backgroundColor = choosenColor;
    };
}

function createNewGrid(){
    let newSize = Number(prompt("Let's begin something new! \nPlease select the dimension of the grid (1-100)"));
    //Check
    if (newSize < 1 || newSize > 100 || !Number.isInteger(newSize)){
        alert("Please input a valid integer number between 1 and 100.")
        return;
    }

    resolution = newSize; 

    //Clear
    mainContainer.replaceChildren();
    //Create new grid
    createGrid();

}
//----------------------------------------------
//ACTIONS

//New Grid button
resBtn.addEventListener("click", createNewGrid);
//Clear button
clearBtn.addEventListener("click", () =>{
    mainContainer.replaceChildren();
    createGrid();
});

//Draw
mainContainer.addEventListener("mouseover", drawHover);


createGrid(); 