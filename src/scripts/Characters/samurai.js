import { GeneralCharacter } from "./general_character";

export class Samurai extends GeneralCharacter {

    // Specific constants for Samurai Sprite Sheet
    static imgSrc = "assets/images/Sprite Sheets/Samurai/SpriteSheet.png";
    static frameWidth = 128;
    static frameHeight = 128;

    static animationFrameInfo = {
        idle: {
            framenum: 0,
            originY: 0,
            frames: Array(6).fill(12),
            hurtboxes: [
                [[54, 57, 18, 14], [51, 71, 27, 40], [52, 109, 26, 17]],
                [[54, 57, 18, 14], [51, 71, 27, 40], [52, 109, 26, 17]],
                [[54, 57, 18, 14], [51, 71, 27, 40], [52, 109, 26, 17]],
                [[54, 57, 18, 14], [51, 71, 27, 40], [52, 109, 26, 17]],
                [[54, 57, 18, 14], [51, 71, 27, 40], [52, 109, 26, 17]],
                [[54, 57, 18, 14], [51, 71, 27, 40], [52, 109, 26, 17]]
            ]
        },
        run: {
            framenum: 0,
            originY: 1,
            frames: Array(8).fill(6),
            hurtboxes: [
                [[79, 60, 15, 15], [58, 69, 30, 42], [57, 104, 23, 22]],
                [[79, 60, 15, 15], [58, 69, 30, 42], [57, 104, 23, 22]],
                [[79, 60, 15, 15], [58, 69, 30, 42], [55, 104, 32, 22]],
                [[79, 60, 15, 15], [58, 69, 30, 42], [53, 104, 37, 22]],
                [[79, 60, 15, 15], [58, 69, 30, 42], [57, 104, 23, 22]],
                [[79, 60, 15, 15], [58, 69, 30, 42], [57, 104, 23, 22]],
                [[79, 60, 15, 15], [58, 69, 30, 42], [55, 104, 32, 22]],
                [[79, 60, 15, 15], [58, 69, 30, 42], [53, 104, 37, 22]]
            ]
        },
        walk: {
            framenum: 0,
            originY: 2,
            frames: [4, 4, 4, 4, 4, 4, 4, 4, 4]
        },
        jump: {
            framenum: 0,
            originY: 3,
            frames: [4, 7, 7, 7, 7, 7, 7, 7, 7],
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
            frames: [6, 8, 6, 5],
            hurtboxes: [
                [[63,65,13,15], [43,79,33,32], [35,109,39,17]],
                [[56,60,12,15], [47,73,24,40], [35,109,39,17]],
                [[61,62,10,10], [44,72,34,29], [35,100,40,26]],
                [[61,62,10,10], [44,72,34,29], [35,100,40,26]]
            ],
            hitboxes: [
                [0,0,0,0],
                [0,0,0,0],
                [84,57,32,41],
                [83,55,15,17]
            ]
        },
        attack3: {
            framenum: 0,
            originY: 5,
            frames: [3, 6, 8, 4, 4],
            hurtboxes: [
                [[51,59,14,11], [51,69,22,39], [44,107,33,19]],
                [[54,59,13,10], [52,69,20,38], [44,108,31,18]],
                [[54,59,13,10], [52,69,20,38], [44,108,31,18]],
                [[55,59,13,13], [55,72,22,34], [44,104,36,22]],
                [[72,65,13,15], [51,79,33,30], [45,108,38,18]]
            ],
            hitboxes: [
                [31,50,42,9],
                [43,27,29,28],
                [56,21,19,32],
                [87,28,11,37],
                [87,75,39,35]
            ]
        },
        hurt: {
            framenum: 0,
            originY: 7,
            frames: [4,4,4],
            hurtboxes: [
                [[46,58,13,14], [46,71,24,37], [43,107,28,19]],
                [[45,57,13,15], [45,71,23,36], [43,103,29,23]],
                [[44,58,13,14], [44,70,24,37], [42,104,31,22]]
            ]
        },
        dead: {
            framenum: 0,
            originY: 8,
            frames: [4,4,6,30,6,1000]
        },
        guard: {
            framenum: 0,
            originY: 9,
            frames: [2,2]
        }
    };

    static POSSIBLE_MOVES = {
        idle:   ["idle", "run", "walk", "jump", "attack1", "attack2", "attack3", "hurt", "dead", "guard"],
        run:    ["idle", "run", "walk", "jump", "attack1", "attack2", "attack3", "hurt", "dead", "guard"],
        walk:   ["idle", "run", "walk", "jump", "attack1", "attack2", "attack3", "hurt", "dead", "guard"],
        jump:   ["idle", "attack1", "attack2", "attack3", "hurt", "dead", "guard"],
        attack1: ["idle", "hurt", "dead"],
        attack2: ["idle", "hurt", "dead"],
        attack3: ["idle", "hurt", "dead"],
        hurt:   ["idle", "hurt", "dead"],
        dead:   [],
        guard:  ["idle", "run", "walk", "jump", "attack1", "attack2", "attack3", "hurt", "dead", "guard"],
    };

    static SINGLE_ACTIONS = ["attack1", "attack2", "attack3", "jump", "hurt"];

    // Class Methods:
    constructor(player) {
        super(player,
            Samurai.imgSrc,
            Samurai.frameWidth,
            Samurai.frameHeight,
            Samurai.animationFrameInfo,
            Samurai.SINGLE_ACTIONS);
        this.possibleMoves = Samurai.POSSIBLE_MOVES;
    }

}
