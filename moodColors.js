const solidsBtn = document.getElementById("solids");
const gradientsBtn = document.getElementById("gradients");
const startBtn = document.getElementById("start");
const homeBtn = document.getElementById("home");
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const body = document.querySelector("body");

const solidColors = ["red", "pink", "lightsalmon", "orange", "orangered", 
                    "gold", "green", "lightgreen", "seagreen", 
                    "aquamarine", "teal", "blue", "dodgerblue", 
                    "purple", "violet", "blueviolet", "chocolate", 
                    "tan", "brown", "maroon", "crimson", "burlywood"];

let color = -1;
homeBtn.style.display = "none";
previousBtn.style.display = "none";
nextBtn.style.display = "none";

function home() {
    color = -1;
    startBtn.style.display = "block";
    homeBtn.style.display = "none";
    previousBtn.style.display = "none";
    nextBtn.style.display = "none";
    
    body.style.background = "black";
    body.style.transitionProperty = "background";
    body.style.transitionDuration = "1s";
    body.style.transitionTimingFunction = "ease-out";
}


function showNext() {
    if (color == 0) {
        startBtn.style.display = "none";
        homeBtn.style.display = "block";
        nextBtn.style.display = "block";
    } else if (color < 0) {
        startBtn.style.display = "block";
        homeBtn.style.display = "none";
        nextBtn.style.display = "none";
    }
}

function start() {
    color++;
    body.style.background = `${solidColors[color]}`;
    body.style.transitionProperty = "background";
    body.style.transitionDuration = "1s";
    body.style.transitionTimingFunction = "ease-out";
    showNext();
}

function showPrevious() {
    if (color == 0) {
        previousBtn.style.display = "none";
    } else if (color > 0) {
        previousBtn.style.display = "block";
    }
}

function nextSolid() {
    color++;
    body.style.background = `${solidColors[color]}`;
    body.style.transitionProperty = "background";
    body.style.transitionDuration = "1s";
    body.style.transitionTimingFunction = "ease-out";
    showPrevious();

    if (color == solidColors.length - 1) {
        color = -1;
    }
}

function previousSolid() {
    color -= 1;
    body.style.background = `${solidColors[color]}`;
    body.style.transitionProperty = "background";
    body.style.transitionDuration = "1s";
    body.style.transitionTimingFunction = "ease-out";
    showPrevious();

    if (color == solidColors.length - 1) {
        color = -1;
    }
}


homeBtn.addEventListener("click", home);
startBtn.addEventListener("click", start);
nextBtn.addEventListener("click", nextSolid);
previousBtn.addEventListener("click", previousSolid);
