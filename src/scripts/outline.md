
Game (running game)
    Game.CANVAS_WIDTH
    Game.CANVAS_HEIGHT

Player (User methods) extends Movable
    #collidesWith(object)
    #updateFrame()
    #addController(id)
    this.shieldStrength // radius of shield
    this.jumping  // single jump boolean
    this.jumping2 // double jumps boolean

    #aAttack
        - checks what directions are linked
    #bAttack
    #shield
    #jump

Movable
    #move()
    #draw(ctx)
    this.pos
    this.vel
    this.spriteSheet?

GameView (rendering)
    this.Game
    this.canvas
    #render()

Controller (inputs)
    constructor(id)
    listener & debouncer?




- Edit Sprite Sheets x2
- Create static hashes in classes to define animations
    - {
        idle: {
            framenum: 0,
            originY: 0,
            numFrames: 6
        },
        running: {
            framenum: 0,
            originY: 1,
            numFrames: 8
        },
        walking: {
            framenum: 0,
            originY: 2,
            numFrames: 9
        },
        jumping: {
            framenum: 0,
            originY: 3,
            numFrames: 9
        },
        attack1: {
            framenum: 0,
            originY: 4,
            numFrames: 4
        },
        attack2: {
            framenum: 0,
            originY: 5,
            numFrames: 5
        },
        attack3: {
            framenum: 0,
            originY: 6,
            numFrames: 4
        }
      }
