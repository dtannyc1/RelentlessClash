import { Game } from "./game";

export class Controller {
    constructor (player, option){
        let buttonMapping;
        if (option === 1) {
            buttonMapping = Controller.CONTROLLER_ONE;
        } else if (option === 2) {
            buttonMapping = Controller.CONTROLLER_TWO;
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
}
