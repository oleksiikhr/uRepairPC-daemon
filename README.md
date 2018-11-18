# uRepairPC - Daemon

<p align="center">
  <a href="https://github.com/uRepairPC/uRepairPC">The Whole Project</a>
</p>

## Description

<p>The service is installed on a working computer and works as a daemon.
The base data of the computer is monitored and in case of exceeding the limits,
an alert is sent to the server (they are configured on the server side, by administrators).
It also serves to obtain basic information about the PC without the need for direct access.</p>

## How to work

- In case there is no `node_modules` folder, run the dependency installation using `npm`:

> `npm install`

- Copy and rename the `config-example.js` file to `config.js`, and then configure it

> Linux - `cp ./src/config-example.js ./src/config.js` or `npm run linux-init`

- Run the src/key.js file with the parameters `--auth` (administrator authorization)
and `--id` (inventory number):

> `node ./src/key.js --auth=login@pass --id=1`.

Then the file `data.json` is generated, with which the service works and has access to the server.
Be careful, without this file and data on them, the PC will not have access to the server.

- For Windows, run the `install.js` file, which will generate the files and install the service.

> `node ./windows/install.js`

- To uninstall the service under OS Windows, run the `uninstall.js` file.

> `node ./windows/uninstall.js`

## License

MIT
