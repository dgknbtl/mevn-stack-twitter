const omit = require('just-omit')

function omitPassword(user) {
   return omit(user.toObject(), ['password'])
}

module.exports = {omitPassword}
