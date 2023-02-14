let events = require('events');
let eventEmitter = new events.EventEmitter();

function myfunction(){
    console.log("Hello this is my Event emitter function");
}

eventEmitter.on('hello',myfunction)

eventEmitter.emit('hello')