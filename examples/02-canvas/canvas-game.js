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

let Game = {

    canvas: null,
    ctx: null,
    canvasWidth: 400,
    canvasHeight: 300,

    active: true,
    score: 0,
    targets: [],
    timeBetweenSpawns: 1500,
    timeSinceLastSpawn: 0,

    previousTime: 0,


    run: (canvas, ctx) => {

        Game.canvas = canvas;
        Game.ctx = ctx;

        Game.active = true;
        Game.score = 0;

        // Delay first spawn so player has time to get oriented
        Game.timeSinceLastSpawn = (Game.timeBetweenSpawns * -1);

        Game.gameLoop(0);
    },

    gameLoop: (timestamp) => {

        if (!Game.active) {

            // TODO: move this to canvas text in gameover() function
            alert("Game over!");
            Game.gameover();
            return;
        }

        // Calculate elapsed time since last frame was drawn
        let delta = timestamp - Game.previousTime;
        Game.previousTime = timestamp;

        Game.update(delta);
        Game.draw();

        requestAnimationFrame(Game.gameLoop);

    },

    gameover: () => {

        Game.targets = [];

    },

    update: (delta) => {

        // Spawn new targets based on a cooldown
        Game.timeSinceLastSpawn += delta;

        if (Game.timeSinceLastSpawn > Game.timeBetweenSpawns) {

            Game.timeSinceLastSpawn = 0;
            Game.targets.push(new Game.Target());

        }

        // Update all targets
        Game.targets.forEach((element) => element.update(delta));

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

            // Set square target to random size up to 64px
            this.size = Math.floor(Math.random() * 64) + 16;

            // Start randomly somewhere on the width of the screen
            this.posX = (Math.floor(Math.random() * (400 - this.size)) + 1);
            
            // Start at the top of the screen
            this.posY = 0;

            // Different color for each square
            this.color = `rgb(${(Math.floor(Math.random() * 225))}, ${(Math.floor(Math.random() * 225))}, ${(Math.floor(Math.random() * 225))})`;

        }

        draw (ctx) {

            ctx.fillStyle = this.color;
            ctx.fillRect(this.posX, this.posY, this.size, this.size);

        }

        update (delta) {

            this.posY += 1;

            // Reached bottom of screen; game over
            if ((this.posY + this.size) >= Game.canvasHeight) {
                Game.active = false;
            }

            // Handle mouse input

        }

    }

};