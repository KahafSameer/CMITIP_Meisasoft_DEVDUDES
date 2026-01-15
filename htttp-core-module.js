// http core module node js me server kese create kr sakte hai.
// http core module import. its a non global core module
const http = require('http');

http.createServer((request, response) =>{
    response.writeHead(200,{"Content-Type":"text/html"})
    response.write("<h2>hello bro kese ho </h2> <p> http server me hum hmare app ka server bnate hai or sath hi ose port b btate hai k kn si port pr wo chalna chahye jise k hum localhost/port search kr k open kr sakte hai is me hum koi b text wagera b open kr sakte hai or sath hi hum is mai html k tags b render k k display kr sakte hai pr os k lye hume pehle ise header dena ho ga k kn se si type ka text use karna hai hum nai like agar me html use krna chahta ho to mojhe   <h4> response.writeHead(200,{''Content-Type'':''text/html''}) </h4> dena ho ga ")
    response.end();
}).listen(1002);



//create server me hum funtion ko jese hum ne oper dekha wese b kr sakte hai or as parameter b hum kr sakte hai 
//function as a parameter

const sayHello = (request, response) => {
    response.write("say hello  to kahaf sameer")
    response.end()
}
http.createServer(sayHello).listen(1001)
//or hum 1 hi file me multipe ccreate servers bana k alag alag prts pr data server kr sakte hai 