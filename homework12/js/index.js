//Завдання 12/1

const http = require("http");
const os = require("os");
const path = require("path");


http.createServer( function(request, response) {
 response.writeHead(200, {'Content-Type': 'text/html'});
 response.write(`<h1>System information (powered by Node.JS)</h1>
 <p>Current user name is ${os.userInfo().username}</p> 
 <p>Current OS is ${os.type()}</p> 
 <p>Current OS runtime is ${os.uptime()}</p> 
 <p>Current filepath is ${process.cwd()}</p>   
 <p>Server filename is ${path.basename(__filename)}</p>  
`);

     response.end();
    }).listen(5000);

    console.log('Server is running');




//Завдання 12/2
    const { userGreeting } = require("./personalmodule");

    http.createServer( function(request, response) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        const currentDate = new Date();
console.log();
        response.write(`<p>Date of request: ${currentDate} </p>
        ${userGreeting()}, ${os.userInfo().username}; 
       `);
       
     response.end();
    }).listen(5000);
    console.log('New server is also running');