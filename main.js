import './style.sass'
import './style.css'
import javascriptLogo from './javascript.svg'
var video;
var switcher = 0;

window.onload = function() {
	video = document.getElementById("videoPlayer");
  let videoPP = document.getElementById("videoPP");
  videoPP.addEventListener('click', ()=>{
    playPause()
  }
    )

};

function playPause() {
  if(switcher==0){
    video.play();
    switcher = 1;
    videoPP.classList.add('hidden')

    
  } else {
    video.pause();
    switcher = 0;
    videoPP.classList.remove('hidden')


  }
}


