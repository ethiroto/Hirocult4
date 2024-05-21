var bottomBarContentHtml =$('.bottom-bar-content').html();
var bottomBarContent=$('.bottom-bar-content');
var basicWindow =$('.basic-window');
$(document).ready(function() {

    //Find the existing apps and html
    
    // Function to apply changes based on window size

    function applyChangesForWindowSize() {
      var windowWidth = $(window).width();
      if (windowWidth <= 600) {
        mobileMode();
      } else {
        desktopMode();
      }
    }
  
    // Apply changes on initial load
    applyChangesForWindowSize();
    
  
    // Re-apply changes on window resize
    $(window).resize(function() {
      applyChangesForWindowSize();
    });
});

  function mobileMode(){
    console.log('going mobile');
    bottomBarContent.html('<btn class="bottom-bar-item" id="apps-icon"><img src="img/folder.png" alt="">Apps</btn>');
    isMobile=true;
    console.log(mobileMode);
    toggleStyles();

  }
  function desktopMode(){
    bottomBarContent.html(bottomBarContentHtml)
    isMobile=false;
    console.log(mobileMode);
  }


  

  function toggleStyles() {
    var stylesheet = document.getElementById('window-specific');
    if (stylesheet.getAttribute('href') === 'css/specific-window.css') {
        stylesheet.setAttribute('href', 'css/mobile-specific-window.css');
    } else {
        stylesheet.setAttribute('href', 'css/specific-window.css');
    }
}


