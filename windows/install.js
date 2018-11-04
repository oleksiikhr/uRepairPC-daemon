'use strict'

const daemon = require('./service')

daemon.on('install', () => {
  daemon.start()
})

daemon.install()
