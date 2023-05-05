import { Controller } from "./controller.js";
import { GameView } from "./game_view.js";
import { Player } from "./player.js";

export class Game {
    constructor(ctx) {
        console.log("Game Made")
        this.ctx = ctx;
        this.gameView = new GameView(this.ctx);
        this.player1 = new Player([545,500], "player1");
        this.controller1 = new Controller(this.player1, 1);
        // this.player2 = new Player([400,200]);

        let objects = [this.player1]
        this.gameView.draw(objects);
        // setInterval(() => this.gameView.draw(objects), 50);
    }
}
