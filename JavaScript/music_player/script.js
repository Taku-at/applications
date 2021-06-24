const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

/* ----------- Song Titles ---------------- */
const songs = ['allthat', 'jazzyfrenchy', 'thejazzpiano']; // array has song titles have to be correct the name as file name


/* ----------- Keep track of songs as default ---------------- */
let songIndex = 0


/* ----------- Initially  load song into DOM ---------------- */
// invoke the function include title index
loadSong(songs[songIndex])


/* ----------- Update song details ---------------- */ 
// title, song, image to be muched
function loadSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3` // have to be correct the name
    cover.src = `images/${song}.jpg` // have to be correct the name
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-play')

    // audio from <audio> tage
    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')

    // audio from <audio> tage
    audio.pause()
}


function prevSong() {
    songIndex-- // to decrease

    if(songIndex < 0) {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])

    playSong()
}

function nextSong() {
    songIndex++ // to increase

    if(songIndex > songs.length - 1) {
        songIndex = 0
    }

    loadSong(songs[songIndex])

    playSong()
}
// updateProgress takes the event object 
function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100 // Show up the total playing time
    progress.style.width = `${progressPercent}%`
}

// audio duration 
function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX;
    const duration = audio.duration

    // set the current time wherever we click
    audio.currentTime = (clickX / width) * duration
}



/* ----------- Event listeners ---------------- */
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        // call the function
        pauseSong()
    } else {
        playSong()
    }
})

/* ----------- Change song events ---------------- */
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress) // update anytime

progressContainer.addEventListener('click', setProgress)

audio.addEventListener("ended", nextSong)

/* ----------- Song Titles ---------------- */
