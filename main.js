
/*Task-10*/
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити
// ввести ще раз.
// Цикл повинен питати число, доки користувач не
// введе число більше 100, чи не натисне кнопку
// Cancel в prompt


// console.log("hello world");

// let i=0;
// do{
//     i = prompt("enter number more then 100")
//     console.log(i)
// } while (i <= 100)
    
//     alert(`your number is ${i}`)




/*Task-11*/
// Напишіть функцію, яка приймає адресу сайта url та перевіряє чи закінчується значення
// параметра символом /. Якщо ні, додайте до кінця
// значення url цей символ і поверніть оновлене значення з функції, але тільки в тому випадку,
// якщо в url є підрядок "my-site".
// В іншому випадку поверніть з функції адресу в незмінному вигляді


// function url_check(url) {
//     if (!(url.endsWith('/')) && url.includes('my-site')) {
//         url+='/'
//     }
//     return url;
    
// }

// console.log(url_check('my-site.com'));
// console.log(url_check('my-site.com/'));
// console.log(url_check('google.com'));
// console.log(url_check('sdf/'));




/*Task-15*/
// Напишіть цикл while, який запитує у користувача
// числа через prompt.
// Потрібно підрахувати суму всіх введених чисел.
// Якщо користувач натискає Cancel або залишає поле
// порожнім — зупинити цикл.
// Після завершення циклу вивести суму в консоль.


// let i=0;
// let total=0;
// do {
//     i = prompt('enter the number')
//     total += Number(i);

// } while (i !==0 && i !=='')
    
// console.log(total)
    