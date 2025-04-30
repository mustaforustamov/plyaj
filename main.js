// Examen JavaScript Amaliy savollar 

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:Pasdan yozib keting kodini


// let остаток = 5 % 2;
// alert(остаток);



// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini


// let randomNumber = Math.floor(Math.random() * 10) + 1;
// alert(randomNumber);





// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring! 

// сделать число 12.510 целым

// ответ должен выйти 12

// javob: 12 chiqishi kerak!



// let num = 12.510;
// let result = Math.floor(num);
// alert(result);







// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// Javob:Kodini yozib bering 


// function countLetters(word) {
//     alert(word.split(' ').join('').length);
//   }
  
//   countLetters("MARS IT SCHOOL");
  




// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering


// function printWord() {
//     for (let i = 0; i < 10; i++) {
//       console.log("MARS IT SCHOOL");
//     }
//   }
  
//   printWord();
  

// 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering

// let буквы = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

// let имя = "mag1stro";

// let результат = имя.split('').map(символ => {
//     if (символ === '1') {
//         return '1'; 
//     } else {
//         return символ; 
//     }
// }).join('');

// console.log(результат);




// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering



// let возраст = prompt("Сколько вам лет?"); 
// возраст = Number(возраст); 



// if (возраст > 18) {
//     alert("Ваш возраст больше 18 лет.");
// } else if (возраст < 18) {
//     alert("Ваш возраст меньше 18 лет.");
// } else {
//     alert("Вам ровно 18 лет.");
// }
 


// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering


// let имя = prompt("Введите своё имя:");
// let перевёрнутоеИмя = имя.split('').reverse().join('');
// console.log(перевёрнутоеИмя);



// 9-savol DOM

// Promtdan ismigizni kiriting va yoshingizni kiriting va uni style berilgan holda DOM ga chiqaring


// Javob:Kodini yozib bering

// let имя = prompt("Введите своё имя:");
// let возраст = prompt("Введите свой возраст:");
// alert(`Привет, ${имя}! Тебе ${возраст} лет.`);
// let вывод = document.getElementById('output');
// вывод.textContent = `Привет, ${имя}! Тебе ${возраст} лет.`;
// вывод.style.color = "blue";
// вывод.style.fontSize = "30px";
// вывод.style.fontWeight = "bold";
// вывод.style.textAlign = "center";
// вывод.style.marginTop = "50px";


// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring

// найти и вывести четные массивы в консоль, с помощью методов


// Javob :Kodini yozib bering



// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let chetnie = sonlar.filter(function(son) {
//   return son % 2 === 0;
// });

// console.log(chetnie);
