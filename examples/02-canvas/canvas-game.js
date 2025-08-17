/*

// Game loop
    function gameLoop() {
      update()
      render()
      requestAnimationFrame(gameLoop)
    }

    // Start game
    gameLoop()

    */

let CanvasgGame = {

    canvas: null,
    ctx: null,
    canvasWidth: 400,
    canvasHeight: 300,

    active: true,
    score: 0,
    targets: [],

    run: (canvas, ctx) => {

        Game.canvas = canvas;
        Game.ctx = ctx;

        Game.active = true;
        Game.score = 0;

        // TODO: start game / animation
        let test = new Game.Target();
        test.init();
        Game.targets.push(test);

        Game.gameLoop();
    },

    gameLoop: () => {

        Game.update();
        Game.draw();

        requestAnimationFrame(Game.gameLoop);

    },

    update: () => {

        if (!Game.active) {
            return;
        }

        Game.targets.forEach((element) => element.update());

    },

    draw: () => {

        Game.ctx.clearRect(0, 0, 400, 300);
        Game.targets.forEach((element) => element.draw(Game.ctx));

    },

    Target: class { 

        constructor () {
            this.size = 0;
            this.posX = 0;
            this.posY = 0;
            this.color = "black";
        }

        init () {

            // Set square target to random size up to 64px
            this.size = Math.floor(Math.random() * 64) + 8;

            // Start off the top of the screen
            this.posX = (Math.floor(Math.random() * (400 - this.size)) + 1);

            // Start randomly somewhere on the width of the screen
            this.posY = 0;

            // Different color for each square
            this.color = `rgb(${(Math.floor(Math.random() * 225))}, ${(Math.floor(Math.random() * 225))}, ${(Math.floor(Math.random() * 225))})`;

        }

        draw (ctx) {

            ctx.fillStyle = this.color;
            ctx.fillRect(this.posX, this.posY, this.size, this.size);

        }

        update () {

            this.posY += 2;

            // Reached bottom of screen; game over
            if ((this.posY + this.size) >= Game.canvasHeight) {
                Game.active = false;
            }

        }

    }

};