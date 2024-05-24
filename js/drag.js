$(function() {
    var movementFactor = window.matchMedia("(max-width: 600px)").matches ? 1.45 : 1;
    var mediaQueryList = window.matchMedia("(max-width: 600px)");

    // Listen to changes in media queries
    mediaQueryList.addListener(function(e) {
        movementFactor = e.matches ? 1.5 : 1;
    });

    // Create Draggable instances for each .basic-window
    $(".basic-window").each(function() {
        var windowElement = this; // The specific .basic-window element

        Draggable.create(windowElement, {
            type: "x,y",
            trigger: $(windowElement).find(".window-drag-area")[0], // Use only the .window-header within this .basic-window as the trigger
            onPress: function() {
                this.startX = this.x;
                this.startY = this.y;
                this.startPointerX = this.pointerX;
                this.startPointerY = this.pointerY;
                // Add overlay on press and change cursor on the fly
                $('body').append('<div id="drag-overlay" style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:99999; cursor: default;"></div>');
                $(windowElement).css('cursor', 'default'); // Set cursor to default during drag
                $(this.target).css('z-index', ++highestZIndex);

            },
            onDrag: function() {
                var newX = this.startX + (this.pointerX - this.startPointerX) * movementFactor;
                var newY = this.startY + (this.pointerY - this.startPointerY) * movementFactor;
                this.target.style.transform = `translate(${newX}px, ${newY}px)`;
            },
            onRelease: function() {
                $('#drag-overlay').remove();
                $(windowElement).css('cursor', ''); // Reset cursor to initial state when drag ends
            }
        });
    });
});