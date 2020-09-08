const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const session = require('koa-generic-session');
const redisStore = require('koa-redis');

const { REDIS_CONF } = require('./conf/db');
const index = require('./routes/index');
const users = require('./routes/users');

// error handler
onerror(app);

// middlewares
app.use(bodyparser({
    enableTypes:['json', 'form', 'text'],
}));
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));

app.use(views(__dirname + '/views', {
    extension: 'ejs',
}));

// sessoin config
app.keys = ['UIsdf 8980da0da3#$'];
app.use(session({
    key: 'mt.sid',
    prefix: 'mt:sess',
    cookie: {
        path: '/',
        httpOnly: true,
    // maxAge: 24 * 60 * 60 * 1000,
    },
    // ttl: 24 * 60 * 60 * 1000,
    store: redisStore({
        all: `${REDIS_CONF.host}:${REDIS_CONF.port}`,
    }),
}));

// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx);
});

module.exports = app;
