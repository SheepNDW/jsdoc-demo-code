const element = document.querySelector('#someId');

element.value; // no hints

/** @type {HTMLInputElement} - 這是XXX的input框 */
const inputElement = document.querySelector('#someId');

inputElement.value; // type hints

/** @type {Window} */
let win;
win;

/** @type {string | number} */
let duo;
// duo;
// duo = 123;
duo = '123';
