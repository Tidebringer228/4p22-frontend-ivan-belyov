'use strict'

const button = document.getElementById('submit')
const resultform = document.getElementById('resultform')

function func() {
  const num1 = document.getElementById("num1").value;
  const operator = document.getElementById("operator").value;
  const num2 = document.getElementById("num2").value;
  let result;

  if (num1 === "") {
    resultform.innerText = "Первое число не указано";
    return console.log("Первое число не указано");
  }

  if (num2 === "") {
    resultform.innerText = "Второе число не указано";
    return console.log("Второе число не указано");
  }

  if (num1 === " ") {
    resultform.innerText = "Первое число не указано";
    return console.log("Первое число не указано");
  }

  if (num2 === " ") {
    resultform.innerText = "Второе число не указано";
    return console.log("Второе число не указано");
  }

  if (isNaN(num1) === true || isNaN(num2) === true) {
    resultform.innerText = "Некорректный ввод чисел";
    return console.log("Некорректный ввод чисел");
  }

  if (operator === "") {
    resultform.innerText = "Не введён знак";
    return console.log("Не введён знак");
  }

  switch (operator) {
    case "":
      return console.log("Не введён знак");
      break;
    case "+":
      result = Number(num1) + Number(num2);
      break;
    case "-":
      result = Number(num1) - Number(num2);
      break;
    case "/":
      result = Number(num1) / Number(num2);
      break;
    case "*":
      result = Number(num1) * Number(num2);
      break;
    default:
      return (resultform.innerText =
        "Программа не поддерживает такую операцию");
     console.log("Программа не поддерживает такую операцию");
      break;
  }

  if (isNaN(result)) {
    resultform.innerText = "Некорректный ввод чисел";
    return console.log("Некорректный ввод чисел");
  }

  if (result === -Infinity || result === Infinity) {
    resultform.innerText = "Операция некорректна";
    console.log("Операция некорректна");
  } else {
    resultform.innerText = result;
    console.log(result);
  }

}
