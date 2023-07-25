import http from 'http';

let server = http.createServer((request, response) => {
    response.write('<p>Hello Client</p>');
    response.end();
});
// server will be started only on listen(port, callbackFn);
server.listen(9091, () => console.log('server is running in port 9091'));