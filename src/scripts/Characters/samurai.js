import { GeneralCharacter } from "./general_character";

export class Samurai extends GeneralCharacter {

    // Specific constants for Samurai Sprite Sheet
    static imgSrc = "assets/images/Sprite Sheets/Samurai/SpriteSheet.png"; // needs changing
    static frameWidth = 128;
    static frameHeight = 128;
    static frameSpeed = 0.25;

    static animationFrameInfo = {
        idle: {
            framenum: 0,
            originY: 0,
            frames: [4, 4, 4, 4, 4, 4]
        },
        run: {
            framenum: 0,
            originY: 1,
            frames: [4, 4, 4, 4, 4, 4, 4, 4]
        },
        walk: {
            framenum: 0,
            originY: 2,
            frames: [4, 4, 4, 4, 4, 4, 4, 4, 4]
        },
        jump: {
            framenum: 0,
            originY: 3,
            frames: [4, 4, 4, 4, 4, 4, 4, 4, 4]
        },
        attack1: {
            framenum: 0,
            originY: 4,
            frames: [2, 2, 3, 3] //10
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
}
