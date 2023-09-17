import { gridMovieContainer } from "./constants.js";

const disclaimerTypes = {
   movieCardDisclaimer: 'movieCardDisclaimer'
}

const disclaimerContent = {
   movieCardDisclaimer: 'Premium network add-ons available for an additional cost'
}



function showMovieDisclaimer() {

   function createDisclaimer(text) {
      const disclaimer = document.createElement('p');
      const content = document.createTextNode(text);
      disclaimer.classList.add('movie-card__disclaimer', 'disclaimer');
      disclaimer.prepend(content);
      return disclaimer;
   }

   function attachMovieDisclaimer() {
      const content = disclaimerContent[disclaimerTypes.movieCardDisclaimer];
      const movieDisclaimer = createDisclaimer(content);
      const lastGridElement = gridMovieContainer.lastElementChild;
      lastGridElement.insertAdjacentElement('beforeend', movieDisclaimer);
   }

   attachMovieDisclaimer();
}

export default showMovieDisclaimer;