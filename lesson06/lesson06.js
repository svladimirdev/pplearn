let screenPrice;
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
    titleProject = prompt('Название проекта', 'Калькулятор')
    screenValue = prompt('Шаблоны с уникальным дизайном, с анимациями', 'С анимациями')

    screenPrice = prompt('Стоимость одного экрана?', 12000);

    while (!checkIsNumber(screenPrice) || screenPrice.trim() === '' || screenPrice === null) {
        screenPrice = prompt('Сколько это будет стоить?', 12000)
    }

    screenPrice = Number(screenPrice);

    responsive = prompt('Сайт должен быть отзывчивым?', 'Да');
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



let getPercentageMessage = function(price) {
    if(price > 50000) {
        return 'Делаем скидку 10%';
    } else if(price > 20000 && price < 40000) {
        return 'Делаем скидку 5%';
    } else if(price < 20000 && price > 0) {
        return 'Скидка не предусмотрена';
    } else if(price < 0) {
        return 'Что-то пошло не так';
    } else if(price === 0 || price === 20000 || price === 50000) {
        return 'Строгое неравенство';
    }
}



asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
newTitle = getTitle();



console.log(newTitle);
console.log(screenValue);
console.log(responsive);
console.log(service);
console.log(serviceSecond);
console.log(Math.ceil(servicePercentPrice))
console.log(getPercentageMessage(fullPrice))