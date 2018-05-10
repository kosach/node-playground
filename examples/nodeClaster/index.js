const cluster = require('cluster');
const express = require('express');
const app = express();

const doWork = (duration) => {
  const start = Date.now();
  while (Date.now() - start < duration){}
}

app.get('/', (req, res) => {
  doWork(5000);
  res.send('Basic endpoint')
})
if(cluster.isMaster){
  var cpuCount = require('os').cpus().length;
  console.log('Master', process.pid);
  for (var i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }
}else{ 
  console.log('Child', process.pid);
  app.listen(8383);
}
  
const start = () =>{
}

module.exports = start;
