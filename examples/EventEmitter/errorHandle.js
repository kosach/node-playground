const libInstance = require('./Messages');
const errorHandle = () => {
  libInstance.on('error', (data) => {
    // Outputs : Received data: "Hello World, data test"
    console.log(`Received data error: "${data}"`);
  });
}
module.exports = errorHandle;
