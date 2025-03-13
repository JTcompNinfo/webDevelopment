function init() {
    const canvas = document.getElementById("canvas");
    canvas.addEventListener("mouseover", handelMouseMove, false);
    const context =  canvas.getContext("2d");  // get drawing area

    let started = false

    function handelMouseMove(e) {
        let x, y; 

        if (e.clientX               // If x postion is specified ...
            || e.clientX == 0       // ... and is not 0
        ) {
            x = e.clientX;          // remeamber the x position
            y = e.clientY           // remeamber the y position
        }

        if (!started) {             // If path not yet started ...
            context.beginPath();    // ... start path and ...
            context.moveTo(x, y);   // ... move to position
            started = true;         //notice tht path has started
        } else {                    // if path has started
            context.lineTo(x, y);   // move to psotion
            context.stroke();       // and draw connection
        }
    }
}


document.addEventListener("DOMContentLoaded", init);