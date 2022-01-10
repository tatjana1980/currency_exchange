// конвертер валют
const currencyRate = async (fromCarrency, toCurrency) => {
    const response = await fetch(`https://api.exchangerate.host/latest?base=${fromCarrency}&symbols=${toCurrency}`);
    const data = await response.json();
    return data;
}

// активация левой валюты
let leftRub = document.querySelector('.left-button-rub');
let leftUsd = document.querySelector('.left-button-usd');
let leftEur = document.querySelector('.left-button-eur');
let leftGbp = document.querySelector('.left-button-gbp');

// активация правой валюты
let rightRub = document.querySelector('.right-button-rub');
let rightUsd = document.querySelector('.right-button-usd');
let rightEur = document.querySelector('.right-button-eur');
let rightGbp = document.querySelector('.right-button-gbp');

// сумма для обмена
let sumChange = document.querySelector('.summa');

//курс конвертации слева
let leftExchangeRate = document.querySelector('.left-exchange-rate');

// полученная сумма обмена
let sumExchange = document.querySelector('.summa-exchange');

//курс конвертации справа
let rightExchangeRate = document.querySelector('.right-exchange-rate');

// валтдация числа в инпут. замена "," на "."
function validate() {

    sumChange.value = sumChange.value.replace(/[^\.\,\d]/g, '');
    sumChange.value = sumChange.value.replace(/,/g, ".");
    // sumChange.value = sumChange.value.replace(/[A-Za-zА-Яа-яЁё]/, '');

    sumExchange.value = sumExchange.value.replace(/,/g, ".");
    sumExchange.value = sumExchange.value.replace(/[^\.\,\d]/g, '');
    // sumExchange.value = sumExchange.value.replace(/[A-Za-zА-Яа-яЁё]/, '');
}

// выбор левого рубля
leftRub.addEventListener('click', (event) => {
    event.target.classList.add('left-active');
    leftUsd.classList.remove('left-active');
    leftEur.classList.remove('left-active');
    leftGbp.classList.remove('left-active');

    if (rightUsd.classList[2] == 'right-active') {
        currencyRate('RUB', 'USD')
            .then(res => {
                leftExchangeRate.innerHTML = `1 RUB = ${res.rates.USD} USD`;
                sumExchange.value = sumChange.value * res.rates.USD;
            })
        currencyRate('USD', 'RUB')
            .then(res => {
                rightExchangeRate.innerHTML = `1 USD = ${res.rates.RUB} RUB`;
            })
    } else if (rightEur.classList[2] == 'right-active') {
        currencyRate('RUB', 'EUR')
            .then(res => {
                leftExchangeRate.innerHTML = `1 RUB = ${res.rates.EUR} EUR`;
                sumExchange.value = sumChange.value * res.rates.EUR;
            })
        currencyRate('EUR', 'RUB')
            .then(res => {
                rightExchangeRate.innerHTML = `1 EUR = ${res.rates.RUB} RUB`;
            })
    } else if (rightGbp.classList[2] == 'right-active') {
        currencyRate('RUB', 'GBP')
            .then(res => {
                leftExchangeRate.innerHTML = `1 RUB = ${res.rates.GBP} GBP`;
                sumExchange.value = sumChange.value * res.rates.GBP;
            })
        currencyRate('GBP', 'RUB')
            .then(res => {
                rightExchangeRate.innerHTML = `1 GBP = ${res.rates.RUB} RUB`;
            })
    } else if (rightRub.classList[2] == 'right-active') {
        leftExchangeRate.innerHTML = `1 RUB = 1 RUB`;
        sumExchange.value = sumChange.value;
        rightExchangeRate.innerHTML = `1 RUB = 1 RUB`;
    }
});

