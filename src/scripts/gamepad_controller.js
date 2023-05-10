import { Controller } from "./controller";

export class GamePadController extends Controller {
    static BUTTON_MAPPING = {
        0: 'UP', // changed
        1: 'X',  // changed
        2: 'B', // changed
        3: 'Y', // changed
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
        super(null, 3, ctx, false);
        this.gamepad = gamepad;
        this.buttonMapping = Gamepad.BUTTON_MAPPING;

        this.gameLoop = this.gameLoop.bind(this);

        setInterval(this.gameLoop, 100)
    }

    draw() {
        this.ctx.clearRect(0,0,1000,1000);
    }

    gameLoop() {
        if (this.player) {
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

            let leftJoystick = [controller.axes[0], controller.axes[1]];

            if (leftJoystick[0] > 0.25){
                this.player.handleButtonRelease("LEFT");
                this.player.handleButtonPress("RIGHT");
            } else if (leftJoystick[0] < -0.25) {
                this.player.handleButtonRelease("RIGHT");
                this.player.handleButtonPress("LEFT");
            }
            // if (leftJoystick[1] < -0.25){
            //     this.player.handleButtonPress("UP");
            // } else {
            //     this.player.handleButtonRelease("UP");
            // }
        }
    }
}
