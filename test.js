let search = document.getElementById("search-field");
let btn = document.getElementById("button");
btn.addEventListener("click", onButtonClick);

function onButtonClick() {
    outputSearchField();
    alert(people[0]['name']);
    outputWithTimeout();
}

/**
 * 3. JS: кликаем по кнопке - видим в alert-е то, что введено в поле поиска. Не использовать onclick атрибут в разметке кода.
 * 4. Если ввести в поиск слово google и нажать кнопку НАЙТИ, то нужно показать в алерте “Yandex круче. Но это не точно”
 */
function outputSearchField() {
    if (search.value == "google") {
        alert('Yandex круче. Но это не точно');
    }
    else {
        alert(search.value);
    }
}

/**
 * 5. Создать массив объектов. 3-4 объекта, каждый имеет свойства name и age.
 * При нажатии на кнопку НАЙТИ также вывести ещё и св-во name первого объекта в массиве
 */
var people = [
    { name: 'Pavel', age: 14 },
    { name: 'Mikle', age: 18 },
    { name: 'Alesya', age: 13 },
    { name: 'Masha', age: 17 }
];

/**
 * 6. Создать функцию superSum, которая будет в алерте показывать сумму ЛЮБЫХ двух чисел, переданных этой функции через параметры 
 */
function superSum(value1, value2) {
    alert(value1 + value2);
}

/**
 * 7. Создать массив из чисел в перемешку (не отсортированы). 
 * С помощью цикла for найти максимальный и минимальный элементы в массиве
 */
function maxAndMinEl() {
    var arr = [4, 23, 7, 39, 19, 0, 9]
    var min = arr[0];
    var max = min;
    for (var i = 0; i < arr.length - 1; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
        else if (arr[i] < max) {
            min = arr[i];
        }
    }
    console.log('max = ', max + ', min = ' + min);
}

/**
 * 8. Создать 2 переменные a и b… присвоить им любые значения.
 * Потом программно поменять эти значения местами, не используя значения напрямую
 */
function changeValue() {
    let a = "XXX";
    let b = "YYY";
    [a, b] = [b, a];
    console.log(a);
    console.log(b);
}

/**
 * 9. Оформить алгоритм поиска максимального числа в массиве как функцию findMax
 * (чтобы можно было передавать в неё любой массив чисел, а на выходе она возвращала нам максимальное число из массива)
 */
function findMax(array) {
    return Math.max.apply(null, array);
}

/**
 * 10. показать alert с результатом поиска не сразу, а через 3 секунды после нажатия
 * (всё то же самое, как и работало, в частности с “яндекс круче всех”, но с задержкой в 3 секунды)
 */
function outputWithTimeout() {
    setTimeout(() =>
        outputSearchField()
        , 3000);
}
