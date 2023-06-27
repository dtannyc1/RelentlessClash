import { ComputerController } from "./computer_controller";
import { Controller } from "./controller";
import { GamePadController } from "./gamepad_controller";
import { Game } from "./game";
import { GameView } from "./game_view";

export class MainMenu {
    constructor(ctx, controller1ctx, controller2ctx) {
        this.ctx = ctx;
        this.controller1ctx = controller1ctx;
        this.controller2ctx = controller2ctx;
        this.gameStarted = false;
        // this.startGame();
        // this.loadFont();
        this.computerplayer1 = true;
        this.computerplayer2 = true;
        this.difficulty1 = 5;
        this.difficulty2 = 5;

        this.controller1 = new Controller(null, 1, this.controller1ctx);
        this.controller2 = new Controller(null, 2, this.controller2ctx);

        this.bindMethods();

        this.modalHolder = document.querySelector("#modal-holder");
        this.modal = document.querySelector("#modal");
        this.modalContent = document.querySelector("#main-modal-content");
        this.modalButtons = document.querySelector("#modal-buttons");
        this.howToButton = document.querySelector("#how-to-play");
        this.startGameButton = document.querySelector("#start-game");
        this.howToButton.addEventListener("click", this.generateHowToModal);
        this.startGameButton.addEventListener("click", this.startGame);
        this.showingModal = false;
        this.addListeners();
        this.draw();
        // this.startGame();
        this.setupMusic();

        this.generateStartModal();

        this.muteButton = document.querySelector("#mute-button");
        this.muteButton.addEventListener("click", this.toggleMute);
    }

    generateStartModal() {
        let ul = document.createElement('ul');
        ul.classList.add('start-modal')
        let li1 = document.createElement('li');
        let li2 = document.createElement('li');
        let li3 = document.createElement('li');
        li1.innerText = "Welcome to a fast-action, sword-clashing, two-player fighting game!";
        li2.innerText = "Are you ready to challenge your opponent to an epic battle to the death?";
        li3.innerText = "Can you defeat the hyper aggressive level 10 computer player?";
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        this.modalContent.innerHTML = '';
        this.modalContent.appendChild(ul);

        let button1 = document.createElement('div');
        let button2 = document.createElement('div');
        button1.innerText = "Start Game";
        button2.innerText = "How to Play";
        this.modalButtons.innerHTML = '';
        this.modalButtons.appendChild(button1);
        this.modalButtons.appendChild(button2);
        button1.addEventListener("click", () => {
            this.hideModal();
            this.menuMusic.play();
        });
        button2.addEventListener("click", this.generateHowToModal)

        this.showModal();
    }

    generateHowToModal() {
        let ul = document.createElement('ul');
        let li1 = document.createElement('li');
        let li2 = document.createElement('li');
        let li3 = document.createElement('li');
        let li4 = document.createElement('li');
        let li5 = document.createElement('li');
        let li6 = document.createElement('li');
        ul.className = "extra-top-padding"
        li1.innerText = "A/D/⬅️/➡️ - Move Player";
        li2.innerText = "W/⬆️ - Jump";
        li3.innerText = "F/; - Light Attack";
        li4.innerText = "G/L - Medium Attack";
        li5.innerText = "H/K - Heavy Attack";
        li6.innerText = "ESC - Pause Game";
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
        ul.appendChild(li5);
        ul.appendChild(li6);
        this.modalContent.innerHTML = '';
        this.modalContent.appendChild(ul);

        let button1 = document.createElement('div');
        let button2 = document.createElement('div');
        button1.innerText = "Start Game";
        button2.innerText = "Watch Computers Fight";
        this.modalButtons.innerHTML = '';
        let fontsize = 2;
        button1.style.fontSize = `${fontsize}vh`;
        button2.style.fontSize = `${fontsize}vh`;
        this.modalButtons.innerHTML = '';
        this.modalButtons.appendChild(button1);
        this.modalButtons.appendChild(button2);
        button1.addEventListener("click", () => {
            this.hideModal();
            this.menuMusic.play();
        });
        button2.addEventListener("click", this.startComputerGame);

        button1.onmouseover = () => {
            button1.style.fontSize = `${fontsize*1.1}vh`;
        }
        button1.onmouseout = () => {
            button1.style.fontSize = `${fontsize}vh`;
        }

        button2.onmouseover = () => {
            button2.style.fontSize = `${fontsize*1.1}vh`;
        }
        button2.onmouseout = () => {
            button2.style.fontSize = `${fontsize}vh`;
        }

        this.showModal();
    }

