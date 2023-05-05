import { Samurai } from "./Characters/samurai.js";
import { Moveable } from "./moveable.js";

export class Player extends Moveable{
    constructor(startpos, name) {
        console.log("Player Made")

        let options = {startpos: startpos};
        super(options);
        this.name = name;
        this.moveSpeed = 2;
        this.scale = 3.5;

        this.character = new Samurai(this);
    }

    draw(ctx){
        this.character.draw(ctx, this.pos, this.scale);
    }

    // idleAnimation() {
    //     let spriteSheet = document.getElementById("player1-sprite");
    //     this.framePosX = (this.framePosX + this.frameWidth) % (spriteSheet.width);
    // }
}
