
var number1 = document.getElementById('num1')
var number2 = document.getElementById('num2')
var opSelect = document.getElementById('select')


let ops = ['add', 'sub', 'div', 'mul']

function checkValue(op) {
  return ops.includes(op)
}

console.log(document.getElementById('select').ariaSelected);

document.body.style.zoom = 2; this.blur();
function display(number) {
  alert(number)
}


async function handler() {
  document.querySelector('.btn').addEventListener('click', () => {
    if (number1.value === null || number2.value === null) {
      alert('Provide values from num 1 & 2')
    } else {
      if (!checkValue(opSelect.value)) {
        alert('Select an operation')
      } else {
        fetcher(opSelect, number1, number2)
      }
    }
  })
}


async function fetcher(op, num1, num2) {
  let r = await (await fetch('http://127.0.0.1:5100/calc?' + new URLSearchParams({
    op: op.value,
    num1: num1.value,
    num2: num2.value
  }))).json()
  document.getElementById('result').value = r
}

handler()