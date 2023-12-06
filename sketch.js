let textField;
let button;
let backgroundImage;

const song = ['G', 'g'];
let arrayIndex = 0;

var host = '127.0.0.1:8080'; // address of the websockets server
var socket; // the websocket connection

function preload() {
    backgroundImage = loadImage('assets/Strangerthings.png');
}


function setup() {
    createCanvas(windowWidth, windowHeight); 


   keyPressed(playNote);

    // connect to server...
    socket = new WebSocket('ws://' + host);
    socket.onopen = openHandler;
}

function draw() {
    background(255); 
    imageMode(CORNER);
    image(backgroundImage, 0, 0, width, height); 
}

function playNote() {
    let note = "note:03" + song[arrayIndex] + "ff";

    // send the note to the websocket server
    // (if the socket is open and ready)
    if (socket.readyState == 1) {
        socket.send(note);
        console.log("Sent: " + note);
    } else {
        console.log("Socket not ready.");
    }
}

function keyReleased(){
    playNote();
    arrayIndex++;
    if(arrayIndex > song.length-1) arrayIndex = 0;
}

function openHandler() {
    console.log("Connected to socket server at " + host);
  }

  function keyPressed() {
    if (key === 'A' || key === 'a') {
        playNote();
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}