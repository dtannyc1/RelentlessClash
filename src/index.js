import {Game} from "./scripts/game";

let canvas = document.querySelector("#main-canvas");
const ctx = canvas.getContext("2d");

canvas.height = 500;
canvas.width = 500;
canvas.style.backgroundColor = "black";


// let controller = new Controller(canvas);

// window.controller = controller;

let game = new Game(ctx);
