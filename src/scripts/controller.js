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
                let moves = player.character.possibleMoves[player.currentAction];

                if (!this.heldButtons.includes(buttonMapping[event.key])) {
                    this.heldButtons.push(buttonMapping[event.key]);

                    switch (buttonMapping[event.key]) {
                        case 'LEFT':
                            if (moves.includes("run")) {
                                player.vel[0] = -1*player.moveSpeed;
                                player.currentAction = "run";
                            }
                            break;
                        case 'RIGHT':
                            if (moves.includes("run")) {
                                player.vel[0] = 1*player.moveSpeed;
                                player.currentAction = "run";
                            }
                            break;
                        case 'UP':
                            if (player.pos[1] === Game.FLOOR && moves.includes("jump")) {
                                player.vel[1] = -2*player.moveSpeed;
                                player.currentAction = "jump";
                            }
                            break;
                        case 'B':
                            if (moves.includes("attack1")) {
                                // player.vel[0] = 0;
                                player.currentAction = "attack1";
                            }
                            break;
                        case 'Y':
                            if (moves.includes("attack2")) {
                                // player.vel[0] = 0;
                                player.currentAction = "attack2";
                            }
                            break;
                        case 'X':
                            if (moves.includes("attack3")) {
                                // player.vel[0] = 0;
                                player.currentAction = "attack3";
                            }
                            break;
                    }
                }


            }
        });

        window.addEventListener("keyup", event => {
            if (buttonMapping[event.key]) {

                if (this.heldButtons.includes(buttonMapping[event.key])) {
                    let idx = this.heldButtons.indexOf(buttonMapping[event.key]);
                    this.heldButtons.splice(idx, 1);
                }

                switch (buttonMapping[event.key]) {
                    case 'LEFT':
                        if (player.vel[0] < 0 && player.currentAction === "run") {
                            player.vel[0] = 0;
                            player.character.stopAction("run");
                        }
                        break;
                    case 'RIGHT':
                        if (player.vel[0] > 0 && player.currentAction === "run") {
                            player.vel[0] = 0;
                            player.character.stopAction("run");
                        }
                        break;
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
        // 6: 'LT',
        // 7: 'RT',
        // 8: 'M',     // minus
        // 9: 'P',     // plus
        // 10: 'LJ',   // left joystick
        // 11: 'RJ',   // right joystick
        w: 'UP',   // up
        s: 'DOWN',    // down
        a: 'LEFT',
        d: 'RIGHT',
        // 16: 'HOME',
        // 17: 'SS'
    };

    static CONTROLLER_TWO = {
        ";": 'B',
        l: 'Y',
        k: 'X',
        "i": 'LB',
        o: 'A',
        p: 'RB',
        // 6: 'LT',
        // 7: 'RT',
        // 8: 'M',     // minus
        // 9: 'P',     // plus
        // 10: 'LJ',   // left joystick
        // 11: 'RJ',   // right joystick
        ArrowUp: 'UP',   // up
        ArrowDown: 'DOWN',    // down
        ArrowLeft: 'LEFT',
        ArrowRight: 'RIGHT',
        // 16: 'HOME',
        // 17: 'SS'
    };
}
