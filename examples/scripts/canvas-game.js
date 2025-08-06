let CanvasGame = {

    canvas: null,
    ctx: null,

    score: 0,

    run: (canvas, ctx) => {

        this.canvas = canvas;
        this.ctx = ctx;
        this.score = 0;

        // TODO: start game / animation
        let test = new CanvasGame.Target();
        test.init();
        test.draw(ctx);

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
            this.posY = 64;

            // Different color for each square
            this.color = `rgb(${(Math.floor(Math.random() * 225))}, ${(Math.floor(Math.random() * 225))}, ${(Math.floor(Math.random() * 225))})`;

        }

        draw (ctx) {

            ctx.fillStyle = this.color;
            ctx.fillRect(this.posX, this.posY, this.size, this.size);

        }

        update () {



        }

    }

};