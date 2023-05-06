
export class GeneralCharacter {
    constructor(player, src, frameWidth, frameHeight, animationFrameInfo, singleActions) {
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
        this.animationFrameInfo = animationFrameInfo;
        this.singleActions = singleActions;

        this.framePosX = 0;
        this.framePosY = 0;

        this.draw = this.draw.bind(this);
        this.currentAction = this.currentAction.bind(this);
        this.stopAction = this.stopAction.bind(this);
        this.animate = this.animate.bind(this);
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
    }

    currentAction(name){
        // console.log(this.prototype)
        if (this.singleActions.includes(name)) {
            this.animate(name, true);
        } else {
            this.animate(name);
        }
    }

    stopAction(name){
        // reset animation
        this.animationFrameInfo[name].framenum = 0;
        this.player.currentAction = "idle";
    }

    animate(name, playOnce = false) {
        // increment frame number
        this.animationFrameInfo[name].framenum += 1;

        let frameNum = this.animationFrameInfo[name].framenum;
        let totalFrames = this.animationFrameInfo[name].frames.reduce((a,b) => a + b, 0);
        if (playOnce && frameNum >= totalFrames){
            this.stopAction(name);
        } else {
            frameNum = (frameNum + totalFrames) % totalFrames;

            // define local vars
            let sum = 0;
            let fnum;

            for (let i = 0; i < this.animationFrameInfo[name].frames.length; i++) {
                let dur = this.animationFrameInfo[name].frames[i];
                sum += dur;
                if (sum > frameNum) {
                    fnum = i;
                    break;
                }
            }

            let originY = this.animationFrameInfo[name].originY;

            // update frame
            this.framePosX = fnum*this.frameWidth;
            this.framePosY = originY*this.frameHeight;
        }
    }
}