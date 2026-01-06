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
const colorBtn =  document.querySelector("#colorBtn");
const opacityBtn = document.querySelector("#opacityBtn");

//----------------------------------------------
//FUNCTIONS

//Create a sigle square. Dimension based on global canvas dimension
function createSquare(){
    const square =  document.createElement("div");
    square.classList.add("square");
    square.style.backgroundColor = basicColor;
    square.style.height = `${100 / resolution}%`;
    square.style.flexBasis  = `${100 / resolution}%`;
    mainContainer.appendChild(square);
    log("Square created.");
}

//Full grid
function createGrid(){
    //Default settings
    colorWrite = false;
    opacity = false;
    for(let i = 0; i < resolution*resolution; i++){
        createSquare();
    };
}

//Black as default. Color are selected random. 
function getColor(){
    let finalColor = "black";
    if (colorWrite){
        //random color
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        
        finalColor = `rgb(${red}, ${green}, ${blue})`;
    }

    return finalColor;
}

//Sketch creaation by hovering. With opacity square became darker by hovering
function drawHover(elem){
    let target = elem.target;

    if (target.classList.contains("square")){
        let choosenColor = getColor();
        
        target.style.backgroundColor = choosenColor;

        if (opacity){
            //current opacity or 0    
            let elemOpacity = parseFloat(target.style.opacity) || 0.0;
            target.style.opacity = Math.min(elemOpacity + 0.1, 1.0); //opacity mx = 1.0
        };    
        
        };
}

//Create new grid asking for dimensions. Reset to deafalt settings
function createNewGrid(){
    //Default settings
    colorWrite = false;
    opacity = false;
    colorBtn.style.backgroundColor = "beige";
    opacityBtn.style.backgroundColor = "beige";
    //new dimension
    let newSize = Number(prompt("Let's begin something new! \nPlease select the dimension of the grid (1-100)"));
    //Check
    if (newSize < resMin || newSize > resMax || !Number.isInteger(newSize)){
        alert("Please input a valid integer number between 1 and 100.")
        return;
    }
    //Change resolution
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
    colorBtn.style.backgroundColor = "beige";
    opacityBtn.style.backgroundColor = "beige";
    createGrid();
});

//Draw
mainContainer.addEventListener("mouseover", drawHover);

//Color button
colorBtn.addEventListener("click", () =>{
    colorWrite = !colorWrite;
    if (colorWrite){
       colorBtn.style.backgroundColor = "#C90404";
    }else{
        colorBtn.style.backgroundColor = "beige";
    }
});

//Opacity button
opacityBtn.addEventListener("click", () =>{
    opacity = !opacity;
    if (opacity){
        opacityBtn.style.backgroundColor = "#C90404";
    }else{
        opacityBtn.style.backgroundColor = "beige";
    }
});

//----------------------------------------------
createGrid(); 