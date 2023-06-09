
export class War {
    static BACKGROUND_OFFSET_X = -400;
    static BACKGROUND_OFFSET_Y = -150;
    static BACKGROUND_SCALE = 0.85;
    static CAMERA_LIMIT_LEFT = -400;
    static CAMERA_LIMIT_RIGHT = 190;
    static FLOOR = 240;

    static BACKGROUND_IMAGES = [
        ["assets/images/Backgrounds/War3/Bright/sky_sun.png", 0],
        ["assets/images/Backgrounds/War3/Bright/houses3.png", 0.25],
        ["assets/images/Backgrounds/War3/Bright/houses2.png", 0.5],
        ["assets/images/Backgrounds/War3/Bright/trees.png", 0.75],
        ["assets/images/Backgrounds/War3/Bright/house&fountain.png", 0.75]
    ];

    static FOREGROUND_IMAGES = [
        ["assets/images/Backgrounds/War3/Bright/fence.png", 1],
        ["assets/images/Backgrounds/War3/Bright/road.png", 1]
    ]

    constructor(ctx) {
        this.ctx = ctx;
        this.FLOOR = War.FLOOR;
        this.CAMERA_LIMIT_LEFT = War.CAMERA_LIMIT_LEFT;
        this.CAMERA_LIMIT_RIGHT = War.CAMERA_LIMIT_RIGHT;

        let body = document.querySelector("body");

        this.backgroundImgs = [];
        this.foregroundImgs = [];
        for (let i = 0; i < War.BACKGROUND_IMAGES.length; i++) {
            let img = document.createElement('img');
            img.src = War.BACKGROUND_IMAGES[i][0];
            img.id = `background-${i}`;
            img.hidden = true;
            body.appendChild(img);
            this.backgroundImgs.push(img);
        }

        for (let i = 0; i < War.FOREGROUND_IMAGES.length; i++) {
            let img = document.createElement('img');
            img.src = War.FOREGROUND_IMAGES[i][0];
            img.id = `foreground-${i}`;
            img.hidden = true;
            body.appendChild(img);
            this.foregroundImgs.push(img);
        }
    }

    drawBackground(camera_location, scale) {
        this.ctx.resetTransform();

        for (let i = 0; i < War.BACKGROUND_IMAGES.length; i++){
            let multiplier = War.BACKGROUND_IMAGES[i][1];
            let sx = -scale*(War.BACKGROUND_OFFSET_X - camera_location*multiplier);
            let sy = -scale*(War.BACKGROUND_OFFSET_Y);
            let sw = 720/War.BACKGROUND_SCALE/scale;
            let sh = 540/War.BACKGROUND_SCALE/scale;
            this.ctx.drawImage(this.backgroundImgs[i],
                sx, sy, sw, sh,
                0, 0, 720, 540);
        }
    }

    drawForeground(camera_location, scale) {
        this.ctx.resetTransform();

        for (let i = 0; i < War.FOREGROUND_IMAGES.length; i++){
            let multiplier = War.FOREGROUND_IMAGES[i][1];
            let sx = -(War.BACKGROUND_OFFSET_X - camera_location*multiplier)/scale;
            let sy = -(War.BACKGROUND_OFFSET_Y)/scale;
            let sw = 720/War.BACKGROUND_SCALE/scale;
            let sh = 540/War.BACKGROUND_SCALE/scale;
            this.ctx.drawImage(this.foregroundImgs[i],
                sx, sy, sw, sh,
                0, 0, 720, 540);
        }
    }
}
