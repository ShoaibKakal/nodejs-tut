const path = require('path')

const filePath = path.join('/content', 'test.txt')

console.log(filePath)

console.log(path.basename(filePath))

const absolute = path.resolve('__dirname', 'content', 'test.txt')
console.log(absolute)