//TODO plan:
// *ProjectionExpression
// *ConsistentRead
// *ReturnConsumedCapacity

const { operators } = require('./parameters');
const { truncateFieldName } =  require('./services');
const { ExpressionAttributeNames,
        ExpressionAttributeValues,
        FilterExpression, } =  require('./helpers');
const _params = {};
const methodDependency = {
  AttributesToGet: ['get', 'scan', 'query', 'batchGet']
}
const clearParams = (filterParams) =>{
  const newObj = Object.assign({}, filterParams);
  for(key in newObj){
    if (Object.keys(newObj[key]).length == 0) delete newObj[key];
  }
  return newObj;
}
class Parameters{
  constructor(TableName, Method, Key){
    if(!TableName) throw 'Table property is required';
    if (!Method) throw 'Method property is required';
    Object.assign(_params, { TableName, } );
    if(Key) Object.assign( _params, { Key } );
    this.method = Method;
  }

  /** @method
  * @name select
  * 
  * @param {(string|string[])} params - Some select param or array of select params
  * */
  select(params){
    //TODO add array elements validation
    if (typeof params === 'string' || Array.isArray(params)) {
      if(_params.AttributesToGet) {
        console.log('concat', params);
        _params.AttributesToGet = _params.AttributesToGet.concat(params)
      }else{
        Object.assign(_params, {
          AttributesToGet: params,
        });
      }
    } else console.error(`Wrong params - ${params}. It's required and it's must be array or string`);
    return this;
  }

  /** @method
  * @name where
  *
  * @param {string} field - Name of the field
  * @param {string} operator - One of operators '=','<','<=','>','>='
  * @param {eny} value - Field value
  * */
  where(field, operator, value){
    if(typeof field !== 'string'
      || !operators.includes(operator)
      || !value ) return console.log('Wrong parameters');
    ExpressionAttributeNames(_params, field);
    ExpressionAttributeValues(_params, field, value)
    FilterExpression(_params, operator, field);
    return this;
  }
  getQuery(){
    if(this.method === 'get'){
      if(!_params.Key){
        return console.log('Key is required!');
      }
    }
    return _params;
  }
}


//Test example

const test = new Parameters('worldview_services','query');
const query = test
        .where('test1[0]', '=', 'test111')
        .where('HCservice', '=', 'datadog')
        .getQuery();
console.log(query);


