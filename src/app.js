'use strict'

// const config = require('./config')
// const socket = require('socket.io-client')(config.SERVER_WS)
// const fs = require('fs')

/*
 * Working with file. Get all data.
 */

// const isExistsFile = fs.existsSync(FILE_NAME)
//
// if (isExistsFile) {
//   const data = fs.readFileSync(FILE_NAME, {
//     encoding: ENCODING
//   })
//
//   try {
//     console.log(data, JSON.parse(data))
//   } catch (e) {
//     console.log(e)
//   }
// } else {
//   fs.writeFileSync(FILE_NAME, JSON.stringify({ data1: 'data1123' }), {
//     encoding: ENCODING
//   })
// }

// socket.on('connect', () => {
//   console.log('connect')
//   socket.emit('authentication', { data1: 'data1-test', data2: 'data2-test123' })
//   socket.on('authenticated', () => {
//     console.log('Here')
//     // Use
//   })
// })

// socket.on('test:App\\Events\\NewEvent', (data) => {
//   console.log(data)
// })

// socket.on('disconnect', () => {
//   console.log('disconnect')
// })

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
