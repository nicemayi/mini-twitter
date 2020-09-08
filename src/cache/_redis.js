/**
 * @description get set redis
 * @author z.w.
 */

const redis = require('redis');
const { REDIS_CONF } = require('../conf/db');

const redisClient = redis.createClient(
    REDIS_CONF.port,
    REDIS_CONF.host,
);

redisClient.on('error', err => {
    console.err('redis error', err);
});

/**
  * redis set
  * @param {string} key 
  * @param {string} val 
  * @param {number} timeout 
  */
const set = (key, val, timeout = 60 * 60) => {
    if (typeof val === 'object') {
        val = JSON.stringify(val);
    }

    redisClient.set(key, val);
    redisClient.expire(key, timeout);
};

/**
  * get
  * @param {string} key
  * @returns promise
  */
const get = key => {
    const promise = new Promise((resolve, reject) => {
        redisClient.get(key, (err, val) => {
            if (err) {
                reject(err);
            }
            if (val === null) {
                resolve(null);
                return;
            }
            try {
                resolve(JSON.parse(val));
            } catch (ex) {
                resolve(val);
            }
        });
    });
    return promise;
};

module.exports = {
    set,
};