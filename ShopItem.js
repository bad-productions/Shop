let buttonIdClicked;
class ShopItem {
    drawCard(){

    }
    constructor(gameId,img,title,desc,price,mouseEvent) {
                  this.imgE=img;
                  this.gameId=gameId;
                  this.desc=desc;
                  this.title=title
                  this.itemPrice=price
                
          this.gameDiv = createDiv('');
          this.gameDiv.class('game');
          this.gameDiv.style('background-color', '#444');
          this.gameDiv.style('margin', '10px');
          this.gameDiv.style('border-radius', '10px');
          this.gameDiv.style('padding:0')
        this.gameDiv.style('margin:0')
        //  gameDiv.style('overflow', 'hidden');
          this.gameDiv.style('width', '300px');

          // Create an image element inside the "game" div
          this.img = createImg(this.imgE, this.title);
          this.img.parent(this.gameDiv);
          this.img.class('game-img');
          this.img.style('width', '100%');
          this.img.style('height', '200px');
          this.img.style('object-fit', 'cover');

          // Create a div with class "info" inside the "game" div
          this.infoDiv = createDiv('');
          this.infoDiv.class('info');
          this.infoDiv.parent(this.gameDiv);
          this.infoDiv.style('padding', '15px');

          // Create an h2 element with "Game 1 Title" inside the "info" div
          this.h2 = createElement('h2', this.title);
          this.h2.parent(this.infoDiv);
          this.h2.style('margin', '10px 0');

          // Create a p element with the game description inside the "info" div
          this.p = createP(this.desc);
          this.p.parent(this.infoDiv);
          this.p.style('margin-bottom', '15px');

          // Create a button element with "Buy Now" text inside the "info" div
          if (price=="$0.00"){
          this.button = createButton('FREE');
          }
          else{
              this.button=createButton("BUY-"+this.itemPrice)
          }
          this.button.parent(this.infoDiv);
          this.button.class('buy-btn');
          this.button.style('background-color', '#5cb85c');
          this.button.style('color', 'white');
          this.button.style('padding', '10px 20px');
          this.button.style('border', 'none');
          this.button.style('border-radius', '5px');
          this.button.style('cursor', 'pointer');
          buttonIdClicked=gameId;
//          this.button.mouseClicked(mouseEvent)
          this.gameDiv.position(0,0)


          
    }
}
