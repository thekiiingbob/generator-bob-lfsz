const chalk = require('chalk')

// eslint-disable-next-line no-console
const _log = console.log

function log(...args) {
  _log(chalk.cyan(...args))
}

module.exports = log
