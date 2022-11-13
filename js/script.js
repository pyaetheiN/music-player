const playBtn = document.querySelector('.play');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const musicContainer = document.querySelector('.music__container');
const musicInfo = document.querySelector('.music__info');
const musicTitle = document.querySelector('.music__info--title');
const musicCover = document.querySelector('.music__img');
const musicAudio = document.querySelector('.music__audio');
const progressContainer = document.querySelector('.progress__container');
const progressBar = document.querySelector('.progress__bar');

// song titles
const songs = ['GRAVECHILL - TWILIGHT', 'Longlost - Ghostride', 'Kordhell - Land of Fire'];

// keep track of songs
let songIndex = 0;

// initially load songs
loadSong(songs[songIndex]);

// update song details
function loadSong(song){
  musicTitle.innerText = song;
  musicAudio.src = `music/${song}.mp3`;
  musicCover.src = `images/${song}.jpg`;
}

function playSong(){
  musicInfo.classList.add('active');
  musicContainer.classList.add('play');
  playBtn.querySelector('i').classList.replace('fa-play', 'fa-pause');
}

function pauseSong(){
  musicInfo.classList.remove('active');
  musicContainer.classList.remove('play');
  playBtn.querySelector('i').classList.replace('fa-pause', 'fa-play');
}

// event listeners
playBtn.addEventListener('click', () => {
  // const isPlaying = musicContainer.classList.contains('play');

  // if(isPlaying){
  //   pauseSong();
  // } else{
  //   playSong();
  // }

  const isPlaying = musicContainer.classList.contains('play') ? pauseSong() : playSong();
})