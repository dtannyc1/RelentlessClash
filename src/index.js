import { Game } from "./scripts/game";
import { GameView } from "./scripts/game_view";

// set background
let body = document.querySelector("body");
body.style.backgroundImage = "url('../assets/images/Backgrounds/asian_night.png')"

let arcadeMachine = document.querySelector("#arcade-machine");
arcadeMachine.style.backgroundImage = "url('../assets/images/ArcadeMachineTransparentV21080p.png')"

let canvas = document.querySelector("#main-canvas");
const ctx = canvas.getContext("2d");

canvas.width = GameView.WIDTH;
canvas.height = GameView.HEIGHT;
canvas.style.backgroundColor = "black";

window.game = new Game(ctx);
