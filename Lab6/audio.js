const music = [
    { name: "Paranoid Android", artist: "Radiohead", src: "music/Radiohead - Paranoid Android.mp3", cover: "covers/274px-RadioheadOkComputer.jpg" },
    { name: "Creep", artist: "Radiohead", src: "music/Radiohead - Creep.mp3", cover: "covers/Radiohead-Pablo-Honey.jpg" },
    { name: "Lithium", artist: "Nirvana", src: "music/Nirvana - Lithium.mp3", cover: "covers/NirvanaNevermindalbumcover.jpg" }
];

var currentTrackIndex = 0;
var audioPlayer = new Audio(music[currentTrackIndex].src);
let playButton = document.getElementById('play');
let nextButton = document.getElementById('next');
let coverImage = document.getElementById('cover');
let trackName = document.getElementById('MusicName');
let artistName = document.getElementById('ArtistName');
let progressBar = document.getElementById('progress-bar');
let isPlay = false;

playButton.addEventListener('click', PlayPause);
nextButton.addEventListener('click', Next);

function PlayPause() {
    if (!isPlay) {
        audioPlayer.play();
        isPlay = true;
        playButton.textContent = "Pause";
    } else {
        audioPlayer.pause();
        playButton.textContent = "Play";
        isPlay = false;
    }
}

function Next() {
    if(currentTrackIndex == 2){
        currentTrackIndex = 0;
    }
    else{
        currentTrackIndex = currentTrackIndex+1;
    }
    audioPlayer.src = music[currentTrackIndex].src;
    audioPlayer.load();
    isPlay = true;
    playButton.textContent = "Pause";
    coverImage.src = music[currentTrackIndex].cover;
    trackName.textContent = music[currentTrackIndex].name;
    artistName.textContent = music[currentTrackIndex].artist;
}



