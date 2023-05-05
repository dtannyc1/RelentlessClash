
export class GameView {
    constructor(ctx) {
        console.log("Game View Made")

        this.ctx = ctx;
    }

    draw(objects) {
        let ctx = this.ctx;
        ctx.clearRect(0,0,GameView.WIDTH, GameView.HEIGHT)
        objects.forEach((obj) => {
            obj.draw(ctx);
        })
    }

    static WIDTH = 1080;
    static HEIGHT = 720;
}
