
$(function() {
    // Initialize the movement factor based on the initial screen width
    var movementFactor = window.matchMedia("(max-width: 600px)").matches ? 1.2 : 1;

    // Listen for changes in the viewport width and adjust the movement factor
    var mediaQueryList = window.matchMedia("(max-width: 600px)");
    mediaQueryList.addListener(function(e) {
        movementFactor = e.matches ? 1.3 : 1;
    });

    // Initialize GSAP Draggable
    Draggable.create(".basic-window", {
        type: "x,y",
        onDrag: function() {
            // Calculate the new position based on the mouse movement and the movement factor
            var newX = this.startX + (this.pointerX - this.startPointerX) * movementFactor;
            var newY = this.startY + (this.pointerY - this.startPointerY) * movementFactor;

            // Apply the calculated position
            this.target.style.transform = `translate(${newX}px, ${newY}px)`;
        },
        onPress: function() {
            this.startX = this.x;  // Capture the starting x position
            this.startY = this.y;  // Capture the starting y position
            this.startPointerX = this.pointerX;  // Capture the starting pointer x position
            this.startPointerY = this.pointerY;  // Capture the starting pointer y position
        }
    });
});

