'use strict'

/*
 * Import
 */

const config = require('../config/index')
const request = require('request')
const fs = require('fs')

/*
 * Functions
 */

/** @return boolean */
const hasArg = (args, name) => {
  return args[0] === `--${name}` && args[1]
}

/** @return object|false */
const parseAuth = (args) => {
  const data = args[1].split('@')

  if (!data[0] || !data[1]) {
    return false
  }

  return {
    login: data[0],
    secret: data[1]
  }
}

/** @return void */
const storeFile = (data) => {
  fs.writeFileSync(config.FILE_PATH, JSON.stringify(data), {
    encoding: config.FILE_ENCODING
  })
}

/*
 * Main part
 */

// Variables
let secret = ''
let login = ''
let id = 0

// Parse incoming data
process.argv.forEach((val, index) => {
  const args = val.split('=')

  if (hasArg(args, 'auth')) {
    const data = parseAuth(args)

    if (data) {
      ({ login, secret } = data)
    }

  } else if (hasArg(args, 'id')) {
    id = args[1]
  }
})

// Checking incoming data
if (!secret || !login || !id) {
  console.clear()
  console.log('----- Not all data transferred -----')
  console.log(`Secret: ${secret ? '***' : '-'}`)
  console.log(`Login: ${login || '-'}`)
  console.log(`ID: ${id || '-'}`)
  console.log()
  console.log('Structure:')
  console.log('node /path/to/src/key.js --auth=login@secret --id=1')
  return
}

// Trying to get the key for this PC and store.
request.post(config.URL_KEY, {
  json: {
    id, login, secret
  }
}, (err, response, body) => {
  if (err || typeof body !== 'object') {
    console.log('Unknown error')
    return
  }

  if (!body.success) {
    console.log(body.error || 'Unknown error')
    return
  }

  console.log('Success')
  storeFile(body.data)
})
