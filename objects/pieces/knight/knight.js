class Knight {
  constructor(x, y, size, side) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.side = side;
    this.state = "alive";
    this.sprite = new Image(this.size, this.size);
    if (this.side === "w") {
      this.sprite.src = "./objects/pieces/knight/whiteKnight.png";
    } else {
      this.sprite.src = "./objects/pieces/knight/blackKnight.png";
    }
  }
  showMoves(ctx) {
    this.moveList = {
      upLeft: [this.x - this.size, this.y - this.size*2],
      upRight: [this.x + this.size, this.y - this.size*2],
      rightUp: [this.x + this.size*2, this.y - this.size],
      rightDown: [this.x + this.size*2, this.y + this.size],
      downLeft: [this.x - this.size, this.y + this.size*2],
      downRight: [this.x + this.size, this.y + this.size*2],
      leftUp: [this.x - this.size*2, this.y - this.size],
      leftDown: [this.x - this.size*2, this.y + this.size],
    };
    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.fillStyle = "rgba(50, 50, 50, 0.7)";

    /*
      Draw the moves
    */
    //Up Left
    ctx.fillRect(this.moveList.upLeft[0], this.moveList.upLeft[1], this.size, this.size);
    //Up Right
    ctx.fillRect(this.moveList.upRight[0], this.moveList.upRight[1], this.size, this.size);
    //Right Up
    ctx.fillRect(this.moveList.rightUp[0], this.moveList.rightUp[1], this.size, this.size);
    //Right Down
    ctx.fillRect(this.moveList.rightDown[0], this.moveList.rightDown[1], this.size, this.size);
    //Down Left
    ctx.fillRect(this.moveList.downLeft[0], this.moveList.downLeft[1], this.size, this.size);
    //Down Right
    ctx.fillRect(this.moveList.downRight[0], this.moveList.downRight[1], this.size, this.size);
    //Left Up
    ctx.fillRect(this.moveList.leftUp[0], this.moveList.leftUp[1], this.size, this.size);
    //Left Down
    ctx.fillRect(this.moveList.leftDown[0], this.moveList.leftDown[1], this.size, this.size);
  }
  update() {}
  draw(ctx) {
    if (this.state === "alive") {
      ctx.drawImage(this.sprite, this.x, this.y);
    }
  }
}
export default Knight;
