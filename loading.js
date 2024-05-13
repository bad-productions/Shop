  let alphaLayer=[0,0,0,255];
function setup() {
  // Set the canvas' width and height
  // using the browser's dimensions.
  createCanvas(windowWidth-16, windowHeight-16);
  width=windowWidth-16
  background(200);
  sizeMod=(width*height)/20000

}
function preload(){
    badlogo=loadImage("Favicon.png")
}
function getx(x){
    return width*(x/100)
}
function gety(y){
    return height*(y/100)
}
function draw(){
    sizeMod=(width*height)/20000
    resizeCanvas(windowWidth-16, windowHeight-16);
    background(0);
    imageMode(CENTER)
    image(badlogo,getx(50),gety(50))
    if (alphaLayer[3]>0){
        alphaLayer[3]=alphaLayer[3]-1
    }

    fill(alphaLayer)
    rect(0,0,width,height)
        textAlign(CENTER)
    fill(255)
    textSize(42)
    text("Loading..",getx(50),gety(70))
}