import showMovieCards from "./MovieCards.js";
import showMovieDisclaimer from "./MovieCardDisclaimer.js";

import { SpotLightState } from './SpotLight.js'

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

import {
   setMobileBaseBtn,
   changePlanCards,
   toggle
} from "./Plans.js";

import { changeBackgroundColor } from './Features.js'



window.addEventListener('load', () => {

   showMovieCards();
   showMovieDisclaimer();
   changeSpotLightBackGround(SpotLightState);
   checkAndSetLineAfterResize(tabs, 'spotlight__btn_active');
});

pause.addEventListener('click', stopVideo);
play.addEventListener('click', playVideo);
menuIcon.addEventListener('click', showMobileMenu);
toggle.addEventListener('click', changePlanCards);

window.addEventListener('resize', () => {
   resetMenu();
   changeSpotLightBackGround(SpotLightState);
   checkAndSetLineAfterResize(tabs, 'spotlight__btn_active');
   setMobileBaseBtn();
   changeBackgroundColor();
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


