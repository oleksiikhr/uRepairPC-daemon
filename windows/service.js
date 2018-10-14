const Service = require('node-windows').Service
const packageJSON = require('../package')

module.exports = new Service({
  name: 'uRepairPC',
  script: require('path').join(__dirname, packageJSON.main)
})
