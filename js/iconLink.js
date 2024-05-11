let apps = [
    { icon: "videoPlayer-icon", window: "video-player", state: "open" },
    { icon: "music-player-icon", window: "music-player-window", state: "closed" },
    { icon: "unreleased-music-icon", window: "music-directory-window", state: "closed" },
    { icon: "video-folder-icon", window: "video-directory-window", state: "closed" },
    { icon: "about-icon",window:"about-window",state:"closed"},
    {icon:"alert-bulletin-icon",window:"bulletin-window",state:"closed"}
];


$(document).ready(function() {
    // Generalized event delegation for handling clicks on app icons and desktop items
    $('body').on('click', '.bottom-bar-item, .desktop-item', function() {
        // Get the id of the clicked icon
        var clickedIconId = this.id;
        // Find the corresponding app object
        var appObj = apps.find(app => app.icon === clickedIconId);
        if (appObj) {
            // Toggle the 'minimized' class on the corresponding window
            $('#' + appObj.window).toggleClass('minimized');
            // Increment and set the highest z-index for the current window
            highestZIndex++;
            $('#' + appObj.window).css('z-index', highestZIndex);
            // Update the state of the app
            appObj.state = appObj.state === 'open' ? 'closed' : 'open';
        }
    });

    for (let i in apps){
        let application=apps[i];
        if (application.state==='closed'){
            $('#'+application.window).addClass('minimized');
        }else{
            $('#'+application.window).removeClass('minimized');
        }
    };
});

