let http = require('http');
let fs = require('fs');

http.createServer(function(req, res){
    let info;

    if('/' === req.url){
        fs.readFile('index.html', function(err, info){
            if(err){
                console.error(err);
                res.statusCode = 500;
                res.end("Server has Error");
                return;
            }
            res.end(info);
        });
    } else {
        res.statusCode = 404;
        res.end("Has not Found 404");
    }
}).listen(3000, console.log('server is running on port: 3000'));

// let server = new http.Server(); 
// //http.Server -> net.Server -> EventEmitter

// server.listen(1234, '127.0.0.1', console.log("server is running!!"));

// let counter = 0;

// let emit = server.emit;
// server.emit = function(event /*,args1, args2*/ ){
//     console.log(event);
//     emit.apply(server, arguments);
// }

// server.on('request', function(req, res){
//     res.end("All is dood!!! " + ++counter + " This value is count of operation with server on this page");
// });