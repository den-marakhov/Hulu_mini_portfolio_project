
export function createItem(tagName, cssClassName) {
   const elem = document.createElement(tagName);
   elem.classList.add(cssClassName);
   return elem;
}

export function insertElem(targetElem, where, insertedElem) {
   targetElem.insertAdjacentElement(where, insertedElem);
}



export function removeActive(elem, state) {
   if (typeof state !== 'string') {
      throw new Error('state is not a string!')
   }
   elem.length > 1 ? elem.forEach(elem => elem.classList.remove(state))
      : elem.classList.remove(state);
}

export function addActive(elem, state) {
   if (typeof state !== 'string') {
      throw new Error('state is not a string!')
   }
   elem.classList.add(state);
}

