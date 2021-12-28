const videoKungFu = document.querySelector(".main-video");
const playButton = document.querySelector(".toggle");
playButton.addEventListener("click", toggle);
function toggle(){
    if(videoKungFu.paused){
        videoKungFu.play();
    }else{
        videoKungFu.pause();
    }
}
