const {pbkdf2} = require("crypto")
console.log(process.env.UV_THREADPOOL_SIZE);
const start = Date.now() // we set iteration to be 1000000 and it must take a sew milliseconds for each function call. 
// each function should wait for Previous one then invoke. isn`t it?


function doHash (num) {
    pbkdf2(
        'a',     // password
        'b',     // salt
        100000,  // iteration
        512,     // keyLen
       'sha512', // digest
       () => {   //callback
        console.log( num, ' : ', Date.now() - start );
       }
    )
}

doHash(1)
doHash(2)
doHash(3)
doHash(4)
// pause because of the number of thread in thread poll
doHash(5)


// two functions invoke at the same time and the result of them comes after an equal period of time.
// this proves that some of the packages in node js runs multi threaded and node is completely multi threaded
