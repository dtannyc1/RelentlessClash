
export class Moveable {
    static GRAVITY = 0.2;
    static FLOOR = 500;

    constructor(options) {
        this.pos = options["startpos"];
        this.vel = [0, 0];
    }

    // move(options) {
    //     if (options["x"]) {
    //         this.pos[0] += options["x"];
    //     }
    //     if (options["y"]) {
    //         this.pos[1] += options["y"];
    //     }
    //     console.log(this.pos);
    // }
    move() {
        this.pos[0] += this.vel[0];
        this.vel[1] += Moveable.GRAVITY;
        this.pos[1] += this.vel[1];

        this.checkFloor();
    }

    checkFloor() {
        if (this.pos[1] > Moveable.FLOOR) {
            this.vel[1] = 0;
            this.pos[1] = Moveable.FLOOR;
        }
    }

    draw() {
        throw new Error("Draw not implemented?")
    }
}
