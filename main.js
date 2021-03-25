import Board from "./objects/board/board.js";

let canvas;
let ctx;
let tileSize;
let side;
let board;
let whiteStartBoard;
let pieces;

let init = () => {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  tileSize = 50;
  canvas.width = tileSize * 8;
  canvas.height = tileSize * 8;
  side = "white";

  board = new Board("#eeffcc", "#292", tileSize);

  whiteStartBoard = [
    ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"],
    ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
    ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
    ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
    ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
    ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
    ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wPs"],
    ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"],
  ];
  window.requestAnimationFrame(gameLoop);
};

//---------------------------------
let secondsPassed;
let oldTimeStamp;
let fps;

function gameLoop(timeStamp) {
  // Calculate the number of seconds passed since the last frame
  secondsPassed = (timeStamp - oldTimeStamp) / 1000;
  oldTimeStamp = timeStamp;

  // Calculate fps
  fps = Math.round(1 / secondsPassed);
  // Draw number to the screen

  // Perform the drawing operation
  update(timeStamp);

  // The loop function has reached it's end. Keep requesting new frames
  window.requestAnimationFrame(gameLoop);
}

let update = () => {
  board.update();
  draw(ctx);
};
let draw = () => {
  board.draw(ctx);
};
init();
