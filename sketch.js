let textField;
let button;
let backgroundImage;
let startTime;
let joyce;
let g;
let i;
let r;
let l;
let s;
let c;
let o;
let d;
let e;


const song = ['a', 'a', 'g', 'g', 'f', 'F', 'f', 'B', 'a','c', 'a', 'a', 'g', 'g', 'f', 'F', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'B', 'a', 'g', 'f', 'g', 'a', 'd', 'c', 'B', 'a', 'g', 'f', 'g', 'a', 'd', 'c', 'c', 'B', 'B', 'a', 'a', 'g', 'a', 'g', 'g', 'f', 'F', 'f'];
let arrayIndex = 0;

var host = '127.0.0.1:8080'; // address of the websockets server
var socket; // the websocket connection

function preload() {
    // wallpaper = loadImage('assets/wallpaper.jpg');
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
    

    joyce = createImg('assets/joyce.png');
    joyce.position(100,100);
    

    if (millis() > 4000 && millis() < 6000) {
        if (!g) {
            g = createImg('assets/G.png');
            g.position(895, 138);
            g.style('display', 'block'); // Make the image visible
        }
    } else {
        if (g) {
            g.style('display', 'none'); // Hide the image
            g = null; // Clear the reference
        }
    }

 
    if (millis() > 6000 && millis() < 8000) {
        if (!i) {
            i = createImg('assets/i.png');
            i.position(237,388);
            i.style('display', 'block'); // Make the image visible
        }
    } else {
        if (i) {
            i.style('display', 'none'); // Hide the image
            i = null; // Clear the reference
        }
    }


    if (millis() > 8000 && millis() < 10000) {
        if (!r) {
            r = createImg('assets/R.png');
            r.position(178,649);
            r.style('display', 'block'); // Make the image visible
        }
    } else {
        if (r) {
            r.style('display', 'none'); // Hide the image
            r = null; // Clear the reference
        }
    }

    
    if (millis() > 10000 && millis() < 12000) {
        if (!l) {
            l = createImg('assets/L.png');
            l.position(467,393);
            l.style('display', 'block'); // Make the image visible
        }
    } else {
        if (l) {
            l.style('display', 'none'); // Hide the image
            l = null; // Clear the reference
        }
    }

    
    if (millis() > 12000 && millis() < 14000) {
        if (!s) {
            s = createImg('assets/S.png');
            s.position(308,664);
            s.style('display', 'block'); // Make the image visible
        }
    } else {
        if (s) {
            s.style('display', 'none'); // Hide the image
            s = null; // Clear the reference
        }
    }
    
    if (millis() > 14000 && millis() < 16000) {
        if (!c) {
            c = createImg('assets/C.png');
            c.position(503, 118);
            c.style('display', 'block'); // Make the image visible
        }
    } else {
        if (c) {
            c.style('display', 'none'); // Hide the image
            c = null; // Clear the reference
        }
    }
    

    if (millis() > 16000 && millis() < 18000) {
        if (!o) {
            o = createImg('assets/O.png');
            o.position(815, 402);
            o.style('display', 'block'); // Make the image visible
        }
    } else {
        if (o) {
            o.style('display', 'none'); // Hide the image
            o = null; // Clear the reference
        }
    }


    if (millis() > 18000 && millis() < 20000) {
        if (!d) {
            d = createImg('assets/D.png');
            d.position(613, 130);
            d.style('display', 'block'); // Make the image visible
        }
    } else {
        if (d) {
            d.style('display', 'none'); // Hide the image
            d = null; // Clear the reference
        }
    }


    if (millis() > 20000 && millis() < 22000) {
        if (!e) {
            e = createImg('assets/E.png');
            e.position(717, 122);
            e.style('display', 'block'); // Make the image visible
        }
    } else {
        if (e) {
            e.style('display', 'none'); // Hide the image
            e = null; // Clear the reference
        }
    }

    
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