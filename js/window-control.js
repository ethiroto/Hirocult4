/* THESE WERE MOVED TO ICON LINK
//close window
$('.window-controls').on('click', '.close', function() {
    console.log('top button clicked');
    // Find the closest ancestor with class 'basic-window' and toggle its class
    thisWindow=$(this).closest('.basic-window')
    thisWindow.toggleClass('minimized');
    let iframe=thisWindow.find('iframe');
    iframe.attr('src', iframe.attr('src'));
});

//MINIMIZE
$('.window-controls').on('click', '.minimize', function() {
    thisWindow=$(this).closest('.basic-window')
    thisWindow.toggleClass('minimized');
});


*/