// выбор левого доллара
leftUsd.addEventListener('click', (event) => {
    event.target.classList.add('left-active');
    leftRub.classList.remove('left-active');
    leftEur.classList.remove('left-active');
    leftGbp.classList.remove('left-active');

    if (rightRub.classList[2] == 'right-active') {
        currencyRate('USD', 'RUB')
            .then(res => {
                leftExchangeRate.innerHTML = `1 USD = ${res.rates.RUB} RUB`;
                sumExchange.value = sumChange.value * res.rates.RUB;
            })
        currencyRate('RUB', 'USD')
            .then(res => {
                rightExchangeRate.innerHTML = `1 RUB = ${res.rates.USD} USD`;
            })
    } else if (rightEur.classList[2] == 'right-active') {
        currencyRate('USD', 'EUR')
            .then(res => {
                leftExchangeRate.innerHTML = `1 USD = ${res.rates.EUR} EUR`;
                sumExchange.value = sumChange.value * res.rates.EUR;
            })
        currencyRate('EUR', 'USD')
            .then(res => {
                rightExchangeRate.innerHTML = `1 EUR = ${res.rates.USD} USD`;
            })
    } else if (rightGbp.classList[2] == 'right-active') {
        currencyRate('USD', 'GBP')
            .then(res => {
                leftExchangeRate.innerHTML = `1 USD = ${res.rates.GBP} GBP`;
                sumExchange.value = sumChange.value * res.rates.GBP;
            })
        currencyRate('GBP', 'USD')
            .then(res => {
                rightExchangeRate.innerHTML = `1 GBP = ${res.rates.USD} USD`;
            })
    } else if (rightUsd.classList[2] == 'right-active') {
        leftExchangeRate.innerHTML = `1 USD = 1 USD`;
        sumExchange.value = sumChange.value;
        rightExchangeRate.innerHTML = `1 USD = 1 USD`;
    }
});

// выбор левого евро
leftEur.addEventListener('click', (event) => {
    event.target.classList.add('left-active');
    leftRub.classList.remove('left-active');
    leftUsd.classList.remove('left-active');
    leftGbp.classList.remove('left-active');

    if (rightRub.classList[2] == 'right-active') {
        currencyRate('EUR', 'RUB')
            .then(res => {
                leftExchangeRate.innerHTML = `1 EUR = ${res.rates.RUB} RUB`;
                sumExchange.value = sumChange.value * res.rates.RUB;
            })
        currencyRate('RUB', 'EUR')
            .then(res => {
                rightExchangeRate.innerHTML = `1 RUB = ${res.rates.EUR} EUR`;
            })
    } else if (rightUsd.classList[2] == 'right-active') {
        currencyRate('EUR', 'USD')
            .then(res => {
                leftExchangeRate.innerHTML = `1 EUR = ${res.rates.USD} USD`;
                sumExchange.value = sumChange.value * res.rates.USD;
            })
        currencyRate('USD', 'EUR')
            .then(res => {
                rightExchangeRate.innerHTML = `1 USD = ${res.rates.EUR} EUR`;
            })
    } else if (rightGbp.classList[2] == 'right-active') {
        currencyRate('EUR', 'GBP')
            .then(res => {
                leftExchangeRate.innerHTML = `1 EUR = ${res.rates.GBP} GBP`;
                sumExchange.value = sumChange.value * res.rates.GBP;
            })
        currencyRate('GBP', 'EUR')
            .then(res => {
                rightExchangeRate.innerHTML = `1 GBP = ${res.rates.EUR} EUR`;
            })
    } else if (rightEur.classList[2] == 'right-active') {
        leftExchangeRate.innerHTML = `1 EUR = 1 EUR`;
        sumExchange.value = sumChange.value;
        rightExchangeRate.innerHTML = `1 EUR = 1 EUR`;
    }
});
// выбор левого фунта
leftGbp.addEventListener('click', (event) => {
    event.target.classList.add('left-active');
    leftRub.classList.remove('left-active');
    leftUsd.classList.remove('left-active');
    leftEur.classList.remove('left-active');

    if (rightRub.classList[2] == 'right-active') {
        currencyRate('GBP', 'RUB')
            .then(res => {
                leftExchangeRate.innerHTML = `1 GBP = ${res.rates.RUB} RUB`;
                sumExchange.value = sumChange.value * res.rates.RUB;
            })
        currencyRate('RUB', 'GBP')
            .then(res => {
                rightExchangeRate.innerHTML = `1 RUB = ${res.rates.GBP} GBP`;
            })
    } else if (rightUsd.classList[2] == 'right-active') {
        currencyRate('GBP', 'USD')
            .then(res => {
                leftExchangeRate.innerHTML = `1 GBP = ${res.rates.USD} USD`;
                sumExchange.value = sumChange.value * res.rates.USD;
            })
        currencyRate('USD', 'GBP')
            .then(res => {
                rightExchangeRate.innerHTML = `1 USD = ${res.rates.GBP} GBP`;
            })
    } else if (rightEur.classList[2] == 'right-active') {
        currencyRate('GBP', 'EUR')
            .then(res => {
                leftExchangeRate.innerHTML = `1 GBP = ${res.rates.EUR} EUR`;
                sumExchange.value = sumChange.value * res.rates.EUR;
            })
        currencyRate('EUR', 'GBP')
            .then(res => {
                rightExchangeRate.innerHTML = `1 EUR = ${res.rates.GBP} GBP`;
            })
    } else if (rightGbp.classList[2] == 'right-active') {
        leftExchangeRate.innerHTML = `1 GBP = 1 GBP`;
        sumExchange.value = sumChange.value;
        rightExchangeRate.innerHTML = `1 GBP = 1 GBP`;
    }
});

