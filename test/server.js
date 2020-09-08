/**
 * @description jest server
 * @author z.w.
 */

 const request = require('supertest')
 const server = require('../src/app').callback()

 module.exports = request(server)