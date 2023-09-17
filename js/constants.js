const video = document.querySelector('video');
const pause = document.getElementById('videoPause');
const play = document.getElementById('videoPlay');
const menuIcon = document.getElementById('mobile-menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuScreenBP = 1100;
const movieCard = document.querySelectorAll('.movie-card');
const tabs = document.querySelectorAll('.spotlight__btn');
const line = document.querySelector('.spotlight__line');
const spotlights = document.querySelectorAll('.content-box');
const spotlightSection = document.getElementById('spotlight');
const backgroundBP = 1025;
const backgroundBPmin = 760;
const gridMovieContainer = document.querySelector('.movies__grid-container');



export {
   video, pause, play,
   menuIcon, mobileMenu,
   mobileMenuScreenBP, movieCard,
   tabs, line, spotlights,
   spotlightSection, backgroundBP,
   backgroundBPmin,
   gridMovieContainer
};