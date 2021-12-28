const videoKungFu = document.querySelector(".main-video");
const playButton = document.querySelector(".toggle");
const progress = document.querySelector(".progress");
const screen = document.querySelector(".player");
const progressBar = document.querySelector('.progress-filled');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player-slider');
const fullScreen = document.querySelector(".fullscreen");
// fullScreen.addEventListener("click", openFullscreen);
// function openFullscreen() {
//     if (screen.requestFullscreen) {
//       elem.requestFullscreen();
//     } 
//   }
// function fullScreenHandler(){

//     this.classList.add("player:fullscreen")
// }
videoKungFu.addEventListener("click" , toggle);
videoKungFu.addEventListener("pause" , updateButton);
videoKungFu.addEventListener("play" , updateButton);
// const  
playButton.addEventListener("click", toggle);
function toggle(){
    if(videoKungFu.paused){
        videoKungFu.play();
    }else{
        videoKungFu.pause();
    }
}
function updateButton(){
  const icon = this.paused ? '►' : '❚ ❚';
  console.log(icon);
//   console.log(icon);
  playButton.textContent = icon;
}
function skipfun(){
    videoKungFu.currentTime += parseFloat(this.dataset.skip);
    
    // var skipValue = this.dataset.skip;
    // var vidTime = videoKungFu.currentTime;
    // vidTime += parseFloat(skipValue);
    // videoKungFu.currentTime += this.dataset.skip;
    // console.log(skipValue, vidTime);
    

    // videoKungFu.currentTime += this.dataset.skip;
}
function handleProgressBar(){
    const percent = (videoKungFu.currentTime / videoKungFu.duration)*100;
    progressBar.style.flexBasis = `${percent}%`
}
skipButtons.forEach( button => button.addEventListener("click" , skipfun))
videoKungFu.addEventListener("timeupdate" , handleProgressBar);
function handleRange(){
    videoKungFu[this.name] = this.value;
}
ranges.forEach(range => range.addEventListener("change" , handleRange));
ranges.forEach(range => range.addEventListener("mousemove" , handleRange));
function scrub(e){
    const scrubTime = (e.offsetX/progress.offsetWidth)*videoKungFu.duration;
    videoKungFu.currentTime = scrubTime;
}
let mouseDown = false;
progress.addEventListener('click',scrub);
progress.addEventListener("mousemove" , (e) => mouseDown && scrub(e));
progress.addEventListener('mousedown' , () => mouseDown = true);
progress.addEventListener('mouseup',()=> mouseDown = false);


