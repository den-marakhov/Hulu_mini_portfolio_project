import showMovieCards from "./MovieCards.js";
import showMovieDisclaimer from "./MovieCardDisclaimer.js";


import {
   changeSpotLightBackGround,
   checkAndSetLineAfterResize,
} from "./SpotLight.js";

import {
   addActive,
   removeActive,
} from './engine.js';

import {
   pause,
   play,
   menuIcon,
   tabs,
   spotlights,
} from './constants.js';


import {
   stopVideo,
   playVideo,
   showMobileMenu,
   resetMenu
} from './Header.js'



const SpotLightState = {
   tabIsActive: 0
}


window.addEventListener('load', () => {

   showMovieCards();
   showMovieDisclaimer();
   changeSpotLightBackGround(SpotLightState);
   checkAndSetLineAfterResize(tabs, 'spotlight__btn_active');

});

pause.addEventListener('click', stopVideo);
play.addEventListener('click', playVideo);
menuIcon.addEventListener('click', showMobileMenu);
window.addEventListener('resize', resetMenu);
window.addEventListener('resize', () => {
   changeSpotLightBackGround(SpotLightState);
   checkAndSetLineAfterResize(tabs, 'spotlight__btn_active');

});

tabs.forEach((tab, index) => {
   tab.addEventListener('click', (e) => {
      removeActive(tabs, 'spotlight__btn_active');
      addActive(tab, 'spotlight__btn_active');
      checkAndSetLineAfterResize(tabs, 'spotlight__btn_active');
      removeActive(spotlights, 'content-box_active');
      addActive(spotlights[index], 'content-box_active');
      SpotLightState.tabIsActive = index;
      changeSpotLightBackGround(SpotLightState);
   });
})


