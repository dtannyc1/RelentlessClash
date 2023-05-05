
export class Moveable {
    static GRAVITY = 0.75;
    static FLOOR = 500;

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

        if (this.name === "player2") {
            console.log(this.pos);
        }
    }

    checkFloor() {
        if (this.pos[1] > Moveable.FLOOR) {
            this.vel[1] = 0;
            this.pos[1] = Moveable.FLOOR;
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
