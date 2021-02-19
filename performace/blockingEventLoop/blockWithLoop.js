const express = require('express');
const app = express()

async function blockEventLoop(blockTime) {
    const start = Date.now();

    while (Date.now() - start < blockTime) {
    } 
}
app.get('/',async (req, res) => {
    await blockEventLoop(5000) //block the event loop for 5 seconds
    res.send('ok')
})
app.get('/a' , (req ,res) =>{
    res.send('ok!!')
})
app.listen(8000)
