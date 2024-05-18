
    /* Delay the initialization
    $(function() {
        // Initialize draggable with handle
        $('.basic-window').draggable({ handle: '.window-header' ,cursorAt: {}}); //ADJUST TOP AND LEFT TO ADJUST THE DRAG POINT FOR MOBILE


        // Increase z-index on drag
        var highestZIndex = 0;
        $('.basic-window').on("drag", function() {
            highestZIndex++;
            $(this).css('z-index', highestZIndex);
        });

        // Manage drag overlay
        $('.basic-window').draggable({
            start: function(event, ui) {
                $('body').append('<div id="drag-overlay" style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:99999;"></div>');
            },
            stop: function(event, ui) {
                $('#drag-overlay').remove();
            }
        });

});
*/
