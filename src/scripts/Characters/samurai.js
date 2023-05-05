import { SpriteSheet } from "./sprite_sheet";

export class Samurai extends SpriteSheet {

    // Specific constants for Samurai Sprite Sheet
    static imgSrc = "assets/images/Sprite Sheets/Samurai/SpriteSheet.png"; // needs changing
    static frameWidth = 128;
    static frameHeight = 128;

    static animationFrameInfo = {
        idle: {
            framenum: 0,
            originY: 0,
            numFrames: 6,
            frameSpeed: 1
        },
        run: {
            framenum: 0,
            originY: 1,
            numFrames: 8,
            frameSpeed: 0.25
        },
        walk: {
            framenum: 0,
            originY: 2,
            numFrames: 9,
            frameSpeed: 1
        },
        jump: {
            framenum: 0,
            originY: 3,
            numFrames: 9,
            frameSpeed: 1
        },
        attack1: {
            framenum: 0,
            originY: 4,
            numFrames: 4,
            frameSpeed: 1
        },
        attack2: {
            framenum: 0,
            originY: 5,
            numFrames: 5,
            frameSpeed: 1
        },
        attack3: {
            framenum: 0,
            originY: 6,
            numFrames: 4,
            frameSpeed: 1
        }
    };

    // Class Methods:
    constructor(player) {
        super(player, Samurai.imgSrc, Samurai.frameWidth, Samurai.frameHeight);
        this.draw = this.draw.bind(this);
    }

    draw(ctx, pos, scale) {
        ctx.drawImage(this.img,
            this.framePosX,this.framePosY,
            this.frameWidth, this.frameHeight,
            pos[0], pos[1],
            this.frameWidth*scale, this.frameHeight*scale)

        // requestAnimationFrame(this.idle.bind(this))
    }

    idle() {
        this.animate("idle");
    }

    run() {
        this.animate("run");
    }

    animate(name) {
        // increment frame number
        Samurai.animationFrameInfo[name].framenum += Samurai.animationFrameInfo[name].frameSpeed;
        Samurai.animationFrameInfo[name].framenum =
            Samurai.animationFrameInfo[name].framenum %
            Samurai.animationFrameInfo[name].numFrames;

        // define local vars
        let fnum = Math.floor(Samurai.animationFrameInfo[name].framenum);
        let originY = Samurai.animationFrameInfo[name].originY;

        // update frame
        this.framePosX = fnum*this.frameWidth;
        this.framePosY = originY*this.frameHeight
    }
}
