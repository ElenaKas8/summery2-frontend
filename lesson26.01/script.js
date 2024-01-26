//методы массивов
// МЕТОДЫ МАССИВОВ

// 1. Простые методы, принимают простое значение, вообще не принимаю аргументов, мутирую исходный массив

// .push() - добавляет элемент в конец массива
// .pop() - удаляет элемент из конца массива
// .shift() - удаляет элемент из начала массива
// .unshift() - добавляет элемент в начало массива


// 2. Методы, принимающие в качестве агрумента callback-функцию

// .forEach(() => {}) - метод, который применяет переданную функцию к каждому элементу массива. Возвращает undefined = ничего не возвращает
// .map(() => {}) - метод, который применяет переданную функцию к каждому элементу массива. Возвращает новый массив

// .filter(() => {}) - метод, который формирует/возвращает новый массив, в который попадают только те элементы исходного массива, которые подошли по переданному условию

// .find(() => {})-метод, который возвращает первый элемент, который подошел по переданному условию
// .reduce(() => {})
// .sort(() => {})

// Callback-фунция - функция, переданная внутрь другой функции в качестве аргумента
// Функция высшего порядка - функция, которая принимает callback-функцию в качестве аргумента

//     Metod find()
// const numbers = [3, -100, 45, 58, 73, 13, -17, -83, 52];

// 1. Сформировать массив из положительных чисел

// const positive_nums = numbers.filter(num => num > 0);
// console.log('positive_nums', positive_nums);


// 2. Найти первое положительное число из массива

// const first_positive_num =numbers.find(num => num > 0);
//  console.log(first_positive_num);


//  3. Сформировать массив из положительных четных чисел
// => [58, 52]


// const positive_even_nums = numbers.filter(num => num > 0 && num % 2 === 0);

// console.log( positive_even_nums);
// // 4. Найти первое положительное четное число
// // => 58

// const first_positive_even_num = numbers.find(num => num > 0 && num % 2 === 0);
// console.log(first_positive_even_num);


// Пример объекта

// const user = {
//     id: 1,
//     firstname: 'Nelli',
//     lastname: 'Efremyan',
//     age: 28,
//     online: true,
//     address: {
//       city: 'Yerevan',
//       country: 'Armenia'
//     },
//     languages: ['English', 'Russian']
//   };

//   // 1. Вывести в консоль имя пользователя
// const key = 'firstname';


//   console.log(user.firstname);
//   console.log(user['firstname']);

//   // 2. Вывести в консоль city

//   console.log(user.address.city);
//   console.log(user['address']['city']);
//   console.log(user.address['city']);

//----PRACTICAL----------------

const users = [
    {
      id: 1,
      name: 'Oleg',
      age: 23,
      online: true,
      address: {
        postcode: 1122,
        city: 'Berlin',
        country: 'Germany'
      }
    },
    {
      id: 2,
      name: 'Anna',
      age: 15,
      online: false,
      address: {
        postcode: 6097,
        city: 'Madrid',
        country: 'Spain'
      }
    },
    {
      id: 3,
      name: 'Olga',
      age: 45,
      online: true,
      address: {
        postcode: 7989,
        city: 'Barselona',
        country: 'Spain'
      }
    },
    {
      id: 4,
      name: 'Igor',
      age: 64,
      online: false,
      address: {
        postcode: 6609,
        city: 'Paris',
        country: 'France'
      }
    }
  ]

  // 1. Сформировать массив совершеннолетних пользователей
// Вывести в консоль новый массив

// let array = users.filter(user => user.age >= 18);
// console.log(array);

// 2. Сформировать массив совершеннолетних пользователей, проживающих в Испании
// Вывести в консоль новый массив
// let array = users.filter(user => user.age >= 18 && user.address.country === 'Spain');
// console.log(array);

// 3. Сформировать массив, в котором для каждого элемента из массива users будет сформирована строка в формате 'ИМЯ (ВОЗРАСТ years). Address: ГОРОД, СТРАНА'
// => ['Oleg (23 years). Address: Berlin, Germany', '...', '...', '...']

// let array = users.map(user => `${user.name} (${user.age} years). Address: ${user.address.city}, ${user.address.country}`);
// console.log(array);

// 4. Сформировать массив из имен пользователей
// => ['Oleg', 'Anna', 'Olga', 'Igor']

// let array = users.map(user => user.name);
// console.log(array);


// 5. Сформировать массив пользователей, чье имя начинается на O (учитывать все регистры)
// => [{}, {}]
// let array = users.filter(user => user.name.toLowerCase().startsWith('o'));
// console.log(array);

//  6. Сформировать массив из имен совершеннолетних пользователей, которые сейчас в сети
//  => ['oleg', 'Olga']

// const online_users = users.filter(user => user.age >= 18 && user.online).map(user => user.name);
// console.log(online_users);


// METOD REDUCE()-ОН ПОДСЧИТЫВАЕТ СУММУ КАЖДОГО ЭЛЕМЕНТА МАССИВА и возвращает ее значение
// Metod forEach()-ОН ПОДСЧИТЫВАЕТ КАЖДЫЙ ЭЛЕМЕНТ МАССИВА и не возвращает никаких значений


// let numbers = [3, -100, 45, 58, 73, 13, -17, -83, 52];

// let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum);


//  6. Найти произведение элементов массива numbers

//   numbers.reduce((accumulator, currentValue) => accumulator * currentValue,0);
//   console.log(numbers);
 

// .forEach()
// let result=1;
// numbers.forEach(num => result *= num);
// console.log(result);


// let multiply2 =numbers.forEach(num => console.log(num));
// .reduce()

//  7. Найти сумму возрастов пользователей
// => 147

let sum = users.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0);
console.log(sum);