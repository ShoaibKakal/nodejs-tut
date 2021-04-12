const fs = require('fs')


const first = fs.readFileSync('./content/first.txt', 'utf8')
const test = fs.readFileSync('./content/test.txt', 'utf8')

console.log(first, test)

fs.writeFileSync('./content/result-sync.txt', `Here is the result :${first}, ${test}`)

console.log(fs.readFileSync('./content/result-sync.txt', 'utf8'))
