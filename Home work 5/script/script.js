//Задание 1

// let d = 7;
// console.log(d);

// let res1 = d * d;
// console.log(res1);

// let res2 = d ** 3;
// console.log(res2);





//Задание 2

// let number1 = prompt('Enter your first number: ');
// let number2 = prompt('Enter your second number: ');

// if (number1 > number2){
//     console.log(number1 + number2);
// } 
// else if (number1 < number2) {
//     console.log(number1 * number2);

// } 
// else {
//     console.log("Числа одинаковые"); 
// }




// Задание 3
// let number3 = prompt("Введите целое число: ");
// if (number3 > 0) {
//     console.log(number3 ** 3);
// } else{
//     console.log('Неправильное число.');
// }


// Задание 4
// let students = prompt("Введите количество учеников: ");
// let chairs = prompt('Введите количество стульев: ');

// if (chairs >= students){
//     console.log("Стульев хватает!");
// }else {
//     console.log("Cтульев не хватает!");
// }


//Задание 5
// for ( let i = 0; i <= 9; i++ ){
//     console.log(i);
// }


//Задание 6
// let array = [1, 5, 10, 8, 25, 3, 17, 11, 36, 50];

// for ( let i=0; i < array.length; i++){
//     if(array[i] >= 15){
//         console.log(array[i]);
//     }
// }


//Задание 7
// let array2 = [5, 7, 6, 2, 9, 10, 12];

// for (let i=0; i < array2.length; i++ ){
//     if (array2[i] % 2) {
//         console.log(array2[i]);
//     }
// }


//Задание 8 
// let array3 = [5, 10, 15, 20, 25, 30, 35, 40];
// for(let i=0; i<array3.length; i++){
//     if (i % 3 === 0) {
//          console.log(array3[i]);
// }
// }


// Задание 9 
// let array4 = [1, 3, 6, 8, 15, 18, 25, 30];
// let sum = 0;

// for ( let i=0; i < array4.length; i++){
//     if (array4[i] % 2 !== 0){
//        sum += array4[i];
//     }
// }
// console.log(sum);




//Задание 10
// let array5 = [10, 21, 5, 15, 25, 30];


// let sumOfEven = 0;
// let sumOfOdd = 0;


// for (let i = 0; i < array5.length; i++) {
    
//     if (array5[i] % 2 === 0) { 
//         sumOfEven += array5[i];
//     } else {
//         sumOfOdd += array5[i];
//     }
// }

// let difference = Math.abs( sumOfEven - sumOfOdd);


// console.log("Разница между суммами четных и нечетных чисел: ", difference);