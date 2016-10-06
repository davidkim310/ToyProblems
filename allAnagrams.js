// Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array.

function allAnagrams (string) {
  //store all permutations in an array
  var results = [];
  //create a recursive function
  var recurse = function(temp, remaining){
    //base case
    if(temp.length === string.length){
    	if(results.indexOf(temp) < 0){
      //we will need to push the permutations into storage
      results.push(temp);
    	}
    }
    //loop through the string
    for(var i = 0; i < remaining.length; i++){
      var currentStr = temp + remaining[i];
      var toAdd = remaining.slice(0,i) + remaining.slice(i+1);
      //call the recursive on the updated temp string
      recurse(currentStr, toAdd);
    }
  };
  //initiate the recursive function
  recurse("", string);
  //we will need to return the results
   return results;
}
