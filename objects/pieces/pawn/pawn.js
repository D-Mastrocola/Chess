class Pawn {
  constructor(x, y, size, side, selected = false) {
    this.x = x;
    this.y = y;
    this.firstMove = true;
    this.selected = selected;
    this.size = size;
    this.side = side;
    this.state = "alive";
    this.sprite = new Image(this.size, this.size);
    if (this.side === "w") {
      this.sprite.src = "./objects/pieces/pawn/whitePawn.png";
    } else {
      this.sprite.src = "./objects/pieces/pawn/blackPawn.png";
    }

    this.moveList = {
        takes: {
            takeLeft: [-this.size, -this.size],
            takeRight: [this.size, -this.size],
        },
        moves: {
            forward: [0, -this.size],
            forwardTwo: [0, -this.size * 2],
        }
    }
  }
  showMoves(ctx) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(this.x + this.moveList.moves.forward[0], this.y + this.moveList.moves.forward[1], this.size, this.size);

    if(this.firstMove) ctx.fillRect(this.x + this.moveList.moves.forwardTwo[0], this.y + this.moveList.moves.forwardTwo[1], this.size, this.size);
    
  }
  update() {}
  draw(ctx) {
    if (this.state === "alive") {
      ctx.drawImage(this.sprite, this.x, this.y);
    }
    if(this.selected) {
        this.showMoves(ctx);
    }
  }
}
export default Pawn;
