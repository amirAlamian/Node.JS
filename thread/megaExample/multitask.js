const https = require('https');
const {pbkdf2} = require("crypto");
const fs = require('fs');
const start = Date.now();

function sendRequest() {
    https.request('https://google.com', res => {
        res.on('data', () => {

        })
        res.on('end', () => {
            console.log("https: ", Date.now() - start);
        })
    }).end()
}

function doHash () {
    pbkdf2(
        'a',     // password
        'b',     // salt
        100000,  // iteration
        512,     // keyLen
       'sha512', // digest
       () => {   //callback
        console.log( 'hash: ', Date.now() - start );
       }
    )
}

sendRequest()


fs.readFile('./multitask.js' , 'utf8', () => {
    console.log("FS: ", Date.now() - start);
}) // first thread, resume after third doHash process ends.
doHash() // second thread
doHash() // third thread
doHash() // fourth thread
doHash() // first thread after the fs sent the request to the hard 
doHash() // second thread after the second doHash ends.


