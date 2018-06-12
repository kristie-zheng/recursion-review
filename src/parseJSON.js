// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  //input: json obj
  //output: destringified version of json obj which may be various types such as arr, obj, num, str, bool, null, 
  //constraints: must have matching braces in case of obj and matching bracket in case of arr
  //edge cases: none

//pseudo

//make helper func to check next character to keep track of where you are in json str
  //currentcharind = currentcharindex++ 
  //next char = json[currentCharInd];
  

//create current char var to maintain where we are
  //set current char to json[1]
//create var index to keep track of current char index

//if(typeof +(currentchar) === number )
  //function parse num '9', 'false', 'str', 'null'
    //return (input)
  
//function parse bool

//function parse str

//function parse null

//else if currentchar === '{'
  //set current char to the next char
  //invoke function parse obj on currentChar
    //iterate thru string via for loop 
      //if str[i] is '}'
        //break
      //else 
        //call helper function that 
//else if currentchar === '['
  //create results arr []  
  //function parse arr
  //set current char to the next char
  //invoke function parse obj on currentChar
    //iterate thru string via for loop 
      //if str[i] is ']'
        //return results array
      //else if str[i] !==  ',' (so we dont push stringed commas)
          //push parseJSON of str[i] into result arr
//if num
//if bool
//if str
//if null
  

};
