const video = document.querySelector('.video-container');
const pauseBtn = document.querySelector('#pauseBtn');
const playBtn = document.querySelector('#playBtn');
const preLoader = document.querySelector('.preloader');
const header = document.getElementsByTagName('header');

document.querySelector('#playBtn').addEventListener('click', function() {
    video.play();
    playBtn.classList.toggle('bg-info');
    playBtn.classList.toggle('text-info');

    pauseBtn.classList.toggle('bg-info');
    pauseBtn.classList.toggle('text-info');
});

document.querySelector('#pauseBtn').addEventListener('click', function() {
    video.pause();
    pauseBtn.classList.toggle('bg-info');
    pauseBtn.classList.toggle('text-info');

    playBtn.classList.toggle('bg-info');
    playBtn.classList.toggle('text-info');

});

window.addEventListener('load', function() {
    preLoader.classList.add('hide-preloader');
})