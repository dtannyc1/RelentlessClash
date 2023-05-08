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
        this.scores = [0,0];

        this.resetRound = this.resetRound.bind(this);
        this.roundOver = false;
        this.runGame();
    }

    runGame() {
        this.gameView.draw(this.objects);
        this.handleCollisions();
        if (!this.roundOver) {
            this.isRoundOver();
        }
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
        // determine who is hitting which box
        let hits = [];
        for (let i = 0; i < this.objects.length; i++) {
            let hitbox = this.objects[i].getHitBoxes(GameView.MAIN_SCALE);
            if (hitbox) {
                hitbox = hitbox[0];
                for (let j = 0; j < this.objects.length; j++) {
                    if (j !== i) {
                        let hit = false;
                        let hurtboxes = this.objects[j].getHurtBoxes(GameView.MAIN_SCALE);
                        for (let k = 0; k < hurtboxes.length; k++) {
                            if (this.overlappingBoxes(hitbox, hurtboxes[k])){
                                hits.push([this.objects[i], this.objects[j], k]);
                                hit = true;
                                break;
                            }
                        }
                        if (hit) {
                            break;
                        }
                    }
                }
            }
        }

        // actually deal with the hits
        if (hits.length > 0) {
            hits.forEach((hit) => {
                let origin = hit[0];
                let target = hit[1];
                let boxNum = hit[2];

                let damage = 0;
                switch (origin.currentAction){
                    case ("attack1"):
                        damage = 1;
                        break;
                    case ("attack2"):
                        damage = 2;
                        break;
                    case ("attack3"):
                        damage = 3;
                        break;
                }

                // deal damage
                target.health -= damage*(boxNum+1)*0.25;
                if (target.health < 0){
                    target.health = 0;
                }

                // cause knockback
                let knockback = 10;
                if (origin.pos[0] < target.pos[0]){
                    // debugger
                    target.pos[0] += knockback*(damage);
                } else{
                    target.pos[0] -= knockback*(damage);
                }
            })
        }
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

    toggleRenderBoxes() {
        this.player1.toggleRenderBoxes();
        this.player2.toggleRenderBoxes();
    }

    isRoundOver() {
        if (this.player1.health === 0 || this.player2.health === 0) {
            this.roundOver = true;
            if (this.player1.health === 0 && this.player2.health === 0) {
                this.player1.currentAction = "dead";
                this.player2.currentAction = "dead";
                this.player1.stun(5000);
                this.player2.stun(5000);

                setTimeout(this.resetRound, 4500);
            } else if (this.player1.health === 0){
                this.scores[1] += 1;
                this.player1.currentAction = "dead";
                this.player1.stun(5000);
                this.player2.stun(5000);

                setTimeout(this.resetRound, 4500);
            } else {
                this.scores[0] += 1;
                this.player2.currentAction = "dead";
                this.player1.stun(5000);
                this.player2.stun(5000);

                setTimeout(this.resetRound, 4500);
            }
        }
    }

    resetRound() {
        console.log("Round Reset")
        console.log(this.scores)

        this.player1.pos = [Game.PLAYER1_STARTX, Game.FLOOR*0.75];
        this.player2.pos = [Game.PLAYER2_STARTX, Game.FLOOR*0.75];

        this.player1.health = 100;
        this.player2.health = 100;

        this.player1.currentAction = "idle";
        this.player2.currentAction = "idle";

        this.roundOver = false;
        // debugger
    }
}
