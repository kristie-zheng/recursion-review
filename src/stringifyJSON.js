// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
 //input: num, str, bool, null, arr, obj, func, undefined,
  //output: string ver of the input values
  //constraints: cant string a func or undefined
  
  //pseudo
  //let leftBracket = "["
  //let rightbracket = "]"
  //let leftCurly = '{'
  //let rightCurly = '}'
  //if typeof obj = num / bool / 
    //return String(obj) // '' +
  //else if typeof obj = str
    // return '"' + str + '"'
  //else if obj = null
    // return 'null'
  //else if arrisarr
    // for each on each ele, 
      //leftBracket += stringifyJSON each ele + ','
    //return leftBracket + rightBracket
  //else if typeof obj = obj
    //if unstringable items like a func or undefined,
      // skip it / return;
    //else 
      //for in loop over obj keys
        //leftCurly += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + "," 
      //return leftCurly + rightCurly;
    
      // 'a': 'b' {'a' : 'b'}
    let leftBracket = '[';
    let rightBracket = ']';
    let leftCurly = '{';
    let rightCurly = '}';
    if (typeof obj === 'number' || typeof obj === 'boolean') {
      return String(obj);
    } else if (typeof obj === 'string') {
      return '"' + obj + '"';
    } else if (obj === null) {
      return 'null';
    } else if (Array.isArray(obj)) {
      obj.forEach(function(element) {
        leftBracket += stringifyJSON(element) + ',';
      });
      if (leftBracket[leftBracket.length-1] === ',') {
        leftBracket = leftBracket.slice(0, leftBracket.length-1)
      }
      return leftBracket + rightBracket;
    } else if (typeof obj === 'object') {
      for (const key in obj) {
        if(typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
          leftCurly += '';
        } else {
          leftCurly += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
        }
      }
      if (leftCurly[leftCurly.length-1] === ',') {
        leftCurly = leftCurly.slice(0, leftCurly.length-1);
      }
      return leftCurly + rightCurly;
    }
};
