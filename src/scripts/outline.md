
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
