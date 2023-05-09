import { Game } from "./game";

export class Controller {
    constructor (player, option, ctx){
        let buttonMapping;
        this.imgs = [];
        this.ctx = ctx;
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

        window.addEventListener("keydown", event => {
            if (buttonMapping[event.key]) {
                if (!this.heldButtons.includes(buttonMapping[event.key])) {
                    this.heldButtons.push(buttonMapping[event.key]);
                    player.handleButtonPress(buttonMapping[event.key]);
                }
            }
        });

        window.addEventListener("keyup", event => {
            if (buttonMapping[event.key]) {
                if (this.heldButtons.includes(buttonMapping[event.key])) {
                    let idx = this.heldButtons.indexOf(buttonMapping[event.key]);
                    this.heldButtons.splice(idx, 1);

                    player.handleButtonRelease(buttonMapping[event.key]);
                }
            }
        });

        this.draw = this.draw.bind(this);
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
