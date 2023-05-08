
export class Train {
    static BACKGROUND_OFFSET_X = -400;
    static BACKGROUND_OFFSET_Y = -200;
    static BACKGROUND_SCALE = 0.9;
    static CAMERA_LIMIT_LEFT = -400;
    static CAMERA_LIMIT_RIGHT = 365;

    static BACKGROUND_IMAGES = [
        ["assets/images/Backgrounds/Postapocalypce4/Bright/bg.png", 0],
        ["assets/images/Backgrounds/Postapocalypce4/Bright/rail&wall.png", 0.25],
        ["assets/images/Backgrounds/Postapocalypce4/Bright/train.png", 0.5],
        ["assets/images/Backgrounds/Postapocalypce4/Bright/columns&floor.png", 0.75]
    ];

    static FOREGROUND_IMAGES = [
        ["assets/images/Backgrounds/Postapocalypce4/Bright/infopost&wires.png", 1],
        ["assets/images/Backgrounds/Postapocalypce4/Bright/wires.png", 1],
        ["assets/images/Backgrounds/Postapocalypce4/Bright/floor&underfloor.png", 1]
    ]

    constructor(ctx) {
        this.ctx = ctx;
        let body = document.querySelector("body");

        for (let i = 0; i < Train.BACKGROUND_IMAGES.length; i++) {
            let img = document.createElement('img');
            img.src = Train.BACKGROUND_IMAGES[i][0];
            img.id = `background-${i}`;
            img.hidden = true;
            body.appendChild(img);
        }

        for (let i = 0; i < Train.FOREGROUND_IMAGES.length; i++) {
            let img = document.createElement('img');
            img.src = Train.FOREGROUND_IMAGES[i][0];
            img.id = `foreground-${i}`;
            img.hidden = true;
            body.appendChild(img);
        }
    }

    drawBackground(camera_location, scale) {
        for (let i = 0; i < Train.BACKGROUND_IMAGES.length; i++){
            let multiplier = Train.BACKGROUND_IMAGES[i][1];
            this.ctx.resetTransform();
            this.ctx.scale(scale, scale)
            this.ctx.translate(Train.BACKGROUND_OFFSET_X - camera_location*multiplier,
                        Train.BACKGROUND_OFFSET_Y);
            this.ctx.scale(Train.BACKGROUND_SCALE, Train.BACKGROUND_SCALE);
            let backgroundImg = document.getElementById(`background-${i}`);
            this.ctx.drawImage(backgroundImg,0,0);
        }
    }

    drawForeground(camera_location, scale) {
        for (let i = 0; i < Train.FOREGROUND_IMAGES.length; i++){
            let multiplier = Train.FOREGROUND_IMAGES[i][1];
            this.ctx.resetTransform();
            this.ctx.scale(scale, scale)
            this.ctx.translate(Train.BACKGROUND_OFFSET_X - camera_location*multiplier,
                        Train.BACKGROUND_OFFSET_Y);
            this.ctx.scale(Train.BACKGROUND_SCALE, Train.BACKGROUND_SCALE);
            let backgroundImg = document.getElementById(`foreground-${i}`);
            this.ctx.drawImage(backgroundImg,0,0);
        }
    }
}