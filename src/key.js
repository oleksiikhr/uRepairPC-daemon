/*
 * Import
 */

const request = require('request')
const config = require('./config')
const path = require('path')
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
    password: data[1]
  }
}

/** @return void */
const storeFile = (data) => {
  fs.writeFileSync(path.resolve(__dirname, '../' + config.FILE_NAME), JSON.stringify(data), {
    encoding: config.ENCODING_FILE
  })
}

/*
 * Main part
 */

// Variables
let password = ''
let login = ''
let id = 0

// Parse incoming data
process.argv.forEach((val, index) => {
  const args = val.split('=')

  if (hasArg(args, 'auth')) {
    const data = parseAuth(args)

    if (data) {
      ({ login, password } = data)
    }

  } else if (hasArg(args, 'id')) {
    id = args[1]
  }
})

// Checking incoming data
if (!password || !login || !id) {
  console.log('----- Not all data transferred -----')
  console.log(`Password: ${password ? '***' : 'none'}`)
  console.log(`Login: ${login || 'none'}`)
  console.log(`ID: ${id || 'none'}`)
  console.log()
  console.log('Structure:')
  console.log('node /path/to/src/key.js --auth=login@pass --id=1')
  return
}

// Trying to get the key for this PC and store.
request.post(config.URL_KEY, {
  json: {
    login, password, id
  }
}, (err, response, body) => {
  if (err && typeof body !== 'object') {
    return false
  }

  storeFile(body)
})
