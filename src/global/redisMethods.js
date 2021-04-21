const redis = require('redis');
const Redis = {
    initRedis(host, port) {
        const client = redis.createClient({
            host: host,
            port: port,
        });
        client.on('error', err => {
            console.log('Error ' + err);
        });
        return client;
    }
}
module.exports = Redis;