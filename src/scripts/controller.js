
export class Controller {
    constructor (player, option){
        window.addEventListener("keydown", event => {
            // console.log("hi")
            // console.log(event.key)
            let buttonMapping;
            if (option === 1) {
                buttonMapping = Controller.CONTROLLER_ONE;
            } else if (option === 2) {
                buttonMapping = Controller.CONTROLLER_TWO;
            }


            if (buttonMapping[event.key]) {
                // console.log("1: " + Controller.CONTROLLER_ONE[event.key]);
                switch (buttonMapping[event.key]) {
                    case 'LEFT':
                        player.move({x: -1*player.moveSpeed})
                        break;
                    case 'RIGHT':
                        player.move({x: 1*player.moveSpeed})
                        break;
                    case 'UP':
                        player.move({y: -1*player.moveSpeed})
                        break;
                    case 'DOWN':
                        player.move({y: 1*player.moveSpeed})
                        break;
                }

            }
        });
    }

    static CONTROLLER_ONE = {
        f: 'B',
        g: 'A',
        h: 'LB',
        r: 'Y',
        t: 'X',
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
        ";": 'LB',
        "i": 'Y',
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
