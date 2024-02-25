$(function() {
    // Define your scale factor here. Adjust this based on your actual scaling.
    var scaleFactor = 1.2; // Example: 80% scale

    var highestZIndex = 0;
    $('.basic-window').each(function() {
        var currentZIndex = parseInt($(this).css('z-index'), 10);
        highestZIndex = currentZIndex > highestZIndex ? currentZIndex : highestZIndex;
    });

    $('.basic-window').draggable({
        handle: '.window-header',
        start: function(event, ui) {
            highestZIndex++;
            $(this).css('z-index', highestZIndex);

            // Append overlay for better drag handling
            $('body').append('<div id="drag-overlay" style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:99999;"></div>');

            // Store the original position for later calculations in the drag event
            $(this).data('originalPosition', ui.position);
        },
        drag: function(event, ui) {
            // Retrieve the original position stored in the start event
            var originalPosition = $(this).data('originalPosition');

            // Calculate the adjusted position based on the scale factor
            var deltaX = ui.position.left - originalPosition.left -100;
            var deltaY = ui.position.top - originalPosition.top;

            ui.position.left = originalPosition.left + deltaX / scaleFactor;
            ui.position.top = originalPosition.top + deltaY / scaleFactor;
        },
        stop: function(event, ui) {
            // Remove the overlay after dragging stops
            $('#drag-overlay').remove();
        }
    });
});

