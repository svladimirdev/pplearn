let titleProject = prompt('Название проекта?');
let screensValue = prompt('Типы экранов через запятую');
let responsive = prompt('Сайт должен быть отзывчивым (да/нет) ?');
let screenPrice = 12500;
let percentage = 15;

if (responsive = 'да') {
    responsive = 'Сайт должен быть отзывчивым';
} else {
    responsive = 'Отзывчивость не нужна';
};

let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой еще сервис тебе нужен?');
let servicePrice2 = prompt('Сколько будет стоить этот второй сервис?');


function getAllServicePrices() {

    let sum = +servicePrice1 + +servicePrice2;

    return sum;
};

let allServicePrices = getAllServicePrices();

function getFullPrice() {
    return +allServicePrices + +screenPrice;
};

let fullPrice = getFullPrice();


function getTitle() {
    let firstChar = titleProject.charAt(0).toUpperCase();
    let restOfString = titleProject.slice(1).toLowerCase();

    return firstChar + restOfString;
};

let editedTitle = getTitle();

function getServicePercentPrices() {

    let percentageResult = fullPrice * (percentage / 100);
    return Math.round(fullPrice - percentageResult);

};

let servicePercentPrice = getServicePercentPrices();

function getRollbackMessage() {

    console.log('Название проекта ', editedTitle);
    console.log('Стоимость всех сервисов ', allServicePrices);
    console.log('Полная стоимость ', fullPrice);
    console.log('Стоимость с вычетом комиссии подрядчика ', servicePercentPrice);
    console.log(responsive);

    if (fullPrice >= 50000) {
        console.log('Сделаем скидку в 10%')
    } else if (50000 > fullPrice >= 20000) {
        console.log('Сделаем скидку в 5%')
    } else if (20000 > fullPrice >= 0) {
        console.log('Скидка не предусмотрена')
    } else if (0 > fullPrice) {
        console.log('Что то пошло не так')
    };
};

getRollbackMessage();
