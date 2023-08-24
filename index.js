let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.querySelector(".masterPlay");
let myProgressBar = document.querySelector("#myProgressBar");
let gif = document.querySelector("#gif");
let songItem = document.querySelectorAll(".songItem");
let masterHeading = document.querySelector(".masterHeading");


// console.log(timeStapm);


const songs = [
    { songName: "dil diwan", fileName: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "dilwale", fileName: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "jay ho", fileName: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Janam", fileName: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "mere jan", fileName: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "love you", fileName: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "komola", fileName: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "hi sweety", fileName: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "let me ", fileName: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "main hoon doon", fileName: "songs/10.mp3", coverPath: "covers/10.jpg" },
];


songItem.forEach((element, i) => {
    element.querySelector("img").src = songs[i].coverPath;
    element.querySelector(".songName").textContent = songs[i].songName;
})

masterPlay.addEventListener("click", () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
});




audioElement.addEventListener("timeupdate", () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});


myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100
});

const makeAllPlay = () => {
    document.querySelectorAll(".songItemPlay").forEach((element) => {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}



document.querySelectorAll(".songItemPlay").forEach((element) => {
    element.addEventListener("click", (event) => {
        songIndex = parseInt(event.target.id);

        makeAllPlay();
        event.target.classList.remove("fa-circle-play");
        event.target.classList.add("fa-circle-pause");
        audioElement.src = `songs/${songIndex}.mp3`;
        masterHeading.textContent = songs[songIndex - 1].songName;
        audioElement.play();
        audioElement.currentTime = 0;


        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    })
})




document.querySelector(".next").addEventListener("click", (event) => {

    if (songIndex > 9) {
        songIndex = 1;
    } else {
        songIndex++;
    }

    songItem[songIndex - 1].querySelector("i").classList.add("fa-circle-pause");

    songItem[songIndex - 1].querySelector("i").classList.remove("fa-circle-play");



    audioElement.src = `songs/${songIndex}.mp3`;
    masterHeading.textContent = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
});


document.querySelector(".previous").addEventListener("click", () => {
    if (songIndex <= 1) {
        songIndex = 1;
    } else {
        songIndex--;
    }

    audioElement.src = `songs/${songIndex}.mp3`;
    masterHeading.textContent = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
})
