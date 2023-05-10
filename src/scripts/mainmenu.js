import { ComputerController } from "./computer_controller";
import { Controller } from "./controller";
import { GamePadController } from "./gamepad_controller";
import { Game } from "./game";
import { GameView } from "./game_view";

export class MainMenu {
    constructor(ctx, controller1ctx, controller2ctx) {
        this.ctx = ctx;
        this.controller1ctx = controller1ctx;
        this.controller2ctx = controller2ctx;
        this.gameStarted = false;
        // this.startGame();
        // this.loadFont();
        this.computerplayer1 = true;
        this.computerplayer2 = true;
        this.difficulty1 = 5;
        this.difficulty2 = 5;

        this.controller1 = new Controller(null, 1, this.controller1ctx);
        this.controller2 = new Controller(null, 2, this.controller2ctx);

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);

        this.addListeners();
        this.draw();
        // this.startGame();

    }

    addListeners() {
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("keyup", this.handleKeyUp);
    }

    removeListeners() {
        window.removeEventListener("keydown", this.handleKeyDown);
        window.removeEventListener("keyup", this.handleKeyUp);
    }

    draw(){
        // console.log('menu running')
        this.ctx.clearRect(0,0,1920,1080);
        this.ctx.fillStyle = "rgb(52,52,255)";
        this.ctx.textAlign = "center";
        this.ctx.font = "30px 'Press Start 2P'";
        let lineHeight = 30;

        this.ctx.fillText("Are you ready to fight?",
                    GameView.WIDTH/2, GameView.HEIGHT*0.25);

        this.ctx.font = "20px 'Press Start 2P'";

        let menuInfo = [
            "H: Join as Player 1",
            "K: Join as Player 2",
            "",
            "W/S: Computer 1 Difficulty Level",
            "Up/Down: Computer 2 Difficulty Level",
            "",
            "Press spacebar to start the game"
                ]

        for (let i = 0; i < menuInfo.length; i++) {
            this.ctx.fillText(menuInfo[i],
                    GameView.WIDTH*0.5, GameView.HEIGHT*0.45 + i*lineHeight);
        }

        // draw controllers
        this.controller1.draw();
        this.controller2.draw();

        // show if human or computer player
        let ctx = this.controller1ctx;
        ctx.fillStyle = "yellow";
        ctx.textAlign = "left";
        ctx.font = "24px 'Press Start 2P'";
        if (this.computerplayer1) {
            ctx.fillText(`Level ${this.difficulty1} Computer`, 225, 40);
        } else {
            ctx.fillText("Human Player 1", 225, 40);
        }

        ctx = this.controller2ctx;
        ctx.fillStyle = "yellow";
        ctx.textAlign = "right";
        ctx.font = "24px 'Press Start 2P'";
        if (this.computerplayer2) {
            ctx.fillText(`Level ${this.difficulty2} Computer`, 425, 40);
        } else {
            ctx.fillText("Human Player 2", 425, 40);
        }

        if (!this.gameStarted) {
            requestAnimationFrame(this.draw.bind(this));
        }
    }

    handleKeyDown(event) {
        let button = event.key;
        if (button === "h") {
            this.togglePlayer1();
        } else if (button === "k") {
            this.togglePlayer2();
        } else if (button === " ") {
            this.startGame();
        } else if (button === "w"){
            this.difficulty1 += 1;
            if (this.difficulty1 > 10) {this.difficulty1 = 10;}
        } else if (button === "s"){
            this.difficulty1 -= 1;
            if (this.difficulty1 < 1) {this.difficulty1 = 1;}
        } else if (button === "ArrowUp") {
            this.difficulty2 += 1;
            if (this.difficulty2 > 10) {this.difficulty2 = 10;}
        } else if (button === "ArrowDown") {
            this.difficulty2 -= 1;
            if (this.difficulty2 < 1) {this.difficulty2 = 1;}
        }
    }

    handleKeyUp(event) {
        // let button = event.key;
        // console.log("released: " + button)
    }

    restartMenu() {
        this.addListeners();
        this.controller1.removeListeners();
        this.controller2.removeListeners();
        this.controller1.addListeners();
        this.controller2.addListeners();
        this.gameStarted = false;
    }

    startGame() {
        this.removeListeners();
        this.gameStarted = true;

        let cont1, cont2;
        if (this.computerplayer1) {
            this.controller1.removeListeners();
            cont1 = new ComputerController(null, 1, this.controller1ctx,
                                                    null, this.difficulty1)
        } else {
            cont1 = this.controller1;
        }

        if (this.computerplayer2) {
            this.controller2.removeListeners();
            cont2 = new ComputerController(null, 2, this.controller2ctx,
                                                    null, this.difficulty2)
        } else {
            cont2 = this.controller2;
        }

        this.game = new Game(this.ctx, cont1, cont2);
        this.game.start();
    }

    togglePlayer1() {
        this.computerplayer1 = !this.computerplayer1;
    }

    togglePlayer2() {
        this.computerplayer2 = !this.computerplayer2;
    }

    addGamePad(gamepad) {
        if (this.controller1.gamepad === undefined) {
            console.log("player1 assigned controller")
            this.controller1.removeListeners();
            this.controller1 = new GamePadController(gamepad, this.controller1ctx);
        } else if (this.controller2.gamepad === undefined) {
            console.log("player2 assigned controller")
            this.controller2.removeListeners();
            this.controller2 = new GamePadController(gamepad, this.controller2ctx);
        }
    }
}
