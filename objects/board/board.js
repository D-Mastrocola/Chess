import Pawn from "../pieces/pawn/pawn.js";
import Rook from "../pieces/rook/rook.js";
import Knight from "../pieces/knight/knight.js";
import Bishop from "../pieces/bishop/bishop.js";
import Queen from "../pieces/queen/queen.js";
import King from "../pieces/king/king.js";

class Board {
  constructor(whiteSquare, blackSquare, tileSize) {
    this.turn = "w";
    this.whiteSquare = whiteSquare;
    this.blackSquare = blackSquare;
    this.tileSize = tileSize;
    this.selected = '--';
    this.boardString = [
      ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"],

      ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],

      ["--", "--", "--", "--", "--", "--", "--", "--"],

      ["--", "--", "--", "--", "--", "--", "--", "--"],

      ["--", "--", "--", "--", "--", "--", "--", "--"],

      ["--", "--", "--", "--", "--", "--", "--", "--"],

      ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],

      ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"],
    ];
    this.boardArray = [[], [], [], [], [], [], [], []];
    this.init();
  }
  init() {
    for (let i = 0; i < this.boardString.length; i++) {
      for (let j = 0; j < this.boardString[i].length; j++) {
        let piece = "--";
        if (this.boardString[i][j] === "wP") {
          piece = new Pawn(
            j * this.tileSize,
            i * this.tileSize,
            this.tileSize,
            "w"
          );
        } else if (this.boardString[i][j] === "bP") {
          piece = new Pawn(
            j * this.tileSize,
            i * this.tileSize,
            this.tileSize,
            "b"
          );
        } else if (this.boardString[i][j] === "wR") {
          piece = new Rook(
            j * this.tileSize,
            i * this.tileSize,
            this.tileSize,
            "w"
          );
        } else if (this.boardString[i][j] === "bR") {
          piece = new Rook(
            j * this.tileSize,
            i * this.tileSize,
            this.tileSize,
            "b"
          );
        } else if (this.boardString[i][j] === "wN") {
          piece = new Knight(
            j * this.tileSize,
            i * this.tileSize,
            this.tileSize,
            "w"
          );
        } else if (this.boardString[i][j] === "bN") {
          piece = new Knight(
            j * this.tileSize,
            i * this.tileSize,
            this.tileSize,
            "b"
          );
        } else if (this.boardString[i][j] === "wB") {
          piece = new Bishop(
            j * this.tileSize,
            i * this.tileSize,
            this.tileSize,
            "w"
          );
        } else if (this.boardString[i][j] === "bB") {
          piece = new Bishop(
            j * this.tileSize,
            i * this.tileSize,
            this.tileSize,
            "b"
          );
        } else if (this.boardString[i][j] === "wQ") {
          piece = new Queen(
            j * this.tileSize,
            i * this.tileSize,
            this.tileSize,
            "w"
          );
        } else if (this.boardString[i][j] === "bQ") {
          piece = new Queen(
            j * this.tileSize,
            i * this.tileSize,
            this.tileSize,
            "b"
          );
        } else if (this.boardString[i][j] === "wK") {
          piece = new King(
            j * this.tileSize,
            i * this.tileSize,
            this.ileSize,
            "w"
          );
        } else if (this.boardString[i][j] === "bK") {
          piece = new King(
            j * this.tileSize,
            i * this.tileSize,
            this.tileSize,
            "b"
          );
        }
        this.boardArray[i].push(piece);
      }
    }
  }
  update() {
    for (let i = 0; i < this.boardArray.length; i++) {
      for (let j = 0; j < this.boardArray[i].length; j++) {
        if (this.boardArray[i][j] !== "--") {
          this.boardArray[i][j].update();
        }
      }
    }
  }
  draw(ctx) {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if ((j + i) % 2 === 0) {
          ctx.fillStyle = this.whiteSquare;
        } else {
          ctx.fillStyle = this.blackSquare;
        }
        ctx.fillRect(
          j * this.tileSize,
          i * this.tileSize,
          this.tileSize,
          this.tileSize
        );
      }
    }

    for (let i = 0; i < this.boardArray.length; i++) {
      for (let j = 0; j < this.boardArray[i].length; j++) {
        if (this.boardArray[i][j] !== "--") {
          this.boardArray[i][j].draw(ctx);
        }
      }
    }
    if(this.selected !== '--') this.selected.showMoves(ctx);
  }
}
export default Board;
