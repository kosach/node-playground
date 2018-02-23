const _params = {};
const methodDependency = {
  AttributesToGet: ['get', 'scan', 'query', 'batchGet']
}
class Parameters{
  constructor(table, method){
    if(!table) throw 'Table property is required';
    if (!method) throw 'Method property is required';
    Object.assign(_params, {TableName: table,} );
  }
  get params(){
    return _params;
  }
  set params (param){
    console.log('You can not set this property');
  }
  set select(params){
    if (params && Array.isArray(params)) {
      Object.assign(_params, {
        AttributesToGet: params,
      });
    } else console.error('Select params is requred and it mast be array');
  }
}

const test = new Parameters('table','get');

test.select = ['asdasd'];
console.log(test.params);

// var params = {
//   Key: { /* required */
//     '<AttributeName>': someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */ ,
//     /* '<AttributeName>': ... */
//   },
//   TableName: 'STRING_VALUE',
//   /* required */
//   AttributesToGet: [
//     'STRING_VALUE',
//     /* more items */
//   ],
//   ConsistentRead: true || false,
//   ExpressionAttributeNames: {
//     '<ExpressionAttributeNameVariable>': 'STRING_VALUE',
//     /* '<ExpressionAttributeNameVariable>': ... */
//   },
//   ProjectionExpression: 'STRING_VALUE',
//   ReturnConsumedCapacity: INDEXES | TOTAL | NONE
// };
// documentclient.get(params, function (err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else console.log(data); // successful response
// });
