import {
   video, pause, play,
   mobileMenu,
   lg,
} from './constants.js'



export function stopVideo() {
   if (!video.paused) {
      video.pause();
      pause.classList.add('hidden');
      play.classList.remove('hidden')
      play.classList.add('show');
   }
}

export function playVideo() {
   if (video.paused) {
      video.play();
      play.classList.add('hidden');
      pause.classList.remove('hidden');
      pause.classList.add('show');
   }
}

export function showMobileMenu() {

   if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('show');
   } else {
      mobileMenu.classList.remove('show');
      mobileMenu.classList.add('hidden');
   }
}

export function resetMenu() {
   if (window.innerWidth >= lg) {
      mobileMenu.classList.add('hidden');
   }
}