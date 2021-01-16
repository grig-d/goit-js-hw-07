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
const titleRef = document.querySelector('h1');
console.log(titleRef);