import {Game} from "./scripts/game";
import { GameView } from "./scripts/game_view";

let canvas = document.querySelector("#main-canvas");
const ctx = canvas.getContext("2d");

canvas.width = GameView.WIDTH;
canvas.height = GameView.HEIGHT;
canvas.style.backgroundColor = "gray";


// let controller = new Controller(canvas);

// window.controller = controller;

let game = new Game(ctx);
