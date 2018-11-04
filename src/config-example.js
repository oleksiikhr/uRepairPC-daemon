'use strict'

/**
 * Server URL.
 * @param String
 * @example http://example.com/
 * @see https://github.com/uRepairPC/server/
 */
const SERVER = 'http://api.example.com/'

/**
 * Web Socket URL.
 * @param String
 * @example ws://example.com:3000/
 * @see https://github.com/uRepairPC/websocket
 */
const SERVER_WS = 'ws://socket.example.com/'

/**
 * Configuration for file.
 * @param String
 */
const FILE_NAME = 'data.json'
const FILE_ENCODING = 'UTF-8'

/** @param String - URL addresses of pages for the server */
const URL_KEY = SERVER + 'api/key'

module.exports = {
  SERVER_WS,
  URL_KEY,
  FILE_NAME,
  FILE_ENCODING
}
