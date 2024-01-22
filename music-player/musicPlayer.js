normalSongNameArray=['sugar','finally_alone','canAnybody','makefun','thousand','jawless'];
SecretSongNameArray=['theEnd','run',]; // TO ADD SONGS ADD A NAME HERE

let songHowlArray = [];
let songNameArray=[];
let songOnDeck = null;
let playing = false;
let currentSongIndex = 0;

let secretContent = `
    <div class="dir-item" id="secret" alt="">
        <img src="icons/folder.png" alt="">
        <span>secret music</span>
    </div>
`;

function siteWork(songArray){
  //reset everything
  songHowlArray = [];
  songNameArray=[];
  songOnDeck = null;
  playing = false;
  currentSongIndex = 0;


songNameArray=songArray; 

console.log(songNameArray);
$('.song-name').html(songNameArray[0]+'.mp3');

$('.song-name').html(songNameArray[0]+'.mp3');

let song1 = new Howl({
  src: ['songs/'+songNameArray[0]+'.mp3'],
  volume: 1.0,
});

let song2 = new Howl({
  src: ['songs/'+songNameArray[1]+'.mp3'],
  volume: 1.0,
});
let song3 = new Howl({
  src: ['songs/'+songNameArray[2]+'.mp3'],
  volume: 1.0,
});
let song4 = new Howl({
  src: ['songs/'+songNameArray[3]+'.mp3'],
  volume: 1.0,
});
let song5 = new Howl({
  src: ['songs/'+songNameArray[4]+'.mp3'],
  volume: 1.0,
});
let song6 = new Howl({
  src: ['songs/'+songNameArray[5]+'.mp3'],
  volume: 1.0,
});

capacitySongHowlArray=[song1,song2,song3,song4,song5,song6];

for (let i = 0; i < songArray.length; i++) { 
    songHowlArray.push(capacitySongHowlArray[i]);
}

songOnDeck = song1;
playing = false;
playButton = $('#play');
timelineSlider = $('#song-timeline');
songTimeDisplay = $('.song-time');
currentSongIndex = 0; // Index of the currently playing song
}

siteWork(normalSongNameArray);


// Play/pause song when the play button is clicked
$(playButton).on('click', '.btn', function(){
    if(playing == false){
      playButton.html('<div class="btn" style="background-image: url(\'icons/pause.png\');"></div>');
      songOnDeck.play();
      playing = true;
    } else {
      playButton.html('<div class="btn" style="background-image: url(\'icons/play.png\');"></div>');
      songOnDeck.pause();
      playing = false;
    }
    });
    
    function playCD(song,name){
      $('.song-name').html(name+'.mp3');
      currentSongIndex = songNameArray.indexOf(name);
      playing = true;
      playButton.html('<div class="btn" style="background-image: url(\'icons/pause.png\');"></div>');
      
      if (songOnDeck) {
        songOnDeck.off('end'); // Remove 'end' event listener from the current song
        songOnDeck.off('play'); // Remove 'play' event listener from the current song
        songOnDeck.stop();
      }
      
      songOnDeck = song;
    
      songOnDeck.on('play', function() {
        updateSliderAndTime();
      });
    
      songOnDeck.on('end', function() {
        playNextSong();
      });
    
      songOnDeck.play();
    }
    
    songOnDeck.on('end', function() {
      playNextSong();
    });
    //SLIDER STUFF:
    
    // Update song's current time when the slider's value is changed by the user
    timelineSlider.on('input', function() {
    let newTime = timelineSlider.val() / 100 * songOnDeck.duration();
    songOnDeck.seek(newTime);
    });
    
    // Update slider's position and time display every second while the song is playing
    songOnDeck.on('play', function() {
    updateSliderAndTime();
    });
    
    // Helper function to format time in mm:ss format
    function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    if (secs < 10) {
      secs = '0' + secs;
    }
    return minutes + ':' + secs;
    }
    
    // Helper function to update slider's position and time display
    function updateSliderAndTime() {
    let currentTime = songOnDeck.seek();
    let totalTime = songOnDeck.duration();
    timelineSlider.val(currentTime / totalTime * 100);
    songTimeDisplay.text(formatTime(currentTime) + ' / ' + formatTime(totalTime));
    if (songOnDeck.playing()) {
      setTimeout(updateSliderAndTime, 1000);  // Update every second
    }
    }
    
    
    function playNextSong(){
      currentSongIndex++;
      if(currentSongIndex>=songHowlArray.length){
        currentSongIndex=0;
      }
      console.log(currentSongIndex);
      playCD(songHowlArray[currentSongIndex],songNameArray[currentSongIndex]);
    };
    
    $('#backskip').on('click', function(){
      currentSongIndex--;
      if(currentSongIndex<0){
        currentSongIndex=songHowlArray.length-1;
      }
      console.log(currentSongIndex);
      playCD(songHowlArray[currentSongIndex],songNameArray[currentSongIndex]);
    });
    
    $('#forwardskip').on('click', function(){
      playNextSong();
    });

