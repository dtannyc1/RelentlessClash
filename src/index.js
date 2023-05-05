import {Game} from "./scripts/game";

let canvas = document.querySelector("#main-canvas");
const ctx = canvas.getContext("2d");

canvas.width = 960;
canvas.height = 720;
canvas.style.backgroundColor = "gray";


// let controller = new Controller(canvas);

// window.controller = controller;

let game = new Game(ctx);
