/**
 * @description save config
 * @author z.w.
 */

const { isProd } = require('../utils/env');

let REDIS_CONF = {
    port: 6379,
    host: process.env.REDIS_IP || '127.0.0.1',
};

let MYSQL_CONF = {
    port: '3306',
    host: process.env.MYSQL_IP || '127.0.0.1',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'mini_twitter',
};

if (isProd) {
    REDIS_CONF = {
        port: 6379,
        host: process.env.REDIS_IP || '127.0.0.1',
    };
    MYSQL_CONF = {
        port: '3306',
        host: process.env.MYSQL_IP || '127.0.0.1',
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: 'mini_twitter',
    };
}

module.exports = {
    REDIS_CONF,
    MYSQL_CONF,
};