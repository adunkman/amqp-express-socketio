# Relaying messages from RabbitMQ to web clients

This simple example is an expressjs (3.x) application that uses socket.io to broadcast messages to clients when those messages are received on a queue in RabbitMQ. 

## Setup

0. [Install RabbitMQ](http://www.rabbitmq.com/download.html) and boot the server
1. `npm install`
2. `node index.js`
3. visit http://localhost:3000 
4. Broadcast a message from RabbitMQ (if you don't know what you're doing, broadcast a message to the `amq.topic` exchange).

Feel free to reach out to me through an issue if you experience problems.
