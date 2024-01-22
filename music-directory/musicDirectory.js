var testBtn=$('.test-btn');


var parentDocument = $(window.parent.document);

var videoIframe = parentDocument.find('#video-player-iframe').contents();

testBtn.on('click', function(){
    console.log('btn clicked');
    videoIframe.find('body').css('background-color','#a2bb86');
});

