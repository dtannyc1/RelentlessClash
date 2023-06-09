import { GameView } from "./game_view.js";
import { Player } from "./player.js";

export class Game {
    static PLAYER1_STARTX = -240;
    static PLAYER2_STARTX = 240;
    static KNOCKBACK = 10;

    constructor(ctx, controller1, controller2, menu) {
        this.gameView = new GameView(ctx);
        this.FLOOR = this.gameView.background.FLOOR;

        this.player1 = new Player({
            startpos: [Game.PLAYER1_STARTX, this.FLOOR*0.75],
            name: "player1",
            floor: this.FLOOR});
        this.controller1 = controller1;
        this.player1.assignController(this.controller1);

        this.player2 = new Player({
            startpos: [Game.PLAYER2_STARTX, this.FLOOR*0.75],
            name: "player2",
            floor: this.FLOOR});
        this.controller2 = controller2;
        this.player2.assignController(this.controller2);

        this.controller1.assignOpponent(this.player2);
        this.controller2.assignOpponent(this.player1);

        this.objects = [this.player1, this.player2];
        this.scores = [0,0];
        this.gameOver = false;
        this.paused = true;

        this.setupMusic();

        this.resetRound = this.resetRound.bind(this);
        this.endGame = this.endGame.bind(this);
        this.togglePlayingAudio  = this.togglePlayingAudio.bind(this);
        this.mute = this.mute.bind(this);
        this.unmute = this.unmute.bind(this);

        this.menu = menu;
    }

    start() {
        this.paused = false;
        this.resetRound();
        this.runGame();
    }

    runGame() {
        if (!this.paused) {
            this.gameView.draw(this.objects);
            this.gameView.renderScore(this.scores);
            this.controller1.draw();
            this.controller2.draw();
            this.handleCollisions();
        }
        if (!this.gameOver) {
            requestAnimationFrame(this.runGame.bind(this))
        }
    }

    handleCollisions() {
        this.handleHit();
        this.handlePush();
        this.handleSwordCollisions();
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
            let roundEnd = false;
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
                target.health -= damage*(3-boxNum)*0.25;
                if (target.health < 0){
                    roundEnd = true;
                    target.health = 0;
                }

                // cause knockback
                if (origin.pos[0] < target.pos[0]){
                    target.pos[0] += Game.KNOCKBACK*(damage);
                } else{
                    target.pos[0] -= Game.KNOCKBACK*(damage);
                }
            })

            if (roundEnd) {
                this.isRoundOver();
            }
        }
    }

    handleSwordCollisions() {
        let hits = [];
        for (let i = 0; i < this.objects.length; i++) {
            let hitboxes1 = this.objects[i].getHitBoxes(GameView.MAIN_SCALE);
            if (hitboxes1) {
                hitboxes1 = hitboxes1[0];
                for (let j = 0; j < this.objects.length; j++) {
                    if (j !== i) {
                        let hitboxes2 = this.objects[j].getHitBoxes(GameView.MAIN_SCALE);
                        if (hitboxes2) {
                            hitboxes2 = hitboxes2[0];

                            if (this.overlappingBoxes(hitboxes1, hitboxes2)){
                                hits.push([this.objects[i], this.objects[j]]);
                                break;
                            }
                        }
                    }
                }
            }
        }

        if (hits.length > 0) {
            if (!this.playingAudio){
                this.swordClashSound.play();
                this.playingAudio = true;
                setTimeout(this.togglePlayingAudio, 500);
            }
        }

        hits.forEach((hit) => {
            let origin = hit[0];
            let target = hit[1];

            let damage = 4;
                switch (origin.currentAction){
                    case ("attack1"):
                        damage *= 1;
                        break;
                    case ("attack2"):
                        damage *= 2;
                        break;
                    case ("attack3"):
                        damage *= 3;
                        break;
                }

            if (origin.pos[0] < target.pos[0]){
                target.pos[0] += Game.KNOCKBACK*(damage);
            } else{
                target.pos[0] -= Game.KNOCKBACK*(damage);
            }
        })
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
            } else if (this.player1.health === 0){
                this.scores[1] += 1;
                this.player1.currentAction = "dead";
                this.player2.runAnimationState(false);
                this.player1.stun(5000);
                this.player2.stun(5000);
            } else {
                this.scores[0] += 1;
                this.player2.currentAction = "dead";
                this.player1.runAnimationState(false);
                this.player1.stun(5000);
                this.player2.stun(5000);
            }

            if (!this.isGameOver()) {
                setTimeout(this.resetRound, 4500);
            } else {
                setTimeout(this.endGame, 4500);
            }
        }
    }

    isGameOver(){
        // end game if winning by 2
        if (Math.abs(this.scores[0] - this.scores[1]) >= 2) {
            return true;
        } else {
            return false;
        }
    }

    endGame(){
        this.gameOver = true;
        this.player1.stun();
        this.player2.stun();
        // console.log("Game Over")
        this.menu.stopGame();
    }

    randomizeStage() {
        this.gameView.randomizeStage();
        this.FLOOR = this.gameView.background.FLOOR;
        this.player1.setFloor(this.FLOOR);
        this.player2.setFloor(this.FLOOR);
    }

    resetRound() {
        this.randomizeStage();

        this.player1.pos = [Game.PLAYER1_STARTX, this.FLOOR*0.75];
        this.player2.pos = [Game.PLAYER2_STARTX, this.FLOOR*0.75];

        this.player1.health = 100;
        this.player2.health = 100;

        this.player1.currentAction = "jump";
        this.player2.currentAction = "jump";

        this.player1.character.animationFrameInfo["jump"].framenum = 32;
        this.player2.character.animationFrameInfo["jump"].framenum = 32;

        this.player1.xFacing = 1;
        this.player2.xFacing = -1;

        this.player1.runAnimationState();
        this.player2.runAnimationState();

        this.player1.stun(1000);
        this.player2.stun(1000);

        this.roundOver = false;
    }

    pause(){
        this.paused = true;
        this.player1.stun();
        this.player2.stun();
    }

    unpause() {
        this.paused = false;
        this.player1.unstun();
        this.player2.unstun();
    }

    winner() {
        return (this.scores[0] > this.scores[1]) ? "Player 1" : "Player 2";
    }

    setupMusic() {
        this.swordClashSound = new Audio("assets/music/SwordClash.mp3");
        this.swordClashSound.loop = false;
        this.playingAudio = false;
    }

    mute(){
        this.swordClashSound.volume = 0;
        this.player1.mute();
        this.player2.mute();
    }

    unmute() {
        this.swordClashSound.volume = 1;
        this.player1.unmute();
        this.player2.unmute();
    }

    togglePlayingAudio() {
        this.playingAudio = false;
    }
}
