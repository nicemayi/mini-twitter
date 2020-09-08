## System Design - Mini Twitter

practice, practice, practice....

This is an old repo when I prepare system design interview, just for fun, no commercial usage.

### Tech big words
nodejs (>=8.0, prefer >= 10.14.2), koa2, ejs, redis, mysql, nginx, pm2
sequelize

### Usage
DB:
docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=<PASSWORD> -d mysql

mysql -u root --password=<PASSWORD> -h <IP ADDRESS>

docker run --name redis -p 6379:6379 -d redis

redis-cli -h <IP ADDRESS> -p 6379 ping

cd mini-twitter
npm install
npm run dev # localhost:3000

chrome debugger: chrome://inspect/#devices