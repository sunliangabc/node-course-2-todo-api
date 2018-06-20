const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var message = 'I am user number 3';
var hash = SHA256(message).toString();
console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
  id: 10
};

var token = {
  data,
  hash: SHA256(JSON.stringify(data) + 'abc123').toString()
};
/**USER MUNAPULATE THE DATA**/
token.data.id = 5;
token.hash = SHA256(JSON.stringify(token.data)).toString();
var resultHash = SHA256(JSON.stringify(token.data) + 'abc123').toString();

if(resultHash === token.hash){
  console.log('Data was not changed...');
}else{
  console.log('Data changed...DONT TRUST...');
}











// var token = jwt.sign(data, '123abc');
// console.log(token);
// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);
