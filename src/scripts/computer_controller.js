import { Controller } from "./controller";

export class ComputerController extends Controller {
    constructor (player, option, ctx, opponent){
        let buttonMapping;
        this.imgs = [];
        this.ctx = ctx;
        this.player = player;
        this.opponent = opponent;
        if (option === 1) {
            buttonMapping = Controller.CONTROLLER_ONE;
            let body = document.querySelector("body");
            for (const [key, src] of Object.entries(Controller.CONTROLLER_ONE_IMG_SRC)) {
                let img = document.createElement('img');
                img.src = src;
                img.id = `controller1-${key}`;
                img.hidden = true;
                body.appendChild(img);
                this.imgs.push([key,img]);
            }
        } else if (option === 2) {
            buttonMapping = Controller.CONTROLLER_TWO;
            let body = document.querySelector("body");
            for (const [key, src] of Object.entries(Controller.CONTROLLER_TWO_IMG_SRC)) {
                let img = document.createElement('img');
                img.src = src;
                img.id = `controller2-${key}`;
                img.hidden = true;
                body.appendChild(img);
                this.imgs.push([key,img]);
            }
        }

        this.heldButtons = [];

        this.draw = this.draw.bind(this);
    }
}
