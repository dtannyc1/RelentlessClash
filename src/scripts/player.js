import { Samurai } from "./Characters/samurai.js";
import { Moveable } from "./moveable.js";

export class Player extends Moveable{
    constructor(startpos, name) {
        let options = {startpos: startpos};
        super(options);

        this.name = name;
        if (name === "player1") {
            this.xFacing = 1;
        } else {
            this.xFacing = -1;
        }
        this.moveSpeed = 10;
        this.scale = 3.15;

        this.health = Math.random()*100;

        this.character = new Samurai(this); // change later when introduce other sprites?
        this.currentAction = "idle";

        console.log(`${name} created successfully`)
    }

    draw(ctx){
        this.move();
        this.character.currentAction(this.currentAction);
        this.character.draw(ctx, this.pos, this.scale);
    }

    assignController(controller) {
        this.controller = controller;
    }

    getHurtBoxes(main_scale) {
        return this.calculateBoxes(main_scale, this.character.hurtboxes)
    }

    calculateBoxes(main_scale, boxes){
        let objBoxes = boxes;
        let pos = this.pos;
        let xFacing = this.xFacing;
        let scale = this.scale;
        let frameWidth = this.character.frameWidth;

        let outputBoxes = [];
        for (let k = 0; k < objBoxes.length; k++){
            let box = objBoxes[k].slice();

            if (xFacing === 1) {
                box[0] = pos[0] - frameWidth*scale/2 + box[0]*scale;
            } else {
                box[0] = pos[0] + frameWidth*scale/2 - box[0]*scale - box[2]*scale;
            }
            box[1] = pos[1] + box[1]*scale;
            box[2] *= scale;
            box[3] *= scale;

            box[0] *= main_scale;
            box[1] *= main_scale;
            box[2] *= main_scale;
            box[3] *= main_scale;

            outputBoxes.push(box);
        }
        return outputBoxes;
    }
}
