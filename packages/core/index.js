'use strict'
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/core.js')
} else {
    module.exports = require('./dist/core.js')
}
