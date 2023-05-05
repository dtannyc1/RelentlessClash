import { Moveable } from "./moveable.js";

export class Player extends Moveable{
    constructor(startpos) {
        console.log("Player Made")

        let options = {startpos: startpos};
        super(options);
        this.width = 128;
        this.height = 128;
        this.moveSpeed = 2;
        this.scale = 3.5;
    }

    draw(ctx){
        // ctx.fillStyle = "green";
        // ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
        let spriteSheet = document.getElementById("player1-sprite");
        ctx.drawImage(spriteSheet,
            0,0,
            this.width, this.height,
            this.pos[0], this.pos[1],
            this.width*this.scale, this.height*this.scale)
    }
}
