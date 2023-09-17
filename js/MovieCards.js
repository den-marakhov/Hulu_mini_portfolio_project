import { createItem, insertElem } from "./engine.js";
import { gridMovieContainer } from "./constants.js";


const requireProps = {
   subtitle: 'subtitle',
   category: 'category',
   src: 'src',
   alt: 'alt'
}


const library_data = [
   {
      id: 1,
      subtitle: 'Past & Current Seasons',
      category: 'TV Shows',
      src: 'img/movies/family_guy.png',
      alt: 'Family Guy'
   },
   {
      id: 2,
      subtitle: 'New & Classic',
      category: 'Movies',
      src: 'img/movies/prey.jpg',
      alt: 'Prey'
   },
   {
      id: 3,
      subtitle: 'Groundbreaking',
      category: 'Hulu Originals',
      src: 'img/movies/murders.png',
      alt: 'Only murders in the building',
   },
   {
      id: 4,
      subtitle: 'Add-on',
      category: 'Premiums',
      src: 'img/movies/sopranos.png',
      alt: 'The Sopranos'
   },
];



function createAndSetTextContent(elem, content) {
   const textNode = document.createTextNode(content);
   elem.appendChild(textNode);
}

function createAndSetImage(elem, src, alt) {
   elem.setAttribute('src', src);
   elem.setAttribute('alt', alt);
}

function createMovieCard(content) {

   if (Object.prototype.toString.call(content) !== '[object Object]') {
      throw new Error('content is not an object!');
   }

   const arrayOfKeys = Object.keys(content);

   for (let key of Object.values(requireProps)) {
      if (!arrayOfKeys.includes(key)) {
         throw new Error(`There's no ${key} in content object`);
      }
   }

   const card = createItem('div', 'movie-card')
   const overlay = createItem('div', 'movie-card__gradient-overlay');
   const linkWrapper = createItem('a', 'movie-card__link');
   linkWrapper.setAttribute('href', '#');
   const descriptionBlock = createItem('div', 'movie-card__title-wrapper');
   const cardTitle = createItem('p', "movie-card__subtitle");
   const cardSubtitle = createItem('h3', "movie-card__category");
   const cardImgWrapper = createItem('div', 'movie-card__img-wrapper');
   const cardImg = createItem('img', 'movie-card__img');
   const cardDisclaimer = createItem('div', 'movie-card__disclaimer');

   insertElem(cardImgWrapper, 'afterbegin', cardImg);
   insertElem(descriptionBlock, 'afterbegin', cardTitle);
   insertElem(descriptionBlock, 'beforeend', cardSubtitle);
   insertElem(linkWrapper, 'beforeend', cardImgWrapper);
   insertElem(linkWrapper, 'afterbegin', descriptionBlock);
   insertElem(card, 'afterbegin', overlay);
   insertElem(card, 'beforeend', linkWrapper);
   insertElem(card, 'afterend', cardDisclaimer);


   const { subtitle: title, category: subtitle, src: img, alt: imgAlt } = content;

   createAndSetTextContent(cardTitle, title);
   createAndSetTextContent(cardSubtitle, subtitle);
   createAndSetImage(cardImg, img, imgAlt);

   return card;

}

function createGridItem(cardContent) {
   const gridItem = createItem('div', 'movies__grid-item');
   const card = createMovieCard(cardContent);
   insertElem(gridItem, 'afterbegin', card);
   return gridItem
}


function showMovieCards() {
   library_data.forEach(movie => {
      const gridItem = createGridItem(movie);
      return insertElem(gridMovieContainer, 'beforeend', gridItem);
   });
}

export default showMovieCards;

