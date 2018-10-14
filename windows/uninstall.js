const daemon = require('./service')

daemon.on('uninstall', () => {
  console.log('Uninstall complete.')
  console.log('The service exists: ', daemon.exists)
})

daemon.uninstall()
