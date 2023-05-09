import { Controller } from "./controller";

export class ComputerController extends Controller {
    constructor (player, option, ctx, opponent, difficulty = 6){
        super(player, option, ctx, false);

        this.player = player;
        this.opponent = opponent;

        this.chooseAction = this.chooseAction.bind(this);
        this.takeAction = this.takeAction.bind(this);
        this.pressButton = this.pressButton.bind(this);
        this.releaseButton = this.releaseButton.bind(this);
        this.updateDistanceFromOpponent = this.updateDistanceFromOpponent.bind(this);

        // difficulty scales the update rate of actions
        this.difficulty = difficulty;
        this.buttonReleaseDelay = 250 + (10-this.difficulty)*500;

        this.relPos = [1000,1000];

        setInterval(this.chooseAction, 100 + (10-this.difficulty) * 30);
        // Notes on delay values:
        // 400 feels slow, too easy
        // 200 feels good
        // 100 is aggressive
    }

    chooseAction() {
        this.updateDistanceFromOpponent();
        if (Math.abs(this.relPos[0]) > 200 && Math.random()*10 < this.difficulty){
            this.takeAction("run");
        } else {
            if (Math.random()*10 < this.difficulty) {
                this.takeAction("attack");
            }
            if (Math.abs(this.relPos[1]) > 20) {
                if (Math.random()*10 < this.difficulty) {
                    this.takeAction("jump");
                }
            } else {
                this.takeAction("idle");
            }
        }
    }

    takeAction(action){
        if (action === "attack") {
            let choices = ["B", "Y", "X"];
            if (!this.heldButtons.includes("B") &&
                    !this.heldButtons.includes("Y") &&
                        !this.heldButtons.includes("X")) {
                let choice = choices[Math.floor(Math.random()*choices.length)];
                this.pressButton(choice);
                setTimeout(() => this.releaseButton(choice), this.buttonReleaseDelay);
            }
        } else if (action === "run") {
            if (this.relPos[0] > 0) {
                this.releaseButton("LEFT");
                if (this.player.vel[0] === 0) {
                    this.releaseButton("RIGHT");
                }
                this.pressButton("RIGHT");
            } else if (this.relPos[0] < 0) {
                this.releaseButton("RIGHT");
                if (this.player.vel[0] === 0) {
                    this.releaseButton("LEFT");
                }
                this.pressButton("LEFT");
            }
        } else if (action === "jump") {
            this.pressButton("UP");
            setTimeout(() => this.releaseButton("UP"), this.buttonReleaseDelay);
        } else if (action === "idle") {
            while (this.heldButtons.length > 0) {
                this.releaseButton(this.heldButtons[0]);
            }
        }
    }

    pressButton(button) {
        if (!this.heldButtons.includes(button)) {
            this.heldButtons.push(button);
            this.player.handleButtonPress(button);
        }
    }

    releaseButton(button){
        // debugger
        // console.log(button)
        if (this.heldButtons.indexOf(button) !== -1) {
            this.heldButtons.splice(this.heldButtons.indexOf(button),1);
            this.player.handleButtonRelease(button);
        }
    }

    updateDistanceFromOpponent(){
        // debugger
        this.relPos[0] = this.opponent.pos[0] - this.player.pos[0];
        this.relPos[1] = this.opponent.pos[1] - this.player.pos[1];
    }
}
