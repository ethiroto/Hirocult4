var normalSongNameArray = ['sugar', 'finally_alone', 'canAnybody', 'makefun', 'thousand', 'jawless'];

function clearDirectory() {
    $('.directory-content').empty(); // Clear the directory
}

function siteWork(songArray) {
    let directory = $('.directory-content');

    clearDirectory();
    songNameArray = songArray;

    // Append song divs to the directory
    songNameArray.forEach(function(songName, index) {
        var songDiv = $('<div class="dir-item" id="song' + (index + 1) + '"><img src="../img/wincd.png" alt=""><span>' + songName + '.mp3' + '</span></div>');
        
        // Attach click handler to each song div
        songDiv.on('click', createClickHandler(index + 1, songName));
        
        // Add the song div to the directory
        directory.append(songDiv);
    });
}

function createClickHandler(songNumber, songName) {
    return function() {
        var songSent = String(songNumber);
        var songNameSent = songName;

        var directoryEvent = new CustomEvent('directoryClick', {
            detail: {
                'songSent': songSent,
                'songNameSent': songNameSent
            }
        });

        window.parent.dispatchEvent(directoryEvent);
    };
}

siteWork(normalSongNameArray);
