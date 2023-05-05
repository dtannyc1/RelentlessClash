
export class SpriteSheet {
    constructor(player, src, frameWidth, frameHeight) {
        let body = document.querySelector("body");
        let img = document.createElement('img');
        img.src = src;
        img.id = `${player.name}-sprite`;
        img.hidden = true;
        body.appendChild(img);
        this.player = player;

        this.img = document.getElementById(img.id);

        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;

        this.framePosX = 0;
        this.framePosY = 0;
    }
}
