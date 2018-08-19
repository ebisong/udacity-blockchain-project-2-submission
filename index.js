const { Blockchain, Block } = require('./simpleChain');
let blockchain = new Blockchain();

for (var i = 0; i <= 10; i++) {
  blockchain.addBlock(new Block("test data "+i));
}

blockchain.validateChain();
