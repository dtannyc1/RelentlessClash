
export class GameView {
    static MAIN_SCALE = 0.75;
    static WIDTH = 960*GameView.MAIN_SCALE;
    static HEIGHT = 720*GameView.MAIN_SCALE;

    constructor(ctx) {
        this.ctx = ctx;
        console.log("Game View Made")
    }

    draw(objects) {
        let ctx = this.ctx;
        ctx.resetTransform();
        ctx.clearRect(0,0,GameView.WIDTH, GameView.HEIGHT)

        // draw background image
        ctx.scale(GameView.MAIN_SCALE, GameView.MAIN_SCALE)
        ctx.translate(-350,-200);
        ctx.scale(0.9, 0.9);
        let backgroundImg = document.getElementById("train-background");
        ctx.drawImage(backgroundImg,0,0);

        // draw fighters and other assets
        objects.forEach((obj) => {
            ctx.resetTransform();
            ctx.scale(GameView.MAIN_SCALE, GameView.MAIN_SCALE)
            obj.draw(ctx);
        })

        requestAnimationFrame(this.draw.bind(this, objects))
    }
}
