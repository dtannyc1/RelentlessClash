
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

        requestAnimationFrame(this.draw.bind(this, objects))
    }
}
