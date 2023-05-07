
export class GameView {
    // Constants
    static MAIN_SCALE = 0.75;
    static WIDTH = 960*GameView.MAIN_SCALE;
    static HEIGHT = 720*GameView.MAIN_SCALE;

    static BACKGROUND_OFFSET_X = -400;
    static BACKGROUND_OFFSET_Y = -200;
    static BACKGROUND_SCALE = 0.9;
    static CAMERA_LIMIT_LEFT = -400;
    static CAMERA_LIMIT_RIGHT = 365;

    // Class methods
    constructor(ctx) {
        this.ctx = ctx;
        this.camera_location = 0;
    }

    draw(objects) {
        let ctx = this.ctx;
        ctx.resetTransform();
        ctx.clearRect(0,0,GameView.WIDTH, GameView.HEIGHT)

        // Calculate camera location
        this.calculateCameraLocation(objects);

        // draw background image
        this.drawbackground();

        // draw fighters and other assets
        objects.forEach((obj) => {
            ctx.resetTransform();
            ctx.translate(GameView.WIDTH/2, 0);
            ctx.scale(GameView.MAIN_SCALE, GameView.MAIN_SCALE);
            ctx.translate(-this.camera_location, 0);
            obj.draw(ctx);
        })

        // enforce camera limits
        this.enforceCameraLimits(objects);

        // draw health bars
        this.drawHealthBars(objects);
    }

    calculateCameraLocation(objects){
        let sumX = 0;
        objects.forEach((obj) => {
            sumX += obj.pos[0];
        })
        let avgX = sumX / objects.length;
        if (avgX < GameView.CAMERA_LIMIT_LEFT) {
            this.camera_location = GameView.CAMERA_LIMIT_LEFT;
        } else if (avgX > GameView.CAMERA_LIMIT_RIGHT) {
            this.camera_location = GameView.CAMERA_LIMIT_RIGHT;
        } else {
            this.camera_location = avgX;
        }
    }

    drawbackground() {
        this.ctx.scale(GameView.MAIN_SCALE, GameView.MAIN_SCALE)
        this.ctx.translate(GameView.BACKGROUND_OFFSET_X - this.camera_location,
                      GameView.BACKGROUND_OFFSET_Y);
        this.ctx.scale(GameView.BACKGROUND_SCALE, GameView.BACKGROUND_SCALE);
        let backgroundImg = document.getElementById("train-background");
        this.ctx.drawImage(backgroundImg,0,0);
    }

    drawHealthBars(objects){
        let ctx = this.ctx;
        let barThickness = 18;
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

    enforceCameraLimits(objects){
        objects.forEach((obj) => {
            // use body hurtbox to calculate x-limit
            let bodyBox = obj.getHurtBoxes(GameView.MAIN_SCALE)[1]
            let left = bodyBox[0];
            let right = bodyBox[0] + bodyBox[2];

            if (left - this.camera_location*GameView.MAIN_SCALE < -GameView.WIDTH/2){
                let dx = left - this.camera_location*GameView.MAIN_SCALE + GameView.WIDTH/2;
                obj.pos[0] -= dx;
            } else if (right - this.camera_location*GameView.MAIN_SCALE > GameView.WIDTH/2) {
                let dx = right - this.camera_location*GameView.MAIN_SCALE - GameView.WIDTH/2;
                obj.pos[0] -= dx;
            }
        });
    }
}
