// Напиши скрипт, который, для объекта user, последовательно:

//     добавляет поле mood со значением 'happy'
//     заменяет значение hobby на 'skydiving'
//     заменяет значение premium на false
//     выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const items = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];

const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    const message = `${i + 1}  - ${array[i]}`;
    console.log(message);
  }
};
logItems(items);
logItems(numbers);
