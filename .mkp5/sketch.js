var sketch = function (s) {

    // Preload assets using p5 *load functions.
    s.preload = function () {
    }

    s.setup = function () {
        s.createCanvas(s.windowWidth, s.windowHeight);
    }

    s.draw = function () {
        s.background(0);
    }

    s.windowResized = function () {
        s.resizeCanvas(s.windowWidth, s.windowHeight);
    }
}

// Create a new canvas running 'sketch' as a child of the element with id 'p5-sketch'.
var p5sketch = new p5(sketch, 'p5-sketch');