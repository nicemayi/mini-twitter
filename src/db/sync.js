/**
 * @description sequelize sync
 * @author z.w.
 */

const seq = require('./seq');

// test connection
seq.authenticate().then(() => {
    console.log('auth ok');
}).catch(() => {
    console.log('auth error');
});

// exec sync
seq.sync().then(() => {
    console.log('sync ok');
    process.exit();
});