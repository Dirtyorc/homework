const row = ['Aleksey', 'Hello', 'World']
function checkHello(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return `${item} аргумент функции`
    }
  }
  return `${item} не аргумент функции`
}
console.log(checkHello(row, 'Hello'))
console.log(checkHello(row, 'Hell'))
console.log(checkHello(row, 'Aleksey'))

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function checkNumber(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > item) {
      return `${item} не больше 10`
    }
  }
  return `${item} больше 10`
}
console.log(checkNumber(numbers, 9))
console.log(checkNumber(numbers, 12))
console.log(checkNumber(numbers, 8))
console.log(checkNumber(numbers, 15))

// =========калькулятор======

function sumNumbers(num1,num2,operation){
  if(operation == 'minus')
  return num1 - num2
if(operation == 'plus')
  return num1 + num2
if (operation == 'division')
  return num1 / num2
if(operation == 'multiplication')
  return num1 * num2
}
const result = sumNumbers(6,2,'minus')
console.log(result)

