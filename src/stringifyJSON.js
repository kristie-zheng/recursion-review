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
  //let stringifiedObj = {};
  // helper func takes in obj and outputs '['+ obj +']'
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
    
};
