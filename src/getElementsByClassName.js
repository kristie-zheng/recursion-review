// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  let results = [];
  let currentNode;
  if (arguments[1] !== undefined) {
    currentNode = arguments[1];
  } else {
    currentNode = document.body;
  }
  if(currentNode.classList && currentNode.classList.contains(className)) {
    results.push(currentNode);
  }
  if (currentNode.childNodes.length !== 0) {
    currentNode.childNodes.forEach(ele => {
      results = results.concat(getElementsByClassName(className, ele))
    })
  
  }
  return results;
};



//input: className (string) and a node
//output: an array containing the nodes that match the classname
//constraints: none
//edge cases: if no nodes match, return empty array



//initialize results array
//if arg[1] exists then 
  //initialize a node var and set it to arguments[1]
//else
  //node = document.body

//if input node's class list contains the className
  //push that node into results  
//if input node's children list is not empty
  //iterate thru children list using for loop
  //results = results.concat the call getElementsByClassName and pass in the child node (each element)  
//return results

