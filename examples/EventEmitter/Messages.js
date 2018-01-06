const EventEmitter = require('events');

class Messages extends EventEmitter {
    constructor() {
        super();
      }
      success(message){
        try {
          this.emit('success', message);
        }
        catch (e) {
            console.log(e);
        }
      }
      error(message) {
        try {
          this.emit('error', message);
        }
        catch (e) {
            console.log(e);
        }
    }
}

module.exports = new Messages();
