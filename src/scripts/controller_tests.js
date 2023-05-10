
window.addEventListener("gamepadconnected", (event) => {
    window.gamepad = event.gamepad;
    console.log(gamepad)
    window.setInterval(gameLoop, 100);
    // gameLoop();

});

function gameLoop() {
    const gamepads = navigator.getGamepads();
    let controller = gamepads[0];

    for (let i = 0; i < controller.buttons.length; i++) {
        if (controller.buttons[i].pressed) {
            const button = BUTTON_MAPPING[i];
            if (button) {
                console.log(button);
            } else {
                console.log(i);
            }
        }
    }

    // left/right is first number, right is 1
    // up/down is second number, down is 1
    let leftJoystick = [controller.axes[0], controller.axes[1]];
    let rightJoystick = [controller.axes[2], controller.axes[3]];

    if (leftJoystick[0]**2 + leftJoystick[1]**2 > 0.25) {
        console.log(leftJoystick);
    }

    if (rightJoystick[0]**2 + rightJoystick[1]**2 > 0.25) {
        console.log(rightJoystick);
    }
}

const BUTTON_MAPPING = {
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
