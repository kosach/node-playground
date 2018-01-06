const libInstance = require('./Messages');
const successHandle = () =>{
  libInstance.on('success', (data) => {
    console.log(`Received data success: "${data}"`);
  });
}
module.exports = successHandle;
