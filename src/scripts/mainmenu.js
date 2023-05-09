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

        if (!this.gameStarted) {
            requestAnimationFrame(this.draw.bind(this));
        }
    }

    startGame() {
        this.gameStarted = true;
        this.game = new Game(this.ctx, this.controller1ctx, this.controller2ctx);
        this.game.start();
    }

    // async loadFont() {
    //     const font = new FontFace("ps2p", "url(https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap)");
    //     await font.load();
    //     document.fonts.add(font);
    //     document.body.classList.add("fonts-loaded");
    // }
}
