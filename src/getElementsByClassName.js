// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // your code here
};

//input: className (string) and a node
//output: an array containing the nodes that match the classname
//constraints: none
//edge cases: if no nodes match, return empty array


//if (node || node=document.body )
//initialize results array
//if input node's class list contains the className
  //push that node into results  
//if input node's children list is not empty
  //iterate thru children list using for loop
  //results = results.concat the call getElementsByClassName and pass in the child node (each element)  
//return results