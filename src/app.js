'use strict'

const config = require('./config/index')
const socket = require('socket.io-client')(config.SERVER_WS)
const fs = require('fs')

/*
 * Working with file. Get all data.
 */

const isExistsFile = fs.existsSync(config.FILE_PATH)
let pcData = {}

if (isExistsFile) {
  const data = fs.readFileSync(config.FILE_PATH, {
    encoding: config.FILE_ENCODING
  })

  try {
    pcData = JSON.parse(data)
  } catch (e) {
    console.log('process.exit(1)')
    process.exit(1)
  }
} else {
  console.log('process.exit(1)')
  process.exit(1)
}

console.log('--> send to websocket', Object.assign({ type: 'pc' }, pcData))

socket.on('connect', () => {
  console.log('connect')
  socket.emit('authentication', Object.assign({ type: 'pc' }, pcData))
  socket.on('authenticated', () => {
    console.log('Authenticated')
    // Use
  })
})

socket.on('disconnect', () => {
  console.log('disconnect')
})

// setInterval(() => {
//   socket.emit('event', 'data')
// }, 2000)

//
// const si = require('systeminformation')
//
// si.getAllData()
//   .then(cb => console.log(cb))
//   .catch(error => console.error(error))
//
// console.log(si.time())
//
// console.log('-----------------')
//
// si.cpu()
//   .then(data => { console.log(data); console.log('-----------------') })
//   .catch(error => console.error(error))
//
// si.mem()
//   .then(data => { console.log(data); console.log('-----------------') })
//   .catch(error => console.error(error))
//
// si.graphics()
//   .then(data => { console.log(data); console.log('-----------------') })
//   .catch(error => console.error(error))
//
// si.osInfo()
//   .then(data => { console.log(data); console.log('-----------------') })
//   .catch(error => console.error(error))
//
// si.networkInterfaces()
//   .then(data => { console.log(data); console.log('-----------------') })
//   .catch(error => console.error(error))
