import {
   line, spotlightSection,
   lg, md,
} from './constants.js'

export const SpotLightState = {
   tabIsActive: 0
}


const spotlightMaxSizeBG = [
   {
      id: 1,
      src: 'linear-gradient(90deg, rgba(0, 0, 0, 0.8) -57.5%, rgba(0, 0, 0, 0) 98.72%), url(img/spotlight/max-size/maxsize_1.jpg);'
   },
   {
      id: 2,
      src: 'linear-gradient(90deg, rgba(0, 0, 0, 0.8) -57.5%, rgba(0, 0, 0, 0) 98.72%), url(img/spotlight/max-size/maxsize_2.jpg);'
   },
   {
      id: 3,
      src: 'linear-gradient(90deg, rgba(0, 0, 0, 0.8) -57.5%, rgba(0, 0, 0, 0) 98.72%), url(img/spotlight/max-size/maxsize_3.jpg);'
   },

]

const spotlightMinSizeBG = [
   {
      id: 1,
      src: 'linear-gradient(rgba(0, 0, 0, 0.8) -39.59%, rgba(0, 0, 0, 0) 117.14%), url(img/spotlight/min-size/minsize_1.jpg);'
   },
   {
      id: 2,
      src: 'linear-gradient(rgba(0, 0, 0, 0.8) -39.59%, rgba(0, 0, 0, 0) 117.14%), url(img/spotlight/min-size/minsize_2.jpg);'
   },
   {
      id: 3,
      src: 'linear-gradient(rgba(0, 0, 0, 0.8) -39.59%, rgba(0, 0, 0, 0) 117.14%), url(img/spotlight/min-size/minsize_3.jpg);'
   },
]

export function changeSpotLightBackGround(SpotLightState) {

   if (window.innerWidth >= lg) {
      spotlightSection.style.cssText = `
      background-image: ${spotlightMaxSizeBG[SpotLightState.tabIsActive].src};
      background-repeat: no-repeat;
      background-position: top center;
      background-size: cover;
      z-index: -1;
      padding: 60px 0 190px;
      height: 900px;
      `
   } else if (window.innerWidth <= md) {
      spotlightSection.style.cssText = `
      background-image: ${spotlightMinSizeBG[SpotLightState.tabIsActive].src};
      background-repeat: no-repeat;
      background-position: top;
      background-size: cover;
      z-index: -1;
      padding: 20px 0 160px;
      height: 100vh;
      `
   } else {
      spotlightSection.style.cssText = `
      background-image: ${spotlightMinSizeBG[SpotLightState.tabIsActive].src};
      background-repeat: no-repeat;
      background-position: 0 80%;
      background-size: cover;
      z-index: -1;
      padding: 60px 0 190px;
      height: 1000px;
      `
   }
}

export function checkAndSetLineAfterResize(elems, activeClassName) {
   elems.forEach(elem => {
      if (elem.classList.contains(activeClassName)) {
         const activeElem = elem;
         line.style.width = activeElem.offsetWidth + 'px';
         line.style.left = activeElem.offsetLeft + 'px';
      }
   })
}


