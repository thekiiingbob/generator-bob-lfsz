const chalk = require('chalk')
const _log = console.log

function log(...args) {
  _log(chalk.cyan(...args))
}
