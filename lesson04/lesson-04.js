let titleProject = prompt('Название проекта?');
let screensValue = prompt('Типы экранов через запятую');
let responsive = prompt('Сайт должен быть отзывчивым (да/нет) ?');
let screenPrice = 125;
let percentage = 15;

if (responsive = 'да') {
    responsive = true;
} else {
    responsive = false;
};

let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой еще сервис тебе нужен?');
let servicePrice2 = prompt('Сколько будет стоить этот второй сервис?');

let fullPrice = +screenPrice + +servicePrice1 + +servicePrice2;
let servicePercentPrice = Math.round(fullPrice / 100 * percentage);

console.log(servicePercentPrice);

if (fullPrice >= 50000) {
    console.log('сделаем скидку в 10%')
} else if (50000 > fullPrice >= 20000) {
    console.log('сделаем скидку в 5%')
} else if (20000 > fullPrice >= 0) {
    console.log('скидка не предусмотрена')
} else if (0 > fullPrice) {
    console.log('Что то пошло не так')
};