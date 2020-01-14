/**
 * KeksoFit v0.1
 * Author: @keksobot
 * License: CatoFree, NoDogs
 */
/* Техническое задание

Вес корма храним в переменной foodInGrams, а время сна в переменной sleepInHours.
В обе переменные будем записывать целые числа.

За каждые 10 грамм корма, которые я съел, я получаю 3 прыжка.
Например: за 50 грамм корма я должен сделать 15 прыжков.
Прыжки храним в переменной jumps.

За каждый час сна — 2 подтягивания.
Например: я поспал 5 часов и должен подтянуться 10 раз.
Подтягивания храним в переменной pulls.

Каждый прыжок дополняется одним кругом пробежки, а каждое подтягивание — половиной круга.
Например: 20 кругов по комнате даётся за 15 прыжков и 10 подтягиваний.
Круги храним в переменной runs.

*/

// Решение первое

var foodInGrams = prompt('Сколько грамм корма вы съели?');
var sleepInHours = prompt('Время сна?');

var jumps, pulls, runs;

jumps = foodInGrams / 10 * 3;
pulls = sleepInHours * 2;
runs = jumps + pulls / 2;

console.log('Прыжков: ' + jumps + '\n' + 'Подтягиваний: ' + pulls + '\n' + 'Кругов: ' + runs);

// Решение второе
var foodInGrams = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250];
var sleepInHours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function random(arr) {
    a = Math.floor(Math.random() * arr.length);
    return a = arr[a];
}

var jumps, pulls, runs;

jumps = random(foodInGrams) / 10 * 3;
pulls = random(sleepInHours) * 2;
runs = jumps + pulls / 2;

console.log(`Прыжков: ${jumps}` + '\n' + `Подтягиваний: ${pulls}` + '\n' + `Кругов: ${runs}`);