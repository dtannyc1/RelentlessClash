import { Game } from "./game";

export class Controller {
    constructor (player, option){
        let buttonMapping;
        if (option === 1) {
            buttonMapping = Controller.CONTROLLER_ONE;
        } else if (option === 2) {
            buttonMapping = Controller.CONTROLLER_TWO;
        }

        window.addEventListener("keydown", event => {
            if (buttonMapping[event.key]) {
                switch (buttonMapping[event.key]) {
                    case 'LEFT':
                        player.vel[0] = -1*player.moveSpeed;
                        player.currentAction = "run";
                        break;
                    case 'RIGHT':
                        player.vel[0] = 1*player.moveSpeed;
                        player.currentAction = "run";
                        break;
                    case 'UP':
                        if (player.pos[1] === Game.FLOOR) {
                            player.vel[1] = -1.5*player.moveSpeed;
                            player.currentAction = "jump";
                        }
                        break;
                    case 'A':
                        player.currentAction = "attack1";
                        break;
                    case 'B':
                        player.currentAction = "attack2";
                        break;
                    case 'Y':
                        player.currentAction = "attack3";
                        break;
                }
            }
        });

        window.addEventListener("keyup", event => {
            if (buttonMapping[event.key]) {
                switch (buttonMapping[event.key]) {
                    case 'LEFT':
                        if (player.vel[0] < 0) {
                            player.vel[0] = 0;
                            player.character.stopAction("run");
                        }
                        break;
                    case 'RIGHT':
                        if (player.vel[0] > 0) {
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
        g: 'A',
        h: 'Y',
        t: 'X',
        r: 'LB',
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
        k: 'B',
        l: 'A',
        ";": 'Y',
        "i": 'LB',
        o: 'X',
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