    generatePauseModal() {
        let ul = document.createElement('ul');
        let li1 = document.createElement('li');
        let li2 = document.createElement('li');
        li1.innerText = "GAME";
        li2.innerText = "PAUSED";
        ul.appendChild(li1);
        ul.appendChild(li2);
        li1.style.fontSize = "8vh";
        li2.style.fontSize = "8vh";
        ul.style.lineHeight = "9vh";
        this.modalContent.innerHTML = '';
        this.modalContent.appendChild(ul);

        let button1 = document.createElement('div');
        let button2 = document.createElement('div');
        button1.innerText = "Resume Game";
        button2.innerText = "Main Menu";
        this.modalButtons.innerHTML = '';
        this.modalButtons.appendChild(button1);
        this.modalButtons.appendChild(button2);
        button1.addEventListener("click", () => {
            this.game.unpause();
            this.hideModal();
        });
        button2.addEventListener("click", () => {
            delete this.game;
            this.restartMenu();
            this.hideModal();
        })

        this.modal.style.background = "#00000080";
        this.showModal();
    }

    generateEndModal() {
        let ul = document.createElement('ul');
        let li1 = document.createElement('li');
        let li2 = document.createElement('li');
        let li3 = document.createElement('li');
        li1.innerText = "Thank you for playing!";
        if (this.lastWinner) {
            li2.innerText = `The winner is ${this.lastWinner}!`;
        }
        li3.innerText = "Play Again?";
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        this.modalContent.innerHTML = '';
        this.modalContent.appendChild(ul);

        let button1 = document.createElement('div');
        let button2 = document.createElement('div');
        button1.innerText = "Play Again";
        button2.innerText = "Watch Computers Fight";
        let fontsize = 2;
        button1.style.fontSize = `${fontsize}vh`;
        button2.style.fontSize = `${fontsize}vh`;
        this.modalButtons.innerHTML = '';
        this.modalButtons.appendChild(button1);
        this.modalButtons.appendChild(button2);
        button1.addEventListener("click", this.hideModal);
        button2.addEventListener("click", this.startComputerGame);
        button1.onmouseover = () => {
            button1.style.fontSize = `${fontsize*1.1}vh`;
        }
        button1.onmouseout = () => {
            button1.style.fontSize = `${fontsize}vh`;
        }
        button2.onmouseover = () => {
            button2.style.fontSize = `${fontsize*1.1}vh`;
        }
        button2.onmouseout = () => {
            button2.style.fontSize = `${fontsize}vh`;
        }

        this.showModal();
    }

    startComputerGame() {
        this.computerplayer1 = true;
        this.computerplayer2 = true;
        this.difficulty1 = 10;
        this.difficulty2 = 10;
        this.hideModal();
        this.startGame();
    }

    bindMethods(){
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.addGamePad = this.addGamePad.bind(this);
        this.generateStartModal = this.generateStartModal.bind(this);
        this.generateHowToModal = this.generateHowToModal.bind(this);
        this.generatePauseModal = this.generatePauseModal.bind(this);
        this.generateEndModal = this.generateEndModal.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.startComputerGame = this.startComputerGame.bind(this);
        this.mute = this.mute.bind(this);
        this.unmute = this.unmute.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
        this.startGame = this.startGame.bind(this);
    }

    showModal(){
        this.showingModal = true;
        this.modalHolder.style.display = "flex";
    }

    hideModal(){
        this.showingModal = false;
        this.modal.style.background = "#000000";
        this.modalHolder.style.display = "none";
    }

    addListeners() {
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("keyup", this.handleKeyUp);
    }

    removeListeners() {
        window.removeEventListener("keydown", this.handleKeyDown);
        window.removeEventListener("keyup", this.handleKeyUp);
    }

    draw(){
        // console.log('menu running')
        this.ctx.clearRect(0,0,1920,1080);
        this.ctx.fillStyle = "rgb(52,52,255)";
        this.ctx.textAlign = "center";
        this.ctx.font = "30px 'Press Start 2P'";
        let lineHeight = 30;

        this.ctx.fillText("Are you ready to fight?",
                    GameView.WIDTH/2, GameView.HEIGHT*0.22);

        this.ctx.font = "20px 'Press Start 2P'";

        let menuInfo = [
            "H: Join as Player 1",
            "K: Join as Player 2",
            "",
            "W/S: Computer 1 Difficulty Level",
            "Up/Down: Computer 2 Difficulty Level",
            "",
            "Press spacebar to start the game",
            "Press escape to pause the game"
                ]

        for (let i = 0; i < menuInfo.length; i++) {
            this.ctx.fillText(menuInfo[i],
                    GameView.WIDTH*0.5, GameView.HEIGHT*0.32 + i*lineHeight);
        }

        // draw controllers
        this.controller1.draw();
        this.controller2.draw();

        // show if human or computer player
        let ctx = this.controller1ctx;
        ctx.fillStyle = "yellow";
        ctx.textAlign = "left";
        ctx.font = "24px 'Press Start 2P'";
        if (this.computerplayer1) {
            ctx.fillText(`Level ${this.difficulty1} Computer`, 225, 40);
        } else {
            ctx.fillText("Human Player 1", 225, 40);
        }

        ctx = this.controller2ctx;
        ctx.fillStyle = "yellow";
        ctx.textAlign = "right";
        ctx.font = "24px 'Press Start 2P'";
        if (this.computerplayer2) {
            ctx.fillText(`Level ${this.difficulty2} Computer`, 425, 40);
        } else {
            ctx.fillText("Human Player 2", 425, 40);
        }

        if (!this.gameStarted) {
            requestAnimationFrame(this.draw.bind(this));
        }
    }

