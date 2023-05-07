import { Controller } from "./controller.js";
import { GameView } from "./game_view.js";
import { Player } from "./player.js";

export class Game {
    static FLOOR = 250;
    static PLAYER1_STARTX = -240;
    static PLAYER2_STARTX = 240;

    constructor(ctx) {
        // this.ctx = ctx;

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

    // handlePush(){
    //     for (let i = 0; i < this.objects.length; i++) {
    //         for (let j = i+1; j < this.objects.length; j++) {

    //             let obj1Boxes = this.objects[i].character.hurtboxes;
    //             let pos1 = this.objects[i].pos;
    //             let xFacing1 = this.objects[i].xFacing;
    //             let scale1 = this.objects[i].scale;
    //             let frameWidth1 = this.objects[i].character.frameWidth;

    //             let obj2Boxes = this.objects[j].character.hurtboxes;
    //             let pos2 = this.objects[j].pos;
    //             let xFacing2 = this.objects[j].xFacing;
    //             let scale2 = this.objects[j].scale;
    //             let frameWidth2 = this.objects[j].character.frameWidth;

    //             let collide = false;
    //             for (let k = 0; k < obj1Boxes.length; k++){
    //                 let box1 = obj1Boxes[k].slice();

    //                 if (xFacing1 === 1) {
    //                     box1[0] = pos1[0] - frameWidth1*scale1/2 + box1[0]*scale1;
    //                 } else {
    //                     box1[0] = pos1[0] + frameWidth1*scale1/2 - box1[0]*scale1 - box1[2]*scale1;
    //                 }
    //                 box1[1] = pos1[1] + box1[1]*scale1;
    //                 box1[2] *= scale1;
    //                 box1[3] *= scale1;

    //                 box1[0] *= GameView.MAIN_SCALE;
    //                 box1[1] *= GameView.MAIN_SCALE;
    //                 box1[2] *= GameView.MAIN_SCALE;
    //                 box1[3] *= GameView.MAIN_SCALE;

    //                 for (let m = 0; m < obj2Boxes.length; m++) {

    //                     let box2 = obj2Boxes[m].slice();
    //                     if (xFacing2 === 1) {
    //                         box2[0] = pos2[0] - frameWidth2*scale2/2 + box2[0]*scale2;
    //                     } else {
    //                         box2[0] = pos2[0] + frameWidth2*scale2/2 - box2[0]*scale2 - box2[2]*scale2;
    //                     }
    //                     box2[1] = pos2[1] + box2[1]*scale2;
    //                     box2[2] *= scale2;
    //                     box2[3] *= scale2;

    //                     box2[0] *= GameView.MAIN_SCALE;
    //                     box2[1] *= GameView.MAIN_SCALE;
    //                     box2[2] *= GameView.MAIN_SCALE;
    //                     box2[3] *= GameView.MAIN_SCALE;

    //                     // let ctx = this.gameView.ctx;
    //                     // ctx.resetTransform();
    //                     // ctx.fillStyle = "red";
    //                     // let avgX = (pos1[0]+pos2[0])/2
    //                     // ctx.translate(GameView.WIDTH/2 - avgX*GameView.MAIN_SCALE, 0);
    //                     // ctx.fillRect(...box1);
    //                     // ctx.fillRect(...box2);

    //                     collide = this.overlappingBoxes(box1, box2);
    //                     if (collide) { break; }
    //                 }
    //                 if (collide) { break; }
    //             }

    //             if (collide) {
    //                 let avgVelX = (this.objects[i].vel[0] + this.objects[j].vel[0])/2;
    //                 let avgVelY = (this.objects[i].vel[1] + this.objects[j].vel[1])/2;

    //                 this.objects[i].vel = [avgVelX, avgVelY];
    //                 this.objects[j].vel = [avgVelX, avgVelY];
    //             }
    //         }
    //     }
    // }

    handlePush(){
        for (let i = 0; i < this.objects.length; i++) {
            let hurtboxes1 = this.calculateBoxes(this.objects[i], this.objects[i].character.hurtboxes);
            for (let j = i+1; j < this.objects.length; j++) {
                let collide = false;
                let hurtboxes2 = this.calculateBoxes(this.objects[j], this.objects[j].character.hurtboxes);

                for (let k = 0; k < hurtboxes1.length; k++){
                    for (let m = 0; m < hurtboxes2.length; m++) {
                        let box1 = hurtboxes1[k].slice();
                        let box2 = hurtboxes2[m].slice();
                        collide = this.overlappingBoxes(box1, box2);
                        if (collide) { break; }
                    }
                    if (collide) { break; }
                }

                if (collide) {
                    let avgVelX = (this.objects[i].vel[0] + this.objects[j].vel[0])/2;
                    let avgVelY = (this.objects[i].vel[1] + this.objects[j].vel[1])/2;

                    this.objects[i].vel = [avgVelX, avgVelY];
                    this.objects[j].vel = [avgVelX, avgVelY];
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

    calculateBoxes(player, inputBoxes) {
        let objBoxes = inputBoxes;
        let pos = player.pos;
        let xFacing = player.xFacing;
        let scale = player.scale;
        let frameWidth = player.character.frameWidth;

        let outputBoxes = [];
        for (let k = 0; k < objBoxes.length; k++){
            let box = objBoxes[k].slice();

            if (xFacing === 1) {
                box[0] = pos[0] - frameWidth*scale/2 + box[0]*scale;
            } else {
                box[0] = pos[0] + frameWidth*scale/2 - box[0]*scale - box[2]*scale;
            }
            box[1] = pos[1] + box[1]*scale;
            box[2] *= scale;
            box[3] *= scale;

            box[0] *= GameView.MAIN_SCALE;
            box[1] *= GameView.MAIN_SCALE;
            box[2] *= GameView.MAIN_SCALE;
            box[3] *= GameView.MAIN_SCALE;

            outputBoxes.push(box);
        }
        return outputBoxes;
    }
}
