const express = require('express');
const cluster = require('cluster');
const {
    pbkdf2
} = require("crypto")
console.log(cluster.isMaster);
console.log(process.env.UV_THREADPOOL_SIZE);

function doHash(res) {
    pbkdf2(
        'a', // password
        'b', // salt
        100000, // iteration
        512, // keyLen
        'sha512', // digest
        () => { //callback
            res.send("Hello World!")
        }
    )
}

const app = express()

app.get('/', (req, res) => {
    doHash(res)
})
app.listen(8000, () => {
    console.log('server is up and running on 8000')
})
