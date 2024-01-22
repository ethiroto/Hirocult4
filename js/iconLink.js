
//HERE ADD THE ICON AND THEN THE WINDOW IDS
let iconLib={"videoPlayer-icon":"video-player"};


//Toggles the minimized class on the window when icon is clicked
function minMax(icon,window){
    $(icon).on('click',function(){
        $(window).toggleClass('minimized');
    });
};

//weird way of getting key values in js
for (iconKey in iconLib) {
    windowValue=iconLib[iconKey];
    //running each one through the function
    minMax('#' + iconKey, '#' + windowValue);
};