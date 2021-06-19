const path = require('path')
console.log(path)

const filepath = path.join('/Content/', 'subfolder', 'text.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log("basename is " + base)