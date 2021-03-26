class Bishop {
  constructor(x, y, size, side) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.side = side;
    this.state = "alive";
    this.sprite = new Image(this.size, this.size);
    if (this.side === "w") {
      this.sprite.src = "./objects/pieces/bishop/whiteBishop.png";
    } else {
      this.sprite.src = "./objects/pieces/bishop/blackBishop.png";
    }
  }
  showMoves(ctx) {
    this.moveList = {
      topLeftToBottomRight: [],
      bottomLeftToTopRight: []
    }
    for(let i = -7; i <= 7; i++) {
      if(i !== 0) {
        this.moveList.topLeftToBottomRight.push([this.x + this.size * i, this.y + this.size * i])
        this.moveList.bottomLeftToTopRight.push([this.x + this.size * i, this.y - this.size * i])
      }
    }
    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.fillStyle = "rgba(50, 50, 50, 0.7)";
    this.moveList.topLeftToBottomRight.forEach((e) => {
      ctx.fillRect(e[0], e[1], this.size, this.size);
    });
    this.moveList.bottomLeftToTopRight.forEach((e) => {
      ctx.fillRect(e[0], e[1], this.size, this.size);
    })
  }
  update() {}
  draw(ctx) {
    if (this.state === "alive") {
      ctx.drawImage(this.sprite, this.x, this.y, this.size, this.size);
    }
  }
}
export default Bishop;
