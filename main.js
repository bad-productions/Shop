
function preload(){
    mainLogo=loadImage("BADPRODUCTIONSLOGO.png")
    contrastImg=loadImage("costume1.svg")
   preloadBanner()
}
function setup() {

  // Append the canvas to the container
  createCanvas(windowWidth, windowHeight);
  bannerstart(300)
  // Create a div with class "game"
  card1=new ShopItem("sigma-shop-test","game1.png","SUPER SMART DOGE","its about a smart dog","$0.00")
  card2=new ShopItem("none","game2.png","SIGMA SEAGULL","soooo much skibidi rizz, \n but like ...bird","$59.99")
    card1.button.id("card1-button")
    Itch.attachBuyButton(document.getElementById(card1.button.id()), {
    // replace the following with the correct information about your game
    user: "bad-productions-dev",
    game: card1.gameId
  });
  card2.gameDiv.position(350,120)
  card1.gameDiv.position(0,120)
}
function buyEvent(){
   
}
function drawBanner(){
        loadbanner()
    push()
    rect(0,0,width,100)
    image(bannerObj,00,0,width,100)
    image(contrastImg,0,0,500,105)
    image(mainLogo,width-110,0,100,100)
    fill(255)
    textSize(40)
    text("B.A.D",10,40)
    textSize(15)
    textSize(50)
    text("Store",10,80)
    pop()

}
function draw() {
  clear()
  background(255,0,0);
  drawBanner()
  // Your p5.js drawing code goes here
}

