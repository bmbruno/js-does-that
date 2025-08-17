Demo.Canvas = window.Demo.Canvas || {

    drawLogo: () => {

        //
        // Demo 1: draw a logo with primitives
        //

        let canvas = document.getElementById("CanvasDemo");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, 400, 300);

        ctx.lineWidth = 20;

        // Open symbol
        ctx.beginPath();
        ctx.moveTo(100, 105);
        ctx.lineTo(50, 155);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(50, 141);
        ctx.lineTo(100, 190);
        ctx.closePath();
        ctx.stroke();

        // Close symbol
        ctx.beginPath();
        ctx.moveTo(310, 105);
        ctx.lineTo(360, 155);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(360, 141);
        ctx.lineTo(310, 190);
        ctx.closePath();
        ctx.stroke();

        ctx.lineWidth = 30;

        // Bars
        ctx.beginPath();
        ctx.moveTo(165, 85);
        ctx.lineTo(135, 215);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(220, 85);
        ctx.lineTo(190, 215);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(275, 85);
        ctx.lineTo(245, 215);
        ctx.closePath();
        ctx.stroke();

    }

}