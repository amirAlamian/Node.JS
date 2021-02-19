const https = require('https');

const start = Date.now();

function sendRequest() {
    https.request('https://google.com', res => {
        res.on('data', () => {

        })
        res.on('end', () => {
            console.log(Date.now() - start);
        })
    }).end()
}
sendRequest()
sendRequest()
sendRequest()
sendRequest() // libuv delegates from os async features to send request to google.com and os thread handling makes our program so multi threaded
sendRequest()
sendRequest()
sendRequest() 
