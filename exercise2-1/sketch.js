let x = 100
let y = 100

function setup() {
    frameRate(30);
    createCanvas(600, 600)
    noStroke();
    

}
function draw() {
    background(255)
    fill(255, 0, 0)
    rect(x, y, 400)
}
function keyPressed() {
    if (key === 'a') {
        x -= 10 }
    else if (key === 'd') {
        x += 10
    }
    else if (key === 'w') {
        y -= 10
    }
    else if (key === 's') {
        y += 10
    }
}

