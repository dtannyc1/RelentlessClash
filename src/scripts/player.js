import { Commander } from "./Characters/commander.js";
import { Samurai } from "./Characters/samurai.js";
import { Game } from "./game.js";
import { Moveable } from "./moveable.js";

export class Player extends Moveable{
    constructor(startpos, name) {
        let options = {startpos: startpos};
        super(options);

        this.name = name;
        if (name === "player1") {
            this.xFacing = 1;
            this.character = new Samurai(this); // change later when introduce other sprites?

        } else {
            this.xFacing = -1;
            this.character = new Commander(this); // change later when introduce other sprites?

        }
        this.moveSpeed = 10;
        this.scale = 3.15;

        this.health = 100;

        this.currentAction = "idle";
        this.renderBoxes = false;

        this.handleButtonPress = this.handleButtonPress.bind(this);
        this.handleButtonRelease = this.handleButtonRelease.bind(this);
        this.stun = this.stun.bind(this);
        this.unstun = this.unstun.bind(this);

        this.stunned = false;
        console.log(`${name} created successfully`)
    }

    draw(ctx){
        this.move();
        this.character.currentAction(this.currentAction);
        this.character.draw(ctx, this.pos, this.scale);
    }

    assignController(controller) {
        this.controller = controller;
    }

    getHurtBoxes(main_scale) {
        if (this.character.hurtboxes) {
            return this.calculateBoxes(main_scale, this.character.hurtboxes)
        } else {
            return [];
        }
    }

    getHitBoxes(main_scale) {
        if (this.character.hitboxes) {
            return this.calculateBoxes(main_scale, this.character.hitboxes)
        } else {
            return [];
        }
    }

    calculateBoxes(main_scale, boxes){
        let objBoxes = boxes;
        let pos = this.pos;
        let xFacing = this.xFacing;
        let scale = this.scale;
        let frameWidth = this.character.frameWidth;

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

            box[0] *= main_scale;
            box[1] *= main_scale;
            box[2] *= main_scale;
            box[3] *= main_scale;

            outputBoxes.push(box);
        }
        return outputBoxes;
    }

    toggleRenderBoxes() {
        this.renderBoxes = !this.renderBoxes;
    }

    handleButtonPress(button){
        if (!this.stunned) {
            let moves = this.character.possibleMoves[this.currentAction];

            switch (button) {
                case 'LEFT':
                    if (moves.includes("run")) {
                        this.vel[0] = -1*this.moveSpeed;
                        this.currentAction = "run";
                    } else{
                        this.vel[0] = -1*this.moveSpeed;
                    }
                    break;
                case 'RIGHT':
                    if (moves.includes("run")) {
                        this.vel[0] = 1*this.moveSpeed;
                        this.currentAction = "run";
                    } else {
                        this.vel[0] = 1*this.moveSpeed;
                    }
                    break;
                case 'UP':
                    if (this.pos[1] === Game.FLOOR && moves.includes("jump")) {
                        this.vel[1] = -2*this.moveSpeed;
                        this.currentAction = "jump";
                    }
                    break;
                case 'B':
                    if (moves.includes("attack1")) {
                        this.currentAction = "attack1";
                    }
                    break;
                case 'Y':
                    if (moves.includes("attack2")) {
                        this.currentAction = "attack2";
                    }
                    break;
                case 'X':
                    if (moves.includes("attack3")) {
                        this.currentAction = "attack3";
                    }
                    break;
            }
        }
    }

    handleButtonRelease(button){
        if (!this.stunned) {
            switch (button) {
                case 'LEFT':
                    if (this.vel[0] < 0 && this.currentAction === "run") {
                        this.vel[0] = 0;
                        this.character.stopAction("run");
                    }
                    break;
                case 'RIGHT':
                    if (this.vel[0] > 0 && this.currentAction === "run") {
                        this.vel[0] = 0;
                        this.character.stopAction("run");
                    }
                    break;
            }
        }
    }

    stun(duration) {
        this.stunned = true;
        setInterval(this.unstun, duration);
    }

    unstun() {
        this.stunned = false;
    }
}
