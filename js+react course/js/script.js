"use strict";
let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    name: "John",
    age: 25,
    isHeMarried: false
};

console.log(obj.name);  // Лучше этим способом

console.log(obj ["name"]); 

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, ];
console.log(arr[1]);

alert('Hello');


const result = confirm("Are you here???");
console.log(result);

const answer = prompt("Вам есть 18?", "18");
console.log(answer); // Пользователь вводит в ответе только тип данных строка. ВСЯ ИНФА КАК ПРАВИЛО ОТ ПОЛЬЗОВАТЕЛЯ ПРИХОДИТ В ТИПЕ ДАННЫХ "СТРОКА"

const answers = [];

answers[0] = prompt('Как вас зовут?', '');
answers[1] = prompt('Ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

document.write(answers);

const category = 'toys';

console.log(`https://someurl.com/${category}/5`); // Чтобы использовать переменные (интерполяция), надо поставить косые тильдовые кавычки

const user = "Ivan";

alert(`Привет, ${user}`);

lol