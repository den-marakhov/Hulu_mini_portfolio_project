import { lg, xl } from './constants.js';


const rows = document.querySelectorAll('.features__row');
const baseTable = document.querySelector('.features-base');
const bundleTable = document.querySelector('.features-bundle');

export function changeBackgroundColor() {
   rows.forEach((item) => {
      const secondCol = item.children[1];
      if (window.innerWidth >= lg && window.innerWidth <= xl) {
         secondCol.style.backgroundColor = '#272c34';
      } else {
         secondCol.style.backgroundColor = 'transparent';
      }
   });
}

export function changeFeatures(checked) {
   if (checked) {
      baseTable.classList.add('hidden');
      bundleTable.classList.remove('hidden');
   } else {
      bundleTable.classList.add('hidden');
      baseTable.classList.remove('hidden');
   }
}
