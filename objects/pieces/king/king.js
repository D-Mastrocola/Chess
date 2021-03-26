class King {
  constructor(x, y, size, side) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.side = side;
    this.state = "alive";
    this.sprite = new Image(this.size, this.size);
    if (this.side === "w") {
      this.sprite.src = "./objects/pieces/king/whiteKing.png";
    } else {
      this.sprite.src = "./objects/pieces/king/blackKing.png";
    }
  }
  showMoves(ctx) {}
  update() {}
  draw(ctx) {
    if (this.state === "alive") {
      ctx.drawImage(this.sprite, this.x, this.y);
    }
  }
}
export default King;
