
'use strict';



let money = prompt("Ваш бюджет на месяц?", "0");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2018-01-31");

// console.log(money);
// console.log(time);

let appData = {
  balance: 0,
  timeData: '',
  expenses: {},
  optionalExpenses: {},
  savings: false,
  income: []
};

appData.balance = money;
appData.timeData = time;

let answer1 = prompt("Введите обязательную статью расходов в этом месяце", "");
answer1 += ':' ;
let numAnswer1 = prompt("Во сколько обойдется?", "0");
answer1 += numAnswer1;
console.log(answer1);

let answer2 = prompt("Введите обязательную статью расходов в этом месяце", "");
answer2 += ':' ;
let numAnswer2 = prompt("Во сколько обойдется?", "0");
answer2 += numAnswer2;
console.log(answer2);

appData.expenses[0] = answer1;
appData.expenses[1] = answer2;

let calcBalansDay = ((+appData.balance) - (+numAnswer1) - (+numAnswer2)) / 30;

alert("Ваш бюджет на день составляет" + " - " + calcBalansDay);

