$(function() {
    var movementFactor = window.matchMedia("(max-width: 600px)").matches ? 1.3 : 1;
    var mediaQueryList = window.matchMedia("(max-width: 600px)");

    mediaQueryList.addListener(function(e) {
        movementFactor = e.matches ? 1.3 : 1;
    });

    Draggable.create(".basic-window", {
        type: "x,y",
        minimumMovement: 20,
        onDrag: function() {
            var newX = this.startX + (this.pointerX - this.startPointerX) * movementFactor;
            var newY = this.startY + (this.pointerY - this.startPointerY) * movementFactor;
            this.target.style.transform = `translate(${newX}px, ${newY}px)`;
        },
        onPress: function() {
            this.startX = this.x;
            this.startY = this.y;
            this.startPointerX = this.pointerX;
            this.startPointerY = this.pointerY;
        }
    });
});

