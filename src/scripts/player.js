import { Moveable } from "./moveable.js";

export class Player extends Moveable{
    constructor(startpos) {
        console.log("Player Made")

        let options = {startpos: startpos};
        super(options);
        this.width = 10;
        this.height = 50;
        this.moveSpeed = 2;
    }

    draw(ctx){
        ctx.fillStyle = "green";
        ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    }
}
