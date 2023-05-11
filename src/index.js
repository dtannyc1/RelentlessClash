import { GameView } from "./scripts/game_view";
import { MainMenu } from "./scripts/mainmenu";
// import * as Modal from "./scripts/modals";

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

let menu = new MainMenu(ctx, controller1ctx, controller2ctx);
window.menu = menu;

function controllerConnectListener(event) {
    menu.addGamePad(event.gamepad);
}

window.addEventListener("gamepadconnected", controllerConnectListener);
