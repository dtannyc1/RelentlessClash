import { Controller } from "./controller";

export class GamePadController extends Controller {
    static BUTTON_MAPPING = {
        0: 'B',
        1: 'A',
        2: 'Y',
        3: 'X',
        4: 'LB',
        5: 'RB',
        6: 'LT',
        7: 'RT',
        8: 'M',     // minus
        9: 'P',     // plus
        10: 'LJ',   // left joystick
        11: 'RJ',   // right joystick
        12: 'UP',   // up
        13: 'DOWN',    // down
        14: 'LEFT',
        15: 'RIGHT',
        16: 'HOME',
        17: 'SS'
    }

    constructor(gamepad, ctx) {
        super(null, 3, ctx);
        this.gamepad = gamepad;
        this.buttonMapping = Gamepad.BUTTON_MAPPING;
        console.log("Gamepad connected")
        console.log(this)

        this.gameLoop = this.gameLoop.bind(this);

        setInterval(this.gameLoop, 100)
    }

    draw() {
        // do nothing?
    }

    gameLoop() {
        if (this.player) {
            // console.log("listening")
            const gamepads = navigator.getGamepads();
            let controller = gamepads[this.gamepad.index];

            for (let i = 0; i < controller.buttons.length; i++) {
                let button = GamePadController.BUTTON_MAPPING[i];
                if (controller.buttons[i].pressed) {
                    this.player.handleButtonPress(button);
                } else {
                    this.player.handleButtonRelease(button);
                }
            }

            // left/right is first number, right is 1
            // up/down is second number, down is 1
            let leftJoystick = [controller.axes[0], controller.axes[1]];
            // let rightJoystick = [controller.axes[2], controller.axes[3]];

            if (leftJoystick[0] > 0.25){
                this.player.handleButtonRelease("LEFT");
                this.player.handleButtonPress("RIGHT");
            } else if (leftJoystick[0] < -0.25) {
                this.player.handleButtonRelease("RIGHT");
                this.player.handleButtonPress("LEFT");
            }
            if (leftJoystick[1] < -0.25){
                this.player.handleButtonPress("UP");
            } else {
                this.player.handleButtonRelease("UP");
            }
        }
    }
}
