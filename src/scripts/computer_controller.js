import { Controller } from "./controller";

export class ComputerController extends Controller {
    constructor (player, option, ctx, opponent){
        let buttonMapping;
        this.imgs = [];
        this.ctx = ctx;
        this.player = player;
        this.opponent = opponent;

        if (option === 1) {
            buttonMapping = Controller.CONTROLLER_ONE;
            let body = document.querySelector("body");
            for (const [key, src] of Object.entries(Controller.CONTROLLER_ONE_IMG_SRC)) {
                let img = document.createElement('img');
                img.src = src;
                img.id = `controller1-${key}`;
                img.hidden = true;
                body.appendChild(img);
                this.imgs.push([key,img]);
            }
        } else if (option === 2) {
            buttonMapping = Controller.CONTROLLER_TWO;
            let body = document.querySelector("body");
            for (const [key, src] of Object.entries(Controller.CONTROLLER_TWO_IMG_SRC)) {
                let img = document.createElement('img');
                img.src = src;
                img.id = `controller2-${key}`;
                img.hidden = true;
                body.appendChild(img);
                this.imgs.push([key,img]);
            }
        }

        this.heldButtons = [];

        this.draw = this.draw.bind(this);
        this.chooseAction = this.chooseAction.bind(this);
        this.takeAction = this.takeAction.bind(this);
        this.pressButton = this.pressButton.bind(this);
        this.releaseButton = this.releaseButton.bind(this);
        this.updateDistanceFromOpponent = this.updateDistanceFromOpponent.bind(this);

        // difficulty scales the update rate of actions
        this.difficulty = option["difficulty"];
        this.buttonReleaseDelay = (20-this.difficulty)*100;

        this.relPos = [1000,1000];

        setInterval(this.chooseAction, 100);
    }

    chooseAction() {
        this.updateDistanceFromOpponent();
        // if (Math.abs(this.relPos[0]) < 100) {
        //     // this.takeAction("attack");
        // } else
        if (this.relPos[0] > 20){
            this.takeAction("run");
        } else {
            this.takeAction("idle");
        }
    }

    takeAction(action){
        if (action === "attack") {
            let choices = ["B", "Y", "X"];
            let choice = choices[Math.floor(Math.random()*choices.length)];
            this.heldButtons.push(choice);
            this.player.handleButtonPress(choice);
        } else if (action === "idle") {
            while (this.heldButtons.length > 0) {
                this.releaseButton(this.heldButtons[0]);
            }
        } else if (action === "run") {
            if (this.relPos[0] > 0) {
                this.pressButton("RIGHT");
            } else if (this.relPos[0] < 0) {
                this.pressButton("LEFT");
            }
        }
    }

    pressButton(button) {
        this.heldButtons.push(button);
        this.player.handleButtonPress(button);
    }

    releaseButton(button){
        if (this.heldButtons.indexOf(button) !== -1) {
            this.heldButtons.splice(this.heldButtons.indexOf(button),1);
            this.player.handleButtonRelease(button);
        }
    }

    updateDistanceFromOpponent(){
        this.relPos[0] = this.opponent.pos[0] - this.player.pos[0];
        this.relPos[1] = this.opponent.pos[1] - this.player.pos[1];
    }
}
