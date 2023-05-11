import { Commander } from "./Characters/commander.js";
import { Samurai } from "./Characters/samurai.js";
import { Game } from "./game.js";
import { Moveable } from "./moveable.js";

export class Player extends Moveable{
    constructor(options) {
        // let options = {startpos: startpos};
        super(options);

        this.name = options["name"];
        if (this.name === "player1") {
            this.xFacing = 1;
            this.character = new Samurai(this); // change later when introduce other sprites?

        } else {
            this.xFacing = -1;
            this.character = new Commander(this); // change later when introduce other sprites?

        }
        this.moveSpeed = 10;
        this.scale = 3.15;

        this.health = 100;

        this.setupMusic();

        this.currentAction = "idle";
        this.renderBoxes = false;

        this.handleButtonPress = this.handleButtonPress.bind(this);
        this.handleButtonRelease = this.handleButtonRelease.bind(this);
        this.stun = this.stun.bind(this);
        this.unstun = this.unstun.bind(this);
        this.runAnimationState = this.runAnimationState.bind(this);
        this.togglePlayingAudio = this.togglePlayingAudio.bind(this);
        this.mute = this.mute.bind(this);
        this.unmute = this.unmute.bind(this);

        this.stunned = false;
        this.runAnimation = true;
        // console.log(`${name} created successfully`)
    }

    draw(ctx){
        this.move();
        if (this.runAnimation) {
            this.character.currentAction(this.currentAction);
        }
        this.character.draw(ctx, this.pos, this.scale);
    }

    assignController(controller) {
        this.controller = controller;
        this.controller.assignPlayer(this);
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
                    if (this.pos[1] === this.FLOOR && moves.includes("jump")) {
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

            if ((button === "B" || button === "Y" || button || "X") && !this.playingAudio){
                this.swordSounds[Math.floor(Math.random() * this.swordSounds.length)].play();
                this.playingAudio = true;
                setTimeout(this.togglePlayingAudio, 500);
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
        if (duration) {
            setTimeout(this.unstun, duration);
        }
    }

    unstun() {
        this.stunned = false;
    }

    runAnimationState(bool = true) {
        this.runAnimation = bool;
    }

    setupMusic() {
        this.swordSounds = [
            new Audio("assets/music/SwordSwipe1.mp3"),
            new Audio("assets/music/SwordSwipe2.mp3"),
            new Audio("assets/music/SwordSwipe3.mp3"),
            new Audio("assets/music/SwordSwipe4.mp3"),
            new Audio("assets/music/SwordSwipe5.mp3")
        ];
        this.swordSounds.forEach((sound) => {
            sound.loop = false;
        })
        this.playingAudio = false;
    }

    togglePlayingAudio() {
        this.playingAudio = !this.playingAudio;
    }

    mute() {
        this.swordSounds.forEach((sound) => {
            sound.volume = 0;
        })
    }

    unmute(){
        this.swordSounds.forEach((sound) => {
            sound.volume = 1;
        })
    }
}
