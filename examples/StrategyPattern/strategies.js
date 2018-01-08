module.exports.json = {
  deserialize: data => JSON.parse(data),
  serialize: data => data ? JSON.stringify(data, null, ' ') : JSON.stringify({}, null, ' ')
}
const ini = require('ini'); //-> https://npmjs.org/package/ini 
module.exports.ini = { 
  deserialize: data => ini.parse(data),
  serialize: data => data ? ini.stringify(data) : ini.stringify('')
}
