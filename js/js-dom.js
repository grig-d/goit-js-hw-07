//
// Tasks https://github.com/goitacademy/javascript-homework/tree/master/homework-07
// Test https://app.schoology.com/assignment/3151431576/assessment
// Book http://fecore.net.ua/books/m5ph3r-javascript/module-07/

console.log('window:', window);
const fnNoStrict = function () {
  console.log('this no strict:',this);
};
fnNoStrict();
const fnStrict = function () {
  'use strict';
  console.log('this strict:', this);
};
fnStrict();

console.log(window.document); // window писать не обязательно, т.е. console.log(window.document) === console.log(document);
console.dir(window.document); // window писать не обязательно, т.е. console.dir(window.document) === console.dir(document);

// поиск DOM узла
const titleRef = document.querySelector('h1'); // найдет первый попавшийся тег h1
console.log(titleRef);
console.dir(titleRef);

const title2Ref = document.querySelector('.css-selector'); // найдет первый попавшийся тег с классом css-selector
console.log(title2Ref);
console.dir(title2Ref);

const title2aRef = document.querySelectorAll('.css-selector'); // найдет все подходящие теги с классом css-selector
console.log(title2aRef); // NodeList(3) [h2.css-selector, h2.css-selector, h2.css-selector]
console.dir(title2aRef);

titleRef.textContent = 'I am a JavaScripteaser'; // после изменения содержания страница перезагрузится

//3200
