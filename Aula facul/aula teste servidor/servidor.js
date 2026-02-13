const net = require('net');
const client = [];

const server = net.createServer((socket)=>{
    client.push(socket);
    console.log("Novo cliente conectado");

    socket.on('data', (data)=>{
        console.log(`Mensagem: ${data.toString().trim()}`);
        broadcast(data, socket);
    });
});

function broadcast(message,senderSocket){
    client.forEach((client)=>{
        if(client != senderSocket){
            client.write(message);
        };
    });
};

server.listen(3001, () =>{
    console.log(`Servidor rodando na porta 3001`);
});