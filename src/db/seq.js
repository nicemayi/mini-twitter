/**
 * @description mysql sequelize instance
 * @author z.w.
 */
const Sequelize = require('sequelize');
const { MYSQL_CONF } = require('../conf/db');
const { isProd, isTest } = require('../utils/env');

const conf = {
    host: MYSQL_CONF.host,
    dialect: 'mysql',
};

if (isTest) {
    conf.logging = () => {};
}

// in pord
// if (isProd) {
//     conf.pool = {
//         max: 5,
//         min: 0,
//         idle: 10 * 1000, // release after 10s
//     }
// }

const seq = new Sequelize(
    MYSQL_CONF.database,
    MYSQL_CONF.user,
    MYSQL_CONF.password,
    conf,
);

module.exports = seq;
