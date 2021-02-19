const express = require('express');
const Worker = require('webworker-threads').Worker
const app = express()

async function blockEventLoop(blockTime) {
    const start = Date.now();

    while (Date.now() - start < blockTime) {
    } 
}
app.get('/',async (req, res) => {
        worker = new Worker(function() { // this function will be stringify and send to worker thread out side of our app so we can't access our app variables in it
            this.onmessage = function () {
                const start = Date.now();

                while (Date.now() - start < 5000) { // 5 seconds
                    postMessage('done!')
                } 
            }
        })
        worker.onmessage = function (message) {
            res.send(message.data)
        }

        worker.postMessage()
})

app.listen(8000)
