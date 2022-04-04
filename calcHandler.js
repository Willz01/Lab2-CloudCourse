
let ops = ['add', 'sub', 'div', 'mul']

function checkQuery(op) {
  return ops.includes(op)
}

function handleOps(op, num1, num2) {
  if (op === 'mul') {
    return num1 * num2

  } else if (op === 'add') {
    return parseFloat(num1) + parseFloat(num2)

  } else if (op === 'div') {
    if (num2 === 0) return 'undefined'
    else return num1 / num2

  } else if (op === 'sub') {
    return num1 - num2
  }
}

exports.checkQuery = checkQuery
exports.handleOps = handleOps