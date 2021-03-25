class Rook {
  constructor(x, y, size, side) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.side = side;
    this.state = "alive";
    this.sprite = new Image(this.size, this.size);
    if (this.side === "w") {
      this.sprite.src = "./objects/pieces/rook/whiteRook.png";
    } else {
      this.sprite.src = "./objects/pieces/rook/blackRook.png";
    }
  }
  showMoves(ctx) {
    this.moveList = {
      vertical: [],
      horizontal: []
    }
    for(let i = -7 ; i <= 7; i++) {
      if(i === 0) continue;
      this.moveList.vertical.push([this.x, this.y + i * this.size])
      this.moveList.horizontal.push([this.x + i * this.size, this.y])
    }
    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.fillStyle = "rgba(50, 50, 50, 0.7)";
    this.moveList.vertical.forEach((e) => {
      ctx.fillRect(e[0], e[1], this.size, this.size);
    })
    this.moveList.horizontal.forEach((e) => {
      ctx.fillRect(e[0], e[1], this.size, this.size);
    })
  }
  update() {}
  draw(ctx) {
    if (this.state === "alive") {
      ctx.drawImage(this.sprite, this.x, this.y);
    }
  }
}
export default Rook;
