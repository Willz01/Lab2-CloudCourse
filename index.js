const express = require('express')
const path = require('path')
const { checkQuery, handleOps } = require('./calcHandler')

const PORT = 5100

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use('/calc', (req, res) => {
  let { op, num1, num2 } = req.query
  console.log(num1);
  if (checkQuery(op)) {
    let result = handleOps(op, num1, num2)
    res.json(result)
  }
})

// home
app.use('/', (req, res) => {
  res.sendFile(
    path.join(__dirname,
      'public',
      'view',
      'index.html'
    )
  )
}
)


app.listen(PORT, () => {
  console.log('Start page served at http://127.0.0.1:5100/');
})