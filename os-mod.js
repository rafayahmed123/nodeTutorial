//working with the OS module (file system)

const os = require('os')

console.log(os.userInfo())


const OSobj = {
    name = os.type(),
    release = os.release(),
    totalMem = os.totalmem(),
    freeMem = os.freemem()
}

console.log(`current OS is ${OSobj}`)