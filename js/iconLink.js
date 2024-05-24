let apps = [
    { icon: "videoPlayer-icon", window: "video-player", state: "open" },
    { icon: "music-player-icon", window: "music-player-window", state: "open"},
    { icon: "unreleased-music-icon", window: "music-directory-window", state: "closed" },
    { icon: "video-folder-icon", window: "video-directory-window", state: "closed" },
    { icon: "about-icon",window:"about-window",state:"closed"},
    {icon:"alert-bulletin-icon",window:"bulletin-window",state:"open"},
    {icon:"secret-music-icon", window:"secret-music-directory-window",state:"closed"},
    {icon:"shop-icon",window:"shop-window",state:'closed'}
];

highestZIndex=0;

$(document).ready(function() {
    // Generalized event delegation for handling clicks on app icons and desktop items
    $('body').on('click', '.bottom-bar-item, .desktop-item', function() {
        // Get the id of the clicked icon
        var clickedIconId = this.id;
        // Find the corresponding app object
        var appObj = apps.find(app => app.icon === clickedIconId);
        if (appObj) {
            toggleWindow(appObj);
        }
    });

    for (let i in apps){
        let application=apps[i];
        if (application.state==='closed'){
            //have to have a special conditional for shop window because otherwise it won't load in time
            if(application.window==='shop-window'){
                let iframe=$('#shop-window').find('iframe');
                console.log(iframe);
                iframe.attr('src', iframe.attr('src'));
            }
            $('#'+application.window).addClass('minimized');
        }else{
            $('#'+application.window).removeClass('minimized');
        }
    };

    function toggleWindow(appObj){
        // Toggle the 'minimized' class on the corresponding window
        $('#' + appObj.window).toggleClass('minimized');
        // Increment and set the highest z-index for the current window
        highestZIndex++;
        $('#' + appObj.window).css('z-index', highestZIndex);
        // Update the state of the app
        appObj.state = appObj.state === 'open' ? 'closed' : 'open';
    }

//Linking the video and music directory clicks to toggle the windows
    window.addEventListener('directoryClick', function(e) {

        if (apps[1].state==="closed"){
            toggleWindow(apps[1]);
        }
      });

    window.addEventListener('videoDirectoryClick', function(e) {

    if (apps[0].state==="closed"){
        toggleWindow(apps[0]);
    }
    });

    window.addEventListener('secretDirectoryClick', function(e) {

        if (apps[1].state==="closed"){
            toggleWindow(apps[1]);
        }
      });
      


//WINDOW TOP BUTTON CONTROLS
    //close window
    $('.window-controls').on('click', '.close', function closeWindow() {
        // Find the closest ancestor with class 'basic-window' and toggle its class
        var parentWindowId = $(this).closest('.basic-window').attr('id');
        identifiedApp = apps.find(app => app.window === parentWindowId);
        toggleWindow(identifiedApp);
        thisWindow=$(this).closest('.basic-window')
        let iframe=thisWindow.find('iframe');
        iframe.attr('src', iframe.attr('src'));
    });

    //MINIMIZE
    $('.window-controls').on('click', '.minimize', function() {
        var parentWindowId = $(this).closest('.basic-window').attr('id');
        identifiedApp = apps.find(app => app.window === parentWindowId);
        toggleWindow(identifiedApp);
    });

});

