'use strict'

const Service = require('node-windows').Service
const packageJSON = require('../package')
const path = require('path')

module.exports = new Service({
  name: 'uRepairPC',
  script: path.join(__dirname, '../' + packageJSON.main)
})
