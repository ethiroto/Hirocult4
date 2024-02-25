$(function(){
    $('.basic-window').draggable({handle:'.window-header'});

});


var highestZIndex = 0;
$('.basic-window').on("drag", function(){
    highestZIndex++;
    $(this).css('z-index',highestZIndex)
});


$(function() {
    $('.basic-window').draggable({
        start: function(event, ui) {
            $('body').append('<div id="drag-overlay" style="position:fixed;top:50;left:50;width:100%;height:100%;z-index:99999;"></div>');
        },
        stop: function(event, ui) {
            $('#drag-overlay').remove();
        }
    });
});
