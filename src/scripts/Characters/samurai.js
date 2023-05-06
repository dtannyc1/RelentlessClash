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
            numFrames: 6,
            frameSpeed: 1
        },
        run: {
            framenum: 0,
            originY: 1,
            numFrames: 8,
            frameSpeed: 1
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
            frameSpeed: 2
        },
        attack3: {
            framenum: 0,
            originY: 6,
            numFrames: 4,
            frameSpeed: 1
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
