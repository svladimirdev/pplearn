let screenPrice = 10000
let percentage = 10
let allServicePrices;
let newTitle = '';
let titleProject;
let screenValue;
let responsive;
let fullPrice;
let service;
let serviceSecond;



const checkIsNumber = function(value) {
    let number = parseFloat(value);
    return !isNaN(number) && isFinite(number)
}



const asking = function() {
titleProject = prompt('Название проекта')
screenValue = prompt('Шаблоны с уникальным дизайном, с анимациями')
responsive = prompt('Сайт должен быть отзывчивым?')
}



const getAllServicePrices = function() {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 1')
        } else if (i === 1) {
            serviceSecond = prompt('Какой дополнительный тип улсуги нужен?', 'Услуга 2')
        }

        let textFromPromt = '';

        while (!checkIsNumber(textFromPromt) || textFromPromt.trim() === '' || textFromPromt === null) {
            textFromPromt = prompt('Сколько это будет стоить?')
        }

        sum+= Number(textFromPromt)

    }

return sum

}






function getFullPrice () {
    return screenPrice + allServicePrices
}

const getServicePercentPrices = function() {
    return fullPrice - (fullPrice * (percentage / 100))
}

const getTitle = function () {
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase()
}



if(fullPrice > 50000) {
    console.log('Делаем скидку 10%');
} else if(fullPrice > 20000 && fullPrice < 40000) {
    console.log('Делаем скидку 5%');
} else if(fullPrice < 20000 && fullPrice > 0) {
    console.log('Скидка не предусмотрена');
} else if(fullPrice < 0) {
    console.log('Что-то пошло не так');
} else if(fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
    console.log('Строгое неравенство');
}



asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
newTitle = getTitle();



console.log(titleProject);
console.log(screenValue);
console.log(responsive);
console.log(service);
console.log(serviceSecond);
console.log(Math.ceil(servicePercentPrice))