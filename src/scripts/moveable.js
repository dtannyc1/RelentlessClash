
export class Moveable {
    constructor(options) {
        console.log("Moveable Made")

        this.pos = options["startpos"];
        this.vel = [0, 0];
    }

    move(options) {
        if (options["x"]) {
            this.pos[0] += options["x"];
        }
        if (options["y"]) {
            this.pos[1] += options["y"];
        }
        console.log(this.pos);
    }

    draw() {
        throw new Error("Draw not implemented?")
    }
}
