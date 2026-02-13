const net = require('net');
const readline = require('readline');

const RL = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = net.createConnection({port:3001}, ()=>{
    console.log("Conectado ao servidor de chat");

    RL.prompt();

    RL.on('line', (input)=>{
        client.write(input);
        RL.prompt();
    });
});

client.on('data',(data)=>{
    console.log(`Mensagem do chat: ${data.toString().trim()}`);
});