    handleKeyDown(event) {
        if (this.gameStarted) {
            let button = event.key;
            if (button === "Escape") {
                if (this.game.paused) {
                    this.hideModal();
                    this.game.unpause();
                } else {
                    this.game.pause();
                    this.generatePauseModal();
                }
            }
        } else {
            if (!this.showingModal) {
                let button = event.key;
                if (button === "h") {
                    this.togglePlayer1();
                } else if (button === "k") {
                    this.togglePlayer2();
                } else if (button === " ") {
                    this.startGame();
                } else if (button === "w"){
                    this.difficulty1 += 1;
                    if (this.difficulty1 > 10) {this.difficulty1 = 10;}
                } else if (button === "s"){
                    this.difficulty1 -= 1;
                    if (this.difficulty1 < 1) {this.difficulty1 = 1;}
                } else if (button === "ArrowUp") {
                    this.difficulty2 += 1;
                    if (this.difficulty2 > 10) {this.difficulty2 = 10;}
                } else if (button === "ArrowDown") {
                    this.difficulty2 -= 1;
                    if (this.difficulty2 < 1) {this.difficulty2 = 1;}
                }
            }
        }
    }

    restartMenu(gameEnded = false) {
        // this.addListeners();
        this.gameMusic.pause();
        this.gameMusic.currentTime = 0;
        this.menuMusic.currentTime = 0;
        this.menuMusic.play();

        this.controller1.removeListeners();
        this.controller2.removeListeners();
        this.controller1.addListeners();
        this.controller2.addListeners();
        this.gameStarted = false;
        if (gameEnded) {
            this.generateEndModal();
        }
        this.howToButton.style.display = "flex";
        this.startGameButton.style.display = "flex";
        this.draw();
    }

    startGame() {
        // this.removeListeners();
        this.gameStarted = true;
        this.howToButton.style.display = "none";
        this.startGameButton.style.display = "none";
        this.menuMusic.pause();
        this.menuMusic.currentTime = 0;
        this.gameMusic.currentTime = 0;
        this.gameMusic.play();

        let cont1, cont2;
        if (this.computerplayer1) {
            this.controller1.removeListeners();
            cont1 = new ComputerController(null, 1, this.controller1ctx,
                                                    null, this.difficulty1)
        } else {
            cont1 = this.controller1;
        }

        if (this.computerplayer2) {
            this.controller2.removeListeners();
            cont2 = new ComputerController(null, 2, this.controller2ctx,
                                                    null, this.difficulty2)
        } else {
            cont2 = this.controller2;
        }

        this.game = new Game(this.ctx, cont1, cont2, this);
        this.game.start();
        if (this.muted) {
            this.game.mute();
        }
    }

    stopGame(){
        this.lastWinner = this.game.winner();
        this.game.mute();
        delete this.game;
        this.restartMenu(true);
    }

    togglePlayer1() {
        this.computerplayer1 = !this.computerplayer1;
    }

    togglePlayer2() {
        this.computerplayer2 = !this.computerplayer2;
    }

    addGamePad(gamepad) {
        if (this.controller1.gamepad === undefined) {
            // console.log("player1 assigned controller")
            this.controller1.removeListeners();
            this.computerplayer1 = false;
            this.controller1 = new GamePadController(gamepad, this.controller1ctx);
        } else if (this.controller2.gamepad === undefined) {
            // console.log("player2 assigned controller")
            this.controller2.removeListeners();
            this.computerplayer2 = false;
            this.controller2 = new GamePadController(gamepad, this.controller2ctx);
        }
    }

    setupMusic() {
        this.menuMusic = new Audio("assets/music/Dani Stob - Facing The Enemy.mp3");
        this.menuMusic.loop = true;
        // this.menuMusic.play();

        this.gameMusic = new Audio("assets/music/Dani Stob - Arena Fight.mp3");
        this.gameMusic.loop = true;
        this.muted = false;
    }

    toggleMute() {
        if (this.muted) {
            this.unmute();
            this.muted = false;
        } else {
            this.mute();
            this.muted = true;
        }
    }

    mute() {
        this.menuMusic.volume = 0;
        this.gameMusic.volume = 0;
        this.muteButton.innerHTML = '';
        let img = document.createElement('img');
        img.src = "assets/images/Icons/mute-icon.png";
        this.muteButton.appendChild(img);
        if (this.game){
            this.game.mute();
        }
    }

    unmute() {
        this.menuMusic.volume = 1;
        this.gameMusic.volume = 1;
        this.muteButton.innerHTML = '';
        let img = document.createElement('img');
        img.src = "assets/images/Icons/volume-icon.png";
        this.muteButton.appendChild(img);

        if (this.game) {
            this.game.unmute();
        }
    }
}
