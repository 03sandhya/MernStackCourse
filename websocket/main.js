//creating web socket server
//import websocket
const WebSocket = require('ws');
//creating object
//create server with port no
const wss = new WebSocket.Server({port:8080});
//when client wants to connect to websocket , what we want to do
//when websocket gets any connection,what we should do
//use same spelling, 'connection' otherwise wont work
//can use arrow function  like  -->wss.on('connection',connection=(ws)=>{    });
wss.on('connection',function connection(wsObj){
    wsObj.on('message',function incoming(){
       console.log('message received') 
    });
    wsObj.send("msg from server");
    wsObj.on('close',function(){
        console.log('web socket client connected');
    });


    
});