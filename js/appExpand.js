let expandMenu = `<div class="app-expand">
<btn class="bottom-bar-item" id="music-player-icon">
    <img src="img/unreleased.png" alt="">
    Music Player
</btn>
<div class="bottom-bar-item" id="videoPlayer-icon">
    <img src="img/camcorder.png" alt="">
    Video Player
</div>
<btn class="bottom-bar-item" id="alert-bulletin-icon">
    <img src="img/alert.png" alt="">
    Alert Bulletin
</btn>
</div>`;

// Append the menu once on DOM ready and hide it initially
$(document).ready(function() {
    $('.app-expand').hide();  // Hide the menu initially
});

// Toggle the visibility on click
$(document).on('click', '#apps-icon', function() {
    $('.app-expand').toggle();  // Toggle the visibility of the expand menu
});
