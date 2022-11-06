const song = document.getElementById("song");
const music = document.querySelector("music");
const playBtn = document.querySelector(".player-inner");
const btn_right = document.querySelector(".play-forward");
const btn_left = document.querySelector(".play-back");
const btn_randomMusic = document.querySelector(".play-repeat");
const btn_repeat = document.querySelector(".play-infinite");
const musicName = document.querySelector(".music-name");
const musicImage = document.querySelector(".music-thumb img");
const musicThumb = document.querySelector(".music-thumb");
let isRepeat = false;
const musics = [
  { id: 1, title: "Holo", file: "holo.mp3", image: "anh1.jfif" },
  { id: 2, title: "Summer", file: "mp3_music_summer.mp3", image: "anh2.jfif" },
  { id: 3, title: "Spark", file: "spark.mp3", image: "anh3.jfif" },
  { id: 4, title: "Home", file: "home.mp3", image: "anh4.jfif" },
];

const musicLength = musics.length;
const durationTime = document.querySelector(".duration");
const remainingTime = document.querySelector(".remaining");
let index = 0;
const rangeBar = document.querySelector(".range");

displayTimer();
let timer = setInterval(displayTimer, 1000);
playBtn.addEventListener("click", playPause);
let isPlaying = true;
function playPause() {
  //   song.play();
  if (isPlaying) {
    song.play();
    musicThumb.classList.add("is-playing");
    playBtn.innerHTML = `<ion-icon name="pause-circle"></ion-icon>`;
    isPlaying = false;
    timer = setInterval(displayTimer, 1000);
  } else {
    musicThumb.classList.remove("is-playing");
    song.pause();
    isPlaying = true;
    playBtn.innerHTML = `<ion-icon name="play-circle"></ion-icon>`;
    clearInterval(timer);
  }
}

song.addEventListener("ended", handleEndedSong);
function handleEndedSong() {
  if (isRepeat) {
    song.setAttribute("src", `./ListMusic/${musics[index].file}`);
    playBtn.innerHTML = `<ion-icon name="pause-circle"></ion-icon>`;
    song.play();
  } else {
    changeSong(1);
  }
}
function changeSong(direction) {
  if (direction === 1) {
    index++;
    if (index > musicLength - 1) {
      index = 0;
    }
  } else if (direction === -1) {
    index--;
    if (index < 0) {
      index = musicLength - 1;
    }
  }
  init(index);
  playBtn.innerHTML = `<ion-icon name="pause-circle"></ion-icon>`;
  song.play();
}

btn_right.addEventListener("click", () => {
  changeSong(1);
});
btn_left.addEventListener("click", () => {
  changeSong(-1);
});

function displayTimer() {
  const { duration, currentTime } = song;
  rangeBar.max = duration;
  rangeBar.value = currentTime;
  remainingTime.textContent = formatTimer(currentTime);
  if (!duration) {
    durationTime.textContent = "00:00";
  } else {
    durationTime.textContent = formatTimer(duration);
  }
}
function formatTimer(number) {
  const minutes = Math.floor(number / 60);
  const seconds = Math.floor(number - minutes * 60);
  return `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}
rangeBar.addEventListener("change", handleChangeBar);
function handleChangeBar() {
  song.currentTime = rangeBar.value;
}
btn_randomMusic.addEventListener("click", handleRandomMusic);
function getRandomInt(value) {
  return Math.floor(Math.random() * value);
}
function handleRandomMusic() {
  index = getRandomInt(4);
  song.setAttribute("src", `./ListMusic/${musics[index].file}`);
  playBtn.innerHTML = `<ion-icon name="pause-circle"></ion-icon>`;
  song.play();
}

btn_repeat.addEventListener("click", repeatMusic);
function repeatMusic() {
  if (isRepeat) {
    isRepeat = false;
    btn_repeat.classList.remove("active");
  } else {
    isRepeat = true;
    btn_repeat.classList.add("active");
  }
}

function init(index) {
  displayTimer();
  song.setAttribute("src", `./ListMusic/${musics[index].file}`);
  musicImage.setAttribute("src", `./Image/${musics[index].image}`);
  musicName.textContent = `${musics[index].title}`;
}
init(0);
