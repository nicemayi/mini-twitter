const router = require('koa-router')();

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!',
        msg: 'Helloo',
        isMe: false,
        blogList: [
            { id: 1, title: 'hehe' },
            { id: 2, title: '1hehe' },
            { id: 3, title: '2hehe' },
            { id: 4, title: '3hehe' },
        ],
    });
});

router.get('/json', async (ctx, next) => {
    const session = ctx.session;
    if (session.viewNum === null) {
        session.viewNum = 0;
    }
    session.viewNum++;
    ctx.body = {
        title: 'koa2 json',
        viewNum: session.viewNum,
    };
});

router.get('/profile/:userName', async (ctx, next) => {
    const { userName } = ctx.params;
    ctx.body = {
        title: 'This is profile page',
        userName: userName,
    };
});

router.get('/loadMore/:userName/:pageIndex', async (ctx, next) => {
    const { userName, pageIndex } = ctx.params;
    ctx.body = {
        title: 'This is profile page',
        userName: userName,
        pageIndex,
    };
});

module.exports = router;
