const {readFileSync, writeFileSync} = require('fs')
 
const ichi =  readFileSync('./content/first.txt', 'utf8') 
const futatsu = readFileSync('./content/second.txt', 'utf8')

const newFile = writeFileSync('./content/resultFile.txt', `${ichi} and ${futatsu}`)
const newFile2 = writeFileSync('./newFile.js')

console.log(ichi)
console.log(futatsu)