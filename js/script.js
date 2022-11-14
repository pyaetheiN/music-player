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
  musicAudio.play();
}

function pauseSong(){
  musicInfo.classList.remove('active');
  musicContainer.classList.remove('play');
  playBtn.querySelector('i').classList.replace('fa-pause', 'fa-play');
  musicAudio.pause();
}

function prevSong(){
  songIndex--;

  if(songIndex < 0){
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  musicAudio.play();
}

function nextSong(){
  songIndex++;

  if(songIndex > songs.length - 1){
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  musicAudio.play();
}

function updateProgress(e){
  // console.log(e.srcElement.currentTime);
  // console.log(e.srcElement.duration);
  // destructuring
  const {currentTime, duration} = e.srcElement;
  const progressElement = (currentTime / duration) * 100;
  progressBar.style.width = `${progressElement}%`;
}

function setProgress(e){
  const width = this.clientWidth; // taking progressContainer width
  const clickX = e.offsetX; // taking width of the target starting from it's padding
  // console.log(width);
  // console.log(clickX);
  const duration = musicAudio.duration;

  musicAudio.currentTime = (clickX / width) * duration;
  // musicAudio.currentTime = clickX;
}

// event listeners
playBtn.addEventListener('click', () => {
  if(musicContainer.classList.contains('play')){
    pauseSong();
  } else{
    playSong();
  }
})

prevBtn.addEventListener('click', prevSong);

nextBtn.addEventListener('click', nextSong);

musicAudio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

musicAudio.addEventListener('ended', nextSong);