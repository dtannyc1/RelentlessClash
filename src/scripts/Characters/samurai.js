import { GeneralCharacter } from "./general_character";

export class Samurai extends GeneralCharacter {

    // Specific constants for Samurai Sprite Sheet
    static imgSrc = "assets/images/Sprite Sheets/Samurai/SpriteSheet.png"; // needs changing
    static frameWidth = 128;
    static frameHeight = 128;
    static frameSpeed = 0.25;
    static idleHurtBox = [[54, 57, 18, 14],
                          [51, 71, 27, 40],
                          [52, 109, 26, 17]];
    static runHurtBox1 = [[79, 60, 15, 15],
                        [58, 69, 30, 42],
                        [57, 104, 23, 22]];
    static runHurtBox2 = [[79, 60, 15, 15],
                        [58, 69, 30, 42],
                        [55, 104, 32, 22]];
    static runHurtBox3 = [[79, 60, 15, 15],
                        [58, 69, 30, 42],
                        [53, 104, 37, 22]];

    static animationFrameInfo = {
        idle: {
            framenum: 0,
            originY: 0,
            frames: [4, 4, 4, 4, 4, 4],
            hurtboxes: Array(6).fill(Samurai.idleHurtBox)
        },
        run: {
            framenum: 0,
            originY: 1,
            frames: [4, 4, 4, 4, 4, 4, 4, 4],
            hurtboxes: [Samurai.runHurtBox1,Samurai.runHurtBox1,
                        Samurai.runHurtBox2, Samurai.runHurtBox3,
                        Samurai.runHurtBox1,Samurai.runHurtBox1,
                        Samurai.runHurtBox2,Samurai.runHurtBox3]
        },
        walk: {
            framenum: 0,
            originY: 2,
            frames: [4, 4, 4, 4, 4, 4, 4, 4, 4]
        },
        jump: {
            framenum: 0,
            originY: 3,
            frames: [4, 8, 8, 8, 8, 8, 8, 8, 8],
            hurtboxes: [
                [[71,58,17,15], [58,71,27,38], [53,110,36,16]],
                [[60,65,16,14], [57,77,22,34], [54,109,32,17]],
                [[62,68,14,14], [55,80,22,30], [54,110,32,16]],
                [[64,48,13,14], [56,59,21,35], [53,92,20,28]],
                [[64,53,13,14], [59,62,20,30], [61,89,28,22]],
                [[65,53,12,14], [58,63,23,29], [61,93,28,20]],
                [[64,55,14,14], [54,67,22,32], [48,99,23,21]],
                [[65,80,12,15], [53,86,26,27], [57,110,27,16]],
                [[65,80,12,15], [53,86,26,27], [57,110,26,16]]
            ]
        },
        attack1: {
            framenum: 0,
            originY: 4,
            frames: [2, 2, 3, 3],
            hurtboxes: [
                [[48,60,16,15], [43,73,27,36], [34,108,41,18]],
                [[48,60,16,15], [43,73,27,36], [34,108,41,18]],
                [[59,60,15,15], [42,72,42,38], [34,108,41,18]],
                [[58,60,17,15], [41,72,34,36], [36,109,40,18]]
            ],
            hitboxes: [
                [0,0,0,0],
                [0,0,0,0],
                [83,68,38,35],
                [79,67,37,11]
            ]
        },
        attack2: {
            framenum: 0,
            originY: 6,
            frames: [6, 7, 4, 3] // 20
        },
        attack3: {
            framenum: 0,
            originY: 5,
            frames: [3, 6, 8, 4, 4] // 24
        }
    };

    static SINGLE_ACTIONS = ["attack1", "attack2", "attack3", "jump"];

    // Class Methods:
    constructor(player) {
        super(player,
            Samurai.imgSrc,
            Samurai.frameWidth,
            Samurai.frameHeight,
            Samurai.animationFrameInfo,
            Samurai.SINGLE_ACTIONS);
    }

    draw(ctx, pos, scale) {
        ctx.translate(pos[0], pos[1])
        if (this.player.xFacing === -1) {
            ctx.scale(-1,1);
        }

        ctx.drawImage(this.img,
            this.framePosX,this.framePosY,
            this.frameWidth, this.frameHeight,
            -this.frameWidth*scale/2, 0,
            this.frameWidth*scale, this.frameHeight*scale)

        ctx.scale(scale, scale)
        ctx.translate(-128/2,0);

        // render hurtboxes
        ctx.fillStyle = "#00ff0025";
        ctx.fillRect(...this.headHurtBox)
        ctx.fillRect(...this.bodyHurtBox)
        ctx.fillRect(...this.legsHurtBox)

        // render hitbox
        ctx.fillStyle = "#ff000025";
        ctx.fillRect(...this.hitBox)
    }
}
