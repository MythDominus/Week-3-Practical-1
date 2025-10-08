let x = 100
let y = 100

function setup() {
    createCanvas(600, 600)
    frameRate(60);
    stroke(0);
}
function draw() {
    background(0)
    rectMode(CENTER)
    rect(x, y, 250, 150)
}
function mouseMoved() {
    set(x = mouseX)
    set(y = mouseY)
    fill(random(255), random(255), random(255))
}

