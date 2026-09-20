//create my own server using http module
const http = require("http");

const server = http.createServer((req, res) => {
    res.write("welcome to my server");
    res.end();
});

server.listen(8000, () => {
    console.log("server is running on http://localhost:8000");
});w