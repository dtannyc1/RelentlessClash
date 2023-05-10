import { Game } from "./game";

export class Controller {
    constructor (player, option, ctx, bindKeys = true){
        this.buttonMapping = undefined;
        this.imgs = [];
        this.ctx = ctx;
        this.player = player;

        if (option === 1) {
            this.buttonMapping = Controller.CONTROLLER_ONE;
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
            this.buttonMapping = Controller.CONTROLLER_TWO;
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
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);

        if (bindKeys) {
            this.addListeners();
        }

        this.draw = this.draw.bind(this);
    }

    addListeners() {
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("keyup", this.handleKeyUp);
    }

    removeListeners() {
        window.removeEventListener("keydown", this.handleKeyDown);
        window.removeEventListener("keyup", this.handleKeyUp);
    }

    assignPlayer(player) {
        this.player = player;
    }

    handleKeyDown(event) {
        // debugger
        if (this.buttonMapping[event.key]) {
            if (!this.heldButtons.includes(this.buttonMapping[event.key])) {
                this.heldButtons.push(this.buttonMapping[event.key]);
                if (this.player) {
                    this.player.handleButtonPress(this.buttonMapping[event.key]);
                }
            }
        }
    }

    handleKeyUp(event) {
        if (this.buttonMapping[event.key]) {
            if (this.heldButtons.includes(this.buttonMapping[event.key])) {
                let idx = this.heldButtons.indexOf(this.buttonMapping[event.key]);
                this.heldButtons.splice(idx, 1);
                if (this.player) {
                    this.player.handleButtonRelease(this.buttonMapping[event.key]);
                }
            }
        }
    }

    draw() {
        this.ctx.resetTransform()
        this.ctx.clearRect(0, 0, 663, 227);
        // debugger
        this.imgs.forEach((arr) => {
            let key = arr[0];
            let img = arr[1];

            if (this.heldButtons.includes(key)) {
                this.ctx.drawImage(img, 0, 5, 663, 227);
            } else {
                this.ctx.drawImage(img, 0, 0, 663, 227);
            }
        })

    }

    static CONTROLLER_ONE = {
        f: 'B',
        g: 'Y',
        h: 'X',
        r: 'LB',
        t: 'A',
        y: 'RB',
        w: 'UP',
        s: 'DOWN',
        a: 'LEFT',
        d: 'RIGHT'
    };

    static CONTROLLER_TWO = {
        ";": 'B',
        l: 'Y',
        k: 'X',
        "i": 'LB',
        o: 'A',
        p: 'RB',
        ArrowUp: 'UP',
        ArrowDown: 'DOWN',
        ArrowLeft: 'LEFT',
        ArrowRight: 'RIGHT'
    };

    static CONTROLLER_ONE_IMG_SRC = {
        "UP": "assets/images/ControllerKeys/1up.png",
        "LEFT": "assets/images/ControllerKeys/1left.png",
        "DOWN": "assets/images/ControllerKeys/1down.png",
        "RIGHT": "assets/images/ControllerKeys/1right.png",
        "B": "assets/images/ControllerKeys/1attack1.png",
        "Y": "assets/images/ControllerKeys/1attack2.png",
        "X": "assets/images/ControllerKeys/1attack3.png"
    };

    static CONTROLLER_TWO_IMG_SRC = {
        "UP": "assets/images/ControllerKeys/2up.png",
        "RIGHT": "assets/images/ControllerKeys/2right.png",
        "DOWN": "assets/images/ControllerKeys/2down.png",
        "LEFT": "assets/images/ControllerKeys/2left.png",
        "B": "assets/images/ControllerKeys/2attack1.png",
        "Y": "assets/images/ControllerKeys/2attack2.png",
        "X": "assets/images/ControllerKeys/2attack3.png"
    };
}
