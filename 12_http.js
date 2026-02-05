import http from 'http'
let port = 3000;
let server = createServer((req, res)=>{
    res.end('Hello World')
})

server.listen(port, ()=>{
    console.log(`Server is Listening over `);
})