import { Controller } from "./controller";
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

        this.controller1 = new Controller(this, 1, this.controller1ctx);
        this.controller2 = new Controller(this, 2, this.controller2ctx);

        // this.draw();
        this.startGame();
    }

    draw(){
        // console.log('menu running')
        this.ctx.clearRect(0,0,1920,1080);
        this.ctx.fillStyle = "yellow";
        this.ctx.textAlign = "center";
        this.ctx.font = "20px 'Press Start 2P'";

        this.ctx.fillText("Press H/K to join the game",
                    GameView.WIDTH*0.5, GameView.HEIGHT*0.5);

        // draw controllers
        this.controller1.draw();
        // this.controller2.draw();

        // show if human or computer player
        let ctx = this.controller1ctx;
        ctx.fillStyle = "yellow";
        ctx.textAlign = "center";
        ctx.font = "20px 'Press Start 2P'";
        if (this.computerplayer1) {
            ctx.fillText("Computer Player 1", 375, 50);
        } else {
            ctx.fillText("Human Player 1", 375, 50);
        }

        ctx = this.controller2ctx;
        ctx.fillStyle = "yellow";
        ctx.textAlign = "center";
        ctx.font = "20px 'Press Start 2P'";
        if (this.computerplayer2) {
            ctx.fillText("Computer Player 2", 375, 50);
        } else {
            ctx.fillText("Human Player 2", 375, 50);
        }

        if (!this.gameStarted) {
            requestAnimationFrame(this.draw.bind(this));
        }
    }

    handleButtonPress(button) {
        if (button === "h") {
            this.togglePlayer1();
        } if (button === "k") {
            this.togglePlayer2();
        } else {
            console.log("pressed: " + button)
        }
    }

    handleButtonRelease(button) {
        console.log("released: " + button)
    }

    startGame() {
        this.gameStarted = true;
        this.game = new Game(this.ctx, this.controller1, this.controller2);
        this.game.start();
    }

    togglePlayer1() {
        this.computerplayer1 = !this.computerplayer1;
    }

    togglePlayer2() {
        this.computerplayer2 = !this.computerplayer2;
    }
}
