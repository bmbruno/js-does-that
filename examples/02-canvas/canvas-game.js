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
    difficultyTime: 0,

    previousTime: 0,

    run: (canvas, ctx) => {

        Game.canvas = canvas;
        Game.ctx = ctx;

        Game.active = true;
        Game.score = 0;

        // Delay first spawn so player has time to get oriented
        Game.timeSinceLastSpawn = (Game.timeBetweenSpawns * -1);

        Game.gameLoop(0);

        Game.canvas.addEventListener('mousedown', (e) => Game.handleMouseClick(e) );
    },

    gameLoop: (timestamp) => {

        if (!Game.active) {

            // TODO: move this to canvas text in gameover() function
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

        console.log("Game over!");

        // Draw text in center of screen (measureText function helps with this)
        Game.ctx.fillStyle = "black";
        Game.ctx.font = "36px sans-serif";
        let text = "Game Over!";
        let measure = Game.ctx.measureText(text);
        Game.ctx.fillText(text, (Game.canvas.width / 2) - (measure.width / 2), 125);

        Game.targets = [];

    },

    update: (delta) => {

        Game.difficultyTime += delta;

        // Increase the spawn rate every so often
        if (Game.difficultyTime > 5000) {
            Game.timeBetweenSpawns -= 150;
            Game.difficultyTime = 0;
        }

        // Spawn new targets based on a cooldown
        Game.timeSinceLastSpawn += delta;

        if (Game.timeSinceLastSpawn > Game.timeBetweenSpawns) {

            Game.timeSinceLastSpawn = 0;
            Game.targets.push(new Game.Target());

        }

        // TODO: Remove any inactive targets from array
        Game.targets.filter((element, index, arr) => {
 
            if (!element.active) {
                arr.splice(index, 1);
                return true;
            }

            return false;

        });

        // Update all targets
        Game.targets.forEach((element) => element.update(delta));

    },

    draw: () => {

        Game.ctx.clearRect(0, 0, Game.canvasWidth, Game.canvasHeight);
        Game.targets.forEach((element) => element.draw(Game.ctx));

    },

    handleMouseClick: (e) => {

        console.log(`MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`);

        Game.targets.forEach((target) => target.handleClick(e.offsetX, e.offsetY));

    },

    Target: class { 

        constructor () {
            this.size = 0;
            this.posX = 0;
            this.posY = 0;
            this.color = "black";
            this.active = true;
            this.speed = Math.floor(Math.random() * 2) + 1;

            // Set square target to random size up to 64px
            this.size = Math.floor(Math.random() * 64) + 32;

            // Start randomly somewhere on the width of the screen
            this.posX = (Math.floor(Math.random() * (400 - this.size)) + 1);
            
            // Start at the top of the screen
            this.posY = 0;

            // Different color for each square
            this.color = `rgb(${(Math.floor(Math.random() * 225))}, ${(Math.floor(Math.random() * 225))}, ${(Math.floor(Math.random() * 225))})`;

        }

        draw (ctx) {

            if (!this.active)
                return;

            ctx.fillStyle = this.color;
            ctx.fillRect(this.posX, this.posY, this.size, this.size);

        }

        update (delta) {

            if (!this.active)
                return;

            this.posY += this.speed;

            // Reached bottom of screen; game over
            if ((this.posY + this.size) >= Game.canvasHeight) {
                Game.active = false;
            }

        }

        handleClick (mouseX, mouseY) {

            if (this.posX <= mouseX &&
                this.posY <= mouseY &&
                (this.posX + this.size) >= mouseX &&
                (this.posY + this.size) >= mouseY
            ) {
               // HIT!
               this.active = false;
               Game.score += 1;
            }

        }

    }

};