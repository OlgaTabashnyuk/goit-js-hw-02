// Напиши функцию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
// let string = 'The quick brown fox jumped over the lazy dog';

const findLongestWord = function (string) {
  const array = string.split(' ');
  let longestWord = array[0];

  for (let i = 1; i < array.length; i += 1) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped  over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
