
import events = require('events');

export class FilterHandler extends events.EventEmitter {
    constructor() {
        super();
        console.log('in ctor')
        this.emit('ready');
        console.log('emitted ready')
    }

    sendReady(): void {
        this.emit('ready');
    }
}

