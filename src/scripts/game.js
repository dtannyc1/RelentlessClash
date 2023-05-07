import { Controller } from "./controller.js";
import { GameView } from "./game_view.js";
import { Player } from "./player.js";

export class Game {
    static FLOOR = 175;
    static PLAYER1_STARTX = -240;
    static PLAYER2_STARTX = 240;

    constructor(ctx) {
        this.gameView = new GameView(ctx);

        this.player1 = new Player([Game.PLAYER1_STARTX, Game.FLOOR*0.75], "player1");
        this.controller1 = new Controller(this.player1, 1);
        this.player1.assignController(this.controller1);

        this.player2 = new Player([Game.PLAYER2_STARTX, Game.FLOOR*0.75], "player2");
        this.controller2 = new Controller(this.player2, 2);
        this.player2.assignController(this.controller2);

        this.objects = [this.player1, this.player2];
        this.runGame();
    }

    runGame() {
        this.gameView.draw(this.objects);
        this.handleCollisions();
        requestAnimationFrame(this.runGame.bind(this))
    }

    handleCollisions() {
        this.handleHit();
        this.handlePush();
    }

    handlePush(){
        for (let i = 0; i < this.objects.length; i++) {
            let hurtboxes1 = this.objects[i].getHurtBoxes(GameView.MAIN_SCALE);

            for (let j = i+1; j < this.objects.length; j++) {
                let hurtboxes2 = this.objects[j].getHurtBoxes(GameView.MAIN_SCALE);

                let collide = false;
                let collisionData = [];
                for (let k = 0; k < hurtboxes1.length; k++){
                    for (let m = 0; m < hurtboxes2.length; m++) {
                        let box1 = hurtboxes1[k].slice();
                        let box2 = hurtboxes2[m].slice();
                        collide = this.overlappingBoxes(box1, box2);
                        if (collide) {
                            collisionData.push(box1);
                            collisionData.push(box2);
                            break;
                        }
                    }
                    if (collide) { break; }
                }

                if (collide) {
                    let box1 = collisionData[0];
                    let box2 = collisionData[1];
                    let object1 = this.objects[i];
                    let object2 = this.objects[j];
                    if (box1[0] < box2[0]) {
                        let dx = ((box1[0] + box1[3]) - box2[0])/2;
                        object1.pos[0] -= dx;
                        object2.pos[0] += dx;
                    } else {
                        let dx = ((box2[0] + box2[3]) - box1[0])/2;
                        object2.pos[0] -= dx;
                        object1.pos[0] += dx;
                    }
                }
            }
        }
    }

    handleHit(){

    }

    overlappingBoxes(box1, box2) {
        let x1m, y1m, x1M, y1M;
        let x2m, y2m, x2M, y2M;
        [x1m, y1m, x1M, y1M] = [box1[0], box1[1],
                                box1[0] + box1[2], box1[1] + box1[3]];
        [x2m, y2m, x2M, y2M] = [box2[0], box2[1],
                                box2[0] + box2[2], box2[1] + box2[3]];

        if (x2m >= x1M || x1m >= x2M) {
            return false;
        } else if (y2m >= y1M || y1m >= y2M) {
            return false;
        } else {
            return true;
        }
    }
}
