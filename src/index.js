import { Game } from "./scripts/game";
import { GameView } from "./scripts/game_view";

let canvas = document.querySelector("#main-canvas");
const ctx = canvas.getContext("2d");

canvas.width = GameView.WIDTH;
canvas.height = GameView.HEIGHT;
canvas.style.backgroundColor = "black";

window.game = new Game(ctx);
