import { Game } from "./game";
import { GameView } from "./game_view";

export class Moveable {
    static GRAVITY = [0.5, 0.75];

    constructor(options) {
        this.pos = options["startpos"];
        this.vel = [0, 0];
    }

    move() {
        if (this.pos[1] === Game.FLOOR && this.currentAction !== "run") {
            if (this.vel[0] < -Moveable.GRAVITY[0]) {
                this.vel[0] += Moveable.GRAVITY[0];
            } else if (this.vel[0] > Moveable.GRAVITY[0]) {
                this.vel[0] -= Moveable.GRAVITY[0];
            } else {
                this.vel[0] = 0;
            }
        }
        this.pos[0] += this.vel[0];
        this.vel[1] += Moveable.GRAVITY[1];
        this.pos[1] += this.vel[1];

        this.checkFloor();
        this.checkFacing();
    }

    checkFloor() {
        // console.log(Game.FLOOR)
        if (this.pos[1] > Game.FLOOR) {
            this.vel[1] = 0;
            this.pos[1] = Game.FLOOR;
        }
    }

    checkFacing() {
        if (this.vel[0] < 0) {
            this.xFacing = -1;
        } else if (this.vel[0] > 0) {
            this.xFacing = 1;
        }
    }

    draw() {
        throw new Error("Draw not implemented?")
    }
}
