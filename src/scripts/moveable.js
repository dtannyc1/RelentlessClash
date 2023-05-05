import { Game } from "./game";

export class Moveable {
    static GRAVITY = 0.75;

    constructor(options) {
        this.pos = options["startpos"];
        this.vel = [0, 0];
    }

    move() {
        this.pos[0] += this.vel[0];
        this.vel[1] += Moveable.GRAVITY;
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