// выбор правого рубля
rightRub.addEventListener('click', (event) => {
    event.target.classList.add('right-active');
    rightUsd.classList.remove('right-active');
    rightEur.classList.remove('right-active');
    rightGbp.classList.remove('right-active');

    if (leftUsd.classList[2] == 'left-active') {
        currencyRate('USD', 'RUB')
            .then(res => {
                leftExchangeRate.innerHTML = `1 USD = ${res.rates.RUB} RUB`;
                sumExchange.value = sumChange.value * res.rates.RUB;
            })
        currencyRate('RUB', 'USD')
            .then(res => {
                rightExchangeRate.innerHTML = `1 RUB = ${res.rates.USD} USD`;
            })
    } else if (leftEur.classList[2] == 'left-active') {
        currencyRate('EUR', 'RUB')
            .then(res => {
                leftExchangeRate.innerHTML = `1 EUR = ${res.rates.RUB} RUB`;
                sumExchange.value = sumChange.value * res.rates.RUB;
            })
        currencyRate('RUB', 'EUR')
            .then(res => {
                rightExchangeRate.innerHTML = `1 RUB = ${res.rates.EUR} EUR`;
            })
    } else if (leftGbp.classList[2] == 'left-active') {
        currencyRate('GBP', 'RUB')
            .then(res => {
                leftExchangeRate.innerHTML = `1 GBP = ${res.rates.RUB} RUB`;
                sumExchange.value = sumChange.value * res.rates.RUB;
            })
        currencyRate('RUB', 'GBP')
            .then(res => {
                rightExchangeRate.innerHTML = `1 RUB = ${res.rates.GBP} GBP`;
            })
    } else if (leftRub.classList[2] == 'left-active') {
        leftExchangeRate.innerHTML = `1 RUB = 1 RUB`;
        sumExchange.value = sumChange.value;
        rightExchangeRate.innerHTML = `1 RUB = 1 RUB`;
    }
});
// выбор правого доллара
rightUsd.addEventListener('click', (event) => {
    event.target.classList.add('right-active');
    rightRub.classList.remove('right-active');
    rightEur.classList.remove('right-active');
    rightGbp.classList.remove('right-active');

    if (leftRub.classList[2] == 'left-active') {
        currencyRate('RUB', 'USD')
            .then(res => {
                leftExchangeRate.innerHTML = `1 RUB = ${res.rates.USD} USD`;
                sumExchange.value = sumChange.value * res.rates.USD;
            })
        currencyRate('USD', 'RUB')
            .then(res => {
                rightExchangeRate.innerHTML = `1 USD = ${res.rates.RUB} RUB`;
            })
    } else if (leftEur.classList[2] == 'left-active') {
        currencyRate('EUR', 'USD')
            .then(res => {
                leftExchangeRate.innerHTML = `1 EUR = ${res.rates.USD} USD`;
                sumExchange.value = sumChange.value * res.rates.USD;
            })
        currencyRate('USD', 'EUR')
            .then(res => {
                rightExchangeRate.innerHTML = `1 USD = ${res.rates.EUR} EUR`;
            })
    } else if (leftGbp.classList[2] == 'left-active') {
        currencyRate('GBP', 'USD')
            .then(res => {
                leftExchangeRate.innerHTML = `1 GBP = ${res.rates.USD} USD`;
                sumExchange.value = sumChange.value * res.rates.USD;
            })
        currencyRate('USD', 'GBP')
            .then(res => {
                rightExchangeRate.innerHTML = `1 USD = ${res.rates.GBP} GBP`;
            })
    } else if (leftUsd.classList[2] == 'left-active') {
        leftExchangeRate.innerHTML = `1 USD = 1 USD`;
        sumExchange.value = sumChange.value;
        rightExchangeRate.innerHTML = `1 USD = 1 USD`;
    }
});
// выбор правого евро
rightEur.addEventListener('click', (event) => {
    event.target.classList.add('right-active');
    rightRub.classList.remove('right-active');
    rightUsd.classList.remove('right-active');
    rightGbp.classList.remove('right-active');

    if (leftRub.classList[2] == 'left-active') {
        currencyRate('RUB', 'EUR')
            .then(res => {
                leftExchangeRate.innerHTML = `1 RUB = ${res.rates.EUR} EUR`;
                sumExchange.value = sumChange.value * res.rates.EUR;
            })
        currencyRate('EUR', 'RUB')
            .then(res => {
                rightExchangeRate.innerHTML = `1 EUR = ${res.rates.RUB} RUB`;
            })
    } else if (leftUsd.classList[2] == 'left-active') {
        currencyRate('USD', 'EUR')
            .then(res => {
                leftExchangeRate.innerHTML = `1 USD = ${res.rates.EUR} EUR`;
                sumExchange.value = sumChange.value * res.rates.EUR;
            })
        currencyRate('EUR', 'USD')
            .then(res => {
                rightExchangeRate.innerHTML = `1 EUR = ${res.rates.USD} USD`;
            })
    } else if (leftGbp.classList[2] == 'left-active') {
        currencyRate('GBP', 'EUR')
            .then(res => {
                leftExchangeRate.innerHTML = `1 GBP = ${res.rates.EUR} EUR`;
                sumExchange.value = sumChange.value * res.rates.EUR;
            })
        currencyRate('EUR', 'GBP')
            .then(res => {
                rightExchangeRate.innerHTML = `1 EUR = ${res.rates.GBP} GBP`;
            })
    } else if (leftEur.classList[2] == 'left-active') {
        leftExchangeRate.innerHTML = `1 EUR = 1 EUR`;
        sumExchange.value = sumChange.value;
        rightExchangeRate.innerHTML = `1 EUR = 1 EUR`;
    }
});
// выбор правого фунта
rightGbp.addEventListener('click', (event) => {
    event.target.classList.add('right-active');
    rightRub.classList.remove('right-active');
    rightUsd.classList.remove('right-active');
    rightEur.classList.remove('right-active');

    if (leftRub.classList[2] == 'left-active') {
        currencyRate('RUB', 'GBP')
            .then(res => {
                leftExchangeRate.innerHTML = `1 RUB = ${res.rates.GBP} GBP`;
                sumExchange.value = sumChange.value * res.rates.GBP;
            })
        currencyRate('GBP', 'RUB')
            .then(res => {
                rightExchangeRate.innerHTML = `1 GBP = ${res.rates.RUB} RUB`;
            })
    } else if (leftUsd.classList[2] == 'left-active') {
        currencyRate('USD', 'GBP')
            .then(res => {
                leftExchangeRate.innerHTML = `1 USD = ${res.rates.GBP} GBP`;
                sumExchange.value = sumChange.value * res.rates.GBP;
            })
        currencyRate('GBP', 'USD')
            .then(res => {
                rightExchangeRate.innerHTML = `1 GBP = ${res.rates.USD} USD`;
            })
    } else if (leftEur.classList[2] == 'left-active') {
        currencyRate('EUR', 'GBP')
            .then(res => {
                leftExchangeRate.innerHTML = `1 EUR = ${res.rates.GBP} GBP`;
                sumExchange.value = sumChange.value * res.rates.GBP;
            })
        currencyRate('GBP', 'EUR')
            .then(res => {
                rightExchangeRate.innerHTML = `1 GBP = ${res.rates.EUR} EUR`;
            })
    } else if (leftGbp.classList[2] == 'left-active') {
        leftExchangeRate.innerHTML = `1 GBP = 1 GBP`;
        sumExchange.value = sumChange.value;
        rightExchangeRate.innerHTML = `1 GBP = 1 GBP`;
    }
});
// при вводе данных в левый инпут
sumChange.addEventListener('keyup', () => {
    // для рубля
    if ((leftRub.classList[2] == 'left-active') && (rightUsd.classList[2] == 'right-active')) {
        currencyRate('RUB', 'USD')
            .then(res => {
                leftExchangeRate.innerHTML = `1 RUB = ${res.rates.USD} USD`;
                sumExchange.value = sumChange.value * res.rates.USD;
            })
        currencyRate('USD', 'RUB')
            .then(res => {
                rightExchangeRate.innerHTML = `1 USD = ${res.rates.RUB} RUB`;
            })
    } else if ((leftRub.classList[2] == 'left-active') && (rightEur.classList[2] == 'right-active')) {
        currencyRate('RUB', 'EUR')
            .then(res => {
                leftExchangeRate.innerHTML = `1 RUB = ${res.rates.EUR} EUR`;
                sumExchange.value = sumChange.value * res.rates.EUR;
            })
        currencyRate('EUR', 'RUB')
            .then(res => {
                rightExchangeRate.innerHTML = `1 EUR = ${res.rates.RUB} RUB`;
            })
    } else if ((leftRub.classList[2] == 'left-active') && (rightGbp.classList[2] == 'right-active')) {
        currencyRate('RUB', 'GBP')
            .then(res => {
                leftExchangeRate.innerHTML = `1 RUB = ${res.rates.GBP} GBP`;
                sumExchange.value = sumChange.value * res.rates.GBP;
            })
        currencyRate('GBP', 'RUB')
            .then(res => {
                rightExchangeRate.innerHTML = `1 GBP = ${res.rates.RUB} RUB`;
            })
    } else if ((leftRub.classList[2] == 'left-active') && (rightRub.classList[2] == 'right-active')) {
        leftExchangeRate.innerHTML = `1 RUB = 1 RUB`;
        sumExchange.value = sumChange.value;
        rightExchangeRate.innerHTML = `1 RUB = 1 RUB`;
    }
    // для доллара
    if ((leftUsd.classList[2] == 'left-active') && (rightRub.classList[2] == 'right-active')) {
        currencyRate('USD', 'RUB')
            .then(res => {
                leftExchangeRate.innerHTML = `1 USD = ${res.rates.RUB} RUB`;
                sumExchange.value = sumChange.value * res.rates.RUB;
            })
        currencyRate('RUB', 'USD')
            .then(res => {
                rightExchangeRate.innerHTML = `1 RUB = ${res.rates.USD} USD`;
            })
    } else if ((leftUsd.classList[2] == 'left-active') && (rightEur.classList[2] == 'right-active')) {
        currencyRate('USD', 'EUR')
            .then(res => {
                leftExchangeRate.innerHTML = `1 USD = ${res.rates.EUR} EUR`;
                sumExchange.value = sumChange.value * res.rates.EUR;
            })
        currencyRate('EUR', 'USD')
            .then(res => {
                rightExchangeRate.innerHTML = `1 EUR = ${res.rates.USD} USD`;
            })
    } else if ((leftUsd.classList[2] == 'left-active') && (rightGbp.classList[2] == 'right-active')) {
        currencyRate('USD', 'GBP')
            .then(res => {
                leftExchangeRate.innerHTML = `1 USD = ${res.rates.GBP} GBP`;
                sumExchange.value = sumChange.value * res.rates.GBP;
            })
        currencyRate('GBP', 'USD')
            .then(res => {
                rightExchangeRate.innerHTML = `1 GBP = ${res.rates.USD} USD`;
            })
    } else if ((leftUsd.classList[2] == 'left-active') && (rightUsd.classList[2] == 'right-active')) {
        leftExchangeRate.innerHTML = `1 USD = 1 USD`;
        sumExchange.value = sumChange.value;
        rightExchangeRate.innerHTML = `1 USD = 1 USD`;
    }
    // для евро
    if ((leftEur.classList[2] == 'left-active') && (rightRub.classList[2] == 'right-active')) {
        currencyRate('EUR', 'RUB')
            .then(res => {
                leftExchangeRate.innerHTML = `1 EUR = ${res.rates.RUB} RUB`;
                sumExchange.value = sumChange.value * res.rates.RUB;
            })
        currencyRate('RUB', 'EUR')
            .then(res => {
                rightExchangeRate.innerHTML = `1 RUB = ${res.rates.EUR} EUR`;
            })
    } else if ((leftEur.classList[2] == 'left-active') && (rightUsd.classList[2] == 'right-active')) {
        currencyRate('EUR', 'USD')
            .then(res => {
                leftExchangeRate.innerHTML = `1 EUR = ${res.rates.USD} USD`;
                sumExchange.value = sumChange.value * res.rates.USD;
            })
        currencyRate('USD', 'EUR')
            .then(res => {
                rightExchangeRate.innerHTML = `1 USD = ${res.rates.EUR} EUR`;
            })
    } else if ((leftEur.classList[2] == 'left-active') && (rightGbp.classList[2] == 'right-active')) {
        currencyRate('EUR', 'GBP')
            .then(res => {
                leftExchangeRate.innerHTML = `1 EUR = ${res.rates.GBP} GBP`;
                sumExchange.value = sumChange.value * res.rates.GBP;
            })
        currencyRate('GBP', 'EUR')
            .then(res => {
                rightExchangeRate.innerHTML = `1 GBP = ${res.rates.EUR} EUR`;
            })
    } else if ((leftEur.classList[2] == 'left-active') && (rightEur.classList[2] == 'right-active')) {
        leftExchangeRate.innerHTML = `1 EUR = 1 EUR`;
        sumExchange.value = sumChange.value;
        rightExchangeRate.innerHTML = `1 EUR = 1 EUR`;
    }
    // для фунта
    if ((leftGbp.classList[2] == 'left-active') && (rightRub.classList[2] == 'right-active')) {
        currencyRate('GBP', 'RUB')
            .then(res => {
                leftExchangeRate.innerHTML = `1 GBP = ${res.rates.RUB} RUB`;
                sumExchange.value = sumChange.value * res.rates.RUB;
            })
        currencyRate('RUB', 'GBP')
            .then(res => {
                rightExchangeRate.innerHTML = `1 RUB = ${res.rates.GBP} GBP`;
            })
    } else if ((leftGbp.classList[2] == 'left-active') && (rightUsd.classList[2] == 'right-active')) {
        currencyRate('GBP', 'USD')
            .then(res => {
                leftExchangeRate.innerHTML = `1 GBP = ${res.rates.USD} USD`;
                sumExchange.value = sumChange.value * res.rates.USD;
            })
        currencyRate('USD', 'GBP')
            .then(res => {
                rightExchangeRate.innerHTML = `1 USD = ${res.rates.GBP} GBP`;
            })
    } else if ((leftGbp.classList[2] == 'left-active') && (rightEur.classList[2] == 'right-active')) {
        currencyRate('GBP', 'EUR')
            .then(res => {
                leftExchangeRate.innerHTML = `1 GBP = ${res.rates.EUR} EUR`;
                sumExchange.value = sumChange.value * res.rates.EUR;
            })
        currencyRate('EUR', 'GBP')
            .then(res => {
                rightExchangeRate.innerHTML = `1 EUR = ${res.rates.GBP} GBP`;
            })
    } else if ((leftGbp.classList[2] == 'left-active') && (rightGbp.classList[2] == 'right-active')) {
        leftExchangeRate.innerHTML = `1 GBP = 1 GBP`;
        sumExchange.value = sumChange.value;
        rightExchangeRate.innerHTML = `1 GBP = 1 GBP`;
    }
})
// при вводе данных в правый инпут
sumExchange.addEventListener('keyup', () => {
    // для рубля
    if ((leftUsd.classList[2] == 'left-active') && (rightRub.classList[2] == 'right-active')) {
        currencyRate('USD', 'RUB')
            .then(res => {
                leftExchangeRate.innerHTML = `1 USD = ${res.rates.RUB} RUB`;
            })
        currencyRate('RUB', 'USD')
            .then(res => {
                rightExchangeRate.innerHTML = `1 RUB = ${res.rates.USD} USD`;
                sumChange.value = sumExchange.value * res.rates.USD;
            })
    } else if ((leftEur.classList[2] == 'left-active') && (rightRub.classList[2] == 'right-active')) {
        currencyRate('EUR', 'RUB')
            .then(res => {
                leftExchangeRate.innerHTML = `1 EUR = ${res.rates.RUB} RUB`;
            })
        currencyRate('RUB', 'EUR')
            .then(res => {
                rightExchangeRate.innerHTML = `1 RUB = ${res.rates.EUR} EUR`;
                sumChange.value = sumExchange.value * res.rates.EUR;
            })
    } else if ((leftGbp.classList[2] == 'left-active') && (rightRub.classList[2] == 'right-active')) {
        currencyRate('GBP', 'RUB')
            .then(res => {
                leftExchangeRate.innerHTML = `1 GBP = ${res.rates.RUB} RUB`;
            })
        currencyRate('RUB', 'GBP')
            .then(res => {
                rightExchangeRate.innerHTML = `1 RUB = ${res.rates.GBP} GBP`;
                sumChange.value = sumExchange.value * res.rates.GBP;
            })
    } else if ((leftRub.classList[2] == 'left-active') && (rightRub.classList[2] == 'right-active')) {
        leftExchangeRate.innerHTML = `1 RUB = 1 RUB`;
        sumExchange.value = sumChange.value;
        rightExchangeRate.innerHTML = `1 RUB = 1 RUB`;
    }
    // для доллара
    if ((leftRub.classList[2] == 'left-active') && (rightUsd.classList[2] == 'right-active')) {
        currencyRate('RUB', 'USD')
            .then(res => {
                leftExchangeRate.innerHTML = `1 RUB = ${res.rates.USD} USD`;
            })
        currencyRate('USD', 'RUB')
            .then(res => {
                rightExchangeRate.innerHTML = `1 USD = ${res.rates.RUB} RUB`;
                sumChange.value = sumExchange.value * res.rates.RUB;
            })
    } else if ((leftEur.classList[2] == 'left-active') && (rightUsd.classList[2] == 'right-active')) {
        currencyRate('EUR', 'USD')
            .then(res => {
                leftExchangeRate.innerHTML = `1 EUR = ${res.rates.USD} USD`;
            })
        currencyRate('USD', 'EUR')
            .then(res => {
                rightExchangeRate.innerHTML = `1 USD = ${res.rates.EUR} EUR`;
                sumChange.value = sumExchange.value * res.rates.EUR;
            })
    } else if ((leftGbp.classList[2] == 'left-active') && (rightUsd.classList[2] == 'right-active')) {
        currencyRate('GBP', 'USD')
            .then(res => {
                leftExchangeRate.innerHTML = `1 GBP = ${res.rates.USD} USD`;
            })
        currencyRate('USD', 'GBP')
            .then(res => {
                rightExchangeRate.innerHTML = `1 USD = ${res.rates.GBP} GBP`;
                sumChange.value = sumExchange.value * res.rates.GBP;
            })
    } else if ((leftUsd.classList[2] == 'left-active') && (rightUsd.classList[2] == 'right-active')) {
        leftExchangeRate.innerHTML = `1 USD = 1 USD`;
        sumExchange.value = sumChange.value;
        rightExchangeRate.innerHTML = `1 USD = 1 USD`;
    }
    // для евро
    if ((leftRub.classList[2] == 'left-active') && (rightEur.classList[2] == 'right-active')) {
        currencyRate('RUB', 'EUR')
            .then(res => {
                leftExchangeRate.innerHTML = `1 RUB = ${res.rates.EUR} EUR`;
            })
        currencyRate('EUR', 'RUB')
            .then(res => {
                rightExchangeRate.innerHTML = `1 EUR = ${res.rates.RUB} RUB`;
                sumChange.value = sumExchange.value * res.rates.RUB;
            })
    } else if ((leftUsd.classList[2] == 'left-active') && (rightEur.classList[2] == 'right-active')) {
        currencyRate('USD', 'EUR')
            .then(res => {
                leftExchangeRate.innerHTML = `1 USD = ${res.rates.EUR} EUR`;
            })
        currencyRate('EUR', 'USD')
            .then(res => {
                rightExchangeRate.innerHTML = `1 EUR = ${res.rates.USD} USD`;
                sumChange.value = sumExchange.value * res.rates.USD;
            })
    } else if ((leftGbp.classList[2] == 'left-active') && (rightEur.classList[2] == 'right-active')) {
        currencyRate('GBP', 'EUR')
            .then(res => {
                leftExchangeRate.innerHTML = `1 GBP = ${res.rates.EUR} EUR`;
            })
        currencyRate('EUR', 'GBP')
            .then(res => {
                rightExchangeRate.innerHTML = `1 EUR = ${res.rates.GBP} GBP`;
                sumChange.value = sumExchange.value * res.rates.GBP;
            })
    } else if ((leftEur.classList[2] == 'left-active') && (rightEur.classList[2] == 'right-active')) {
        leftExchangeRate.innerHTML = `1 EUR = 1 EUR`;
        sumExchange.value = sumChange.value;
        rightExchangeRate.innerHTML = `1 EUR = 1 EUR`;
    }
    // для фунта
    if ((leftRub.classList[2] == 'left-active') && (rightGbp.classList[2] == 'right-active')) {
        currencyRate('RUB', 'GBP')
            .then(res => {
                leftExchangeRate.innerHTML = `1 RUB = ${res.rates.GBP} GBP`;
            })
        currencyRate('GBP', 'RUB')
            .then(res => {
                rightExchangeRate.innerHTML = `1 GBP = ${res.rates.RUB} RUB`;
                sumChange.value = sumExchange.value * res.rates.RUB;
            })
    } else if ((leftUsd.classList[2] == 'left-active') && (rightGbp.classList[2] == 'right-active')) {
        currencyRate('USD', 'GBP')
            .then(res => {
                leftExchangeRate.innerHTML = `1 USD = ${res.rates.GBP} GBP`;
            })
        currencyRate('GBP', 'USD')
            .then(res => {
                rightExchangeRate.innerHTML = `1 GBP = ${res.rates.USD} USD`;
                sumChange.value = sumExchange.value * res.rates.USD;
            })
    } else if ((leftEur.classList[2] == 'left-active') && (rightGbp.classList[2] == 'right-active')) {
        currencyRate('EUR', 'GBP')
            .then(res => {
                leftExchangeRate.innerHTML = `1 EUR = ${res.rates.GBP} GBP`;
            })
        currencyRate('GBP', 'EUR')
            .then(res => {
                rightExchangeRate.innerHTML = `1 GBP = ${res.rates.EUR} EUR`;
                sumChange.value = sumExchange.value * res.rates.EUR;
            })
    } else if ((leftGbp.classList[2] == 'left-active') && (rightGbp.classList[2] == 'right-active')) {
        leftExchangeRate.innerHTML = `1 GBP = 1 GBP`;
        sumExchange.value = sumChange.value;
        rightExchangeRate.innerHTML = `1 GBP = 1 GBP`;
    }
})