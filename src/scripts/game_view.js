
export class GameView {
    // Constants
    static MAIN_SCALE = 0.75;
    static WIDTH = 960*GameView.MAIN_SCALE;
    static HEIGHT = 720*GameView.MAIN_SCALE;

    static BACKGROUND_OFFSET_X = -400;
    static BACKGROUND_OFFSET_Y = -200;
    static BACKGROUND_SCALE = 0.9;

    // Class methods
    constructor(ctx) {
        this.ctx = ctx;
    }

    draw(objects) {
        let ctx = this.ctx;
        ctx.resetTransform();
        ctx.clearRect(0,0,GameView.WIDTH, GameView.HEIGHT)

        // Calculate camera location
        let sumX = 0;
        objects.forEach((obj) => {
            sumX += obj.pos[0];
        })
        let avgX = sumX / objects.length;
        // console.log(avgX)

        // draw background image
        ctx.scale(GameView.MAIN_SCALE, GameView.MAIN_SCALE)
        ctx.translate(GameView.BACKGROUND_OFFSET_X - avgX,
                      GameView.BACKGROUND_OFFSET_Y);
        ctx.scale(GameView.BACKGROUND_SCALE, GameView.BACKGROUND_SCALE);
        let backgroundImg = document.getElementById("train-background");
        ctx.drawImage(backgroundImg,0,0);

        // draw fighters and other assets
        objects.forEach((obj) => {
            ctx.resetTransform();
            ctx.translate(GameView.WIDTH/2, 0);
            ctx.scale(GameView.MAIN_SCALE, GameView.MAIN_SCALE);
            ctx.translate(-avgX, 0);
            obj.draw(ctx);
        })

        // draw health bars
        let barThickness = 20;
        let start1 = GameView.WIDTH*0.04;
        let start2 = GameView.WIDTH*0.96;
        let barSize = GameView.WIDTH*0.4;
        let healthyColor = "0, 220, 0";
        let hurtColor = "170, 0, 0";

        objects.forEach((obj) => {
            ctx.resetTransform();
            let startpos, barwidth, sign;
            if (obj.name === "player1") {
                startpos = [start1, start1];
                barwidth = barSize;
                sign = 1;
            } else {
                startpos = [start2, start1];
                barwidth = -barSize;
                sign = -1;
            }
            for (let i = 5; i >= 0; i--) {
                if (obj.health === 100) {
                    ctx.strokeStyle = `rgb(${healthyColor}, ${0.25 + (5-i)/5*0.75})`;
                    ctx.lineWidth = barThickness+i;
                    ctx.beginPath();
                    ctx.moveTo(startpos[0]-i*sign, startpos[1]);
                    ctx.lineTo(startpos[0] + obj.health/100*barwidth +i*sign, startpos[1]);
                    ctx.stroke();
                } else if (obj.health === 0) {
                    ctx.beginPath();
                    ctx.lineWidth = barThickness+i;
                    ctx.strokeStyle = `rgb(${hurtColor}, ${0.25 + (5-i)/5*0.75})`;
                    ctx.moveTo(startpos[0] + obj.health/100*barwidth - i*sign, startpos[1]);
                    ctx.lineTo(startpos[0] + barwidth + i*sign, startpos[1]);
                    ctx.stroke();
                } else {
                    ctx.strokeStyle = `rgb(${healthyColor}, ${0.25 + (5-i)/5*0.75})`;
                    ctx.lineWidth = barThickness+i;
                    ctx.beginPath();
                    ctx.moveTo(startpos[0]-i*sign, startpos[1]);
                    ctx.lineTo(startpos[0] + obj.health/100*barwidth, startpos[1]);
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.strokeStyle = `rgb(${hurtColor}, ${0.25 + (5-i)/5*0.75})`;
                    ctx.moveTo(startpos[0] + obj.health/100*barwidth, startpos[1]);
                    ctx.lineTo(startpos[0] + barwidth + i*sign, startpos[1]);
                    ctx.stroke();
                }
            }
        })
    }
}
