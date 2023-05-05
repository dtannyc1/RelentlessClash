
export class GameView {
    static WIDTH = 960;
    static HEIGHT = 720;

    constructor(ctx) {
        this.ctx = ctx;
        console.log("Game View Made")
    }

    draw(objects) {
        let ctx = this.ctx;
        ctx.resetTransform();
        ctx.clearRect(0,0,GameView.WIDTH, GameView.HEIGHT)

        ctx.translate(-350,-200);
        ctx.scale(0.9, 0.9);
        let backgroundImg = document.getElementById("train-background");
        ctx.drawImage(backgroundImg,0,0);

        objects.forEach((obj) => {
            ctx.resetTransform();
            obj.draw(ctx);
        })

        requestAnimationFrame(this.draw.bind(this, objects))
    }
}
