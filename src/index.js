import { Game } from "./scripts/game";
import { GameView } from "./scripts/game_view";
import { MainMenu } from "./scripts/mainmenu";

// set background
// let body = document.querySelector("body");
// body.style.backgroundImage = "url('../assets/images/Backgrounds/asian_night.png')"

// let arcadeMachine = document.querySelector("#arcade-machine");
// arcadeMachine.style.backgroundImage = "url('../assets/images/ArcadeMachineTransparentV21080p.png')"

let canvas = document.querySelector("#main-canvas");
const ctx = canvas.getContext("2d");

let controller1canvas = document.querySelector("#controller1")
controller1canvas.width = 663;
controller1canvas.height = 227;
const controller1ctx = controller1canvas.getContext("2d");

let controller2canvas = document.querySelector("#controller2")
controller2canvas.width = 663;
controller2canvas.height = 227;
const controller2ctx = controller2canvas.getContext("2d");

canvas.width = GameView.WIDTH;
canvas.height = GameView.HEIGHT;
canvas.style.backgroundColor = "black";

// window.game = new Game(ctx, controller1ctx, controller2ctx);

window.menu = new MainMenu(ctx, controller1ctx, controller2ctx);
