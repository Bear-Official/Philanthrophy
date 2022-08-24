let btn = document.querySelector(".video__btn");
let clip = document.querySelector(".clip");
let close = document.querySelector(".close");
let video = document.querySelector(".video");
btn.onclick = function () {
    btn.classList.add("active");
    clip.classList.add("active");
    video.play();
};
close.onclick = function () {
    btn.classList.remove("active");
    clip.classList.remove("active");
    video.pause();
};

AOS.init();
