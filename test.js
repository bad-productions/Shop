let images;
let enemies = [];

function preload(){
  // load images and store them in an array
  images = [
 loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAPFBMVEX///8AAADf399fX19/f38/Pz+/v78fHx+fn58XFxeHh4cPDw+np6fX19fHx8evr6+3t7dvb2/39/dPT08jn1NmAAAA+UlEQVR4nO3ZSRKCMBBAUQnzPHj/u7qwOwtS0QhBwfpviaH9bDTG2w0AAAAAgNNLE2HC7zF6T0oAAQT8Q0CTC1M8Df61gywxek8TIcAq5anKXUsIIICACwaMmWhlept5OUvGCAH2o3iLqN8FBBBAwJcDJt3U1Dqsk+1O538/Z0mtU6aPAypnuu4JjfNKwJKKAAIIuEzAi+lxvPuFSQABBJwnoHY2JFu4U4ID7GYqzpYs+KiLAAIIOHPA7D+aWZsPCdh1Wk4AAQRcJ2CRQ5ai1yu9XrnnK/YfqWb9SuqfsoQ/xpoehSf+x1PHHtcTQAABPwsAAAAAAOAYD7+UFrmL/czUAAAAAElFTkSuQmCC"),  loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAclBMVEX///8AAAAMDAwUFBRtbW20tLTKysrr6+s0NDSMjIzo6OgrKytzc3Py8vJKSkolJSWSkpIODg5jY2OlpaW7u7ubm5urq6tEREQaGhr29vZRUVHg4ODDw8Pc3Nw/Pz9VVVWAgIDU1NQ3NzdcXFx6enovLy+wzkUiAAACjElEQVR4nO2a63qCMAxAlU5QEEEUuSMivP8rjptS2iid0qmfOT/XfM0BHGlLZjMEQRAE+ShMXQBTXn79aAgQ6tIE4u1cgG0sTWAvJrBHARRAART4bIFEvUm8Fsk/nxe3p1BH60RskJsIXX+FcnsKkp5GBAQv8nGyEQFHtoCDAiiAAihwP38gXyAAE592LbYhW6B0u1QJnX9nKS2y09d0mTIqv5n+R2KGH0pAW6IACqAACqDAewtYGwaPQGHEY+OsaQRK1WTJoLiMC1PLSQToyI4FULeVBR/3M4nA+nGBeztNFEABFEABcQFgM7WDBHZc2N2NnrgAcVYMWQ7F5Rkb54BF688CkkABFEABFEABWsDcvEBgUGRjm8YdAthtHTbItR2gQp7Z8kQh3mWw4if2ND5M83jPaVoZAIEN0CcCPEciTSCFBPg7IFEAeATAcas8gRz6DfDLJKLKEli+WqAEPgEDbzN5AgYgoPOnEfIELEiA/9YhT8CHBPgTIYkC0TsK+FzYdh8EgWma2lMNdsH5OqHihS1r6E1YhOGxxuurUn4+hhsvTcOxtgUItVg3OH3jRB4FLZrbDfbYwawb1IHy6T4gYPPTeJcL3/Obvv4fg7plV+yJBYDt+TsJHL9eIESBFwtAi/wvE+BXp1MJXFfjQF8fJXD2LYYSOEMcoB449JXCYl3f6JpD2EFqoaxHbLu51hRFU6tp/xIldEGtnho7HzmcFixU00WgsoP3692iKopVVczzZVka1S3xfVJQw8B6Ejj3fAbg49HI9hwFUAAFUOB/BYDDDeUwqUDBCwyO6dzSal7QPcY027oL6pJQk9fJjOEVdjVKjxqSJAE2f0+h13M2XCok3NiIIMgX8guBhVuAILp8rwAAAABJRU5ErkJggg=="),
     ];
}

function setup(){
  createCanvas(600, 600);
  imageMode(CENTER);
}

function draw(){
  background(255);
  // update + draw enemies
  for(let i = 0; i < enemies.length; i++){
    enemies[i].update();
  }
  text("click to spawn", 10, 15);
}

function mousePressed(){
  // pick a random image
  let randomImage = images[int(random(images.length))];
  // make a new enemy
  enemies.push(new Enemy(randomImage, mouseX, mouseY));
}

class Enemy {
  constructor(skin, x, y) {
    this.skin = skin;
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1,1), random(-1,1));
  }
  update(){
    // add velocity
    this.position.add(this.velocity);
    // check borders and flip direction (roughly)
    if(this.position.x < 0 || this.position.x > width ||
       this.position.y < 0 || this.position.y > height){
       this.velocity.mult(-1);
    }
    // render
    push();
    blendMode(MULTIPLY);
    image(this.skin, this.position.x, this.position.y);
    pop();
  }
}