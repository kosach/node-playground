const message = require('./Messages');
const errorHandle = require('./errorHandle');
const successHandle = require('./successHandle');
errorHandle();
successHandle();
message.error("Hello World, data test");
message.success("Hello World, data test");
