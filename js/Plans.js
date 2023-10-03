import {
   md
} from "./constants.js";

import { changeFeatures } from "./Features.js";

export const toggle = document.getElementById('toggle');
const basePlanCards = document.querySelector('.plan-cards-base');
const bundlePlanCards = document.querySelector('.plan-cards-bundle');



const BaseButtons = {
   standard: [
      {
         id: 1,
         text: '$7.99 / month'
      },
      {
         id: 2,
         text: '$14.99 / month*',
      }
   ],
   mobile: [
      {
         id: 1,
         text: '$7.99/Mo.'
      },
      {
         id: 2,
         text: '14.99/Mo.*'
      }
   ]
}

const BundleButtons = {
   standard: [
      {
         id: 1,
         text: '$12.99 / month*'
      },
      {
         id: 2,
         text: '$19.99 / month*',
      },
      {
         id: 3,
         text: '$49.99 / MO. FOR 3 MOS‡§',
      }
   ],
   mobile: [
      {
         id: 1,
         text: '$12.99/Mo.'
      },
      {
         id: 2,
         text: '19.99/Mo.*'
      },
      {
         id: 3,
         text: '$49.99/Mo. For 3 Mos‡§'
      }
   ]
}

export function changePlanCards() {
   let isChecked = toggle.checked;

   if (isChecked) {
      basePlanCards.classList.add('hidden');
      bundlePlanCards.classList.remove('hidden');
      changeFeatures(isChecked);
      setMobileBaseBtn();
   } else {
      bundlePlanCards.classList.add('hidden');
      basePlanCards.classList.remove('hidden');
      changeFeatures(isChecked);
      setMobileBaseBtn();
   }

}

function changeBtn(btnid, text) {
   let isChecked = toggle.checked;
   const btn = document.getElementById(`${isChecked ? 'bundle' : 'base'}-btn-${btnid}`);
   btn.textContent = text;
   return btn;
}

export function setMobileBaseBtn() {
   let isChecked = toggle.checked;
   const standardSize = isChecked ? BundleButtons.standard : BaseButtons.standard;
   const mobileSize = isChecked ? BundleButtons.mobile : BaseButtons.mobile;

   if (window.innerWidth <= md) {

      mobileSize.forEach(btn => {
         changeBtn(btn.id, btn.text);

      });

   } else {

      standardSize.forEach(btn => {
         changeBtn(btn.id, btn.text);
      });

   }
}


