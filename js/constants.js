const video = document.querySelector('video');
const pause = document.getElementById('videoPause');
const play = document.getElementById('videoPlay');
const menuIcon = document.getElementById('mobile-menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const movieCard = document.querySelectorAll('.movie-card');
const tabs = document.querySelectorAll('.spotlight__btn');
const line = document.querySelector('.spotlight__line');
const spotlights = document.querySelectorAll('.content-box');
const spotlightSection = document.getElementById('spotlight');
const md = 768;
const lg = 1024;
const xl = 1280;
const gridMovieContainer = document.querySelector('.movies__grid-container');



export {
   video, pause, play,
   menuIcon, mobileMenu,
   movieCard,
   tabs, line, spotlights,
   spotlightSection,
   md, lg, xl,
   gridMovieContainer,
};