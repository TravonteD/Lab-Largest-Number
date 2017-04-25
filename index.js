var numbers = [46, 29,4,10,1,98,42,17,23,83];
function findLargestFor(array){
  var largest = -1;
  for(var i=0;i<array.length;i++){
    var current = array[i];
    if(current>largest){
      largest = current;
    }
  }
  console.log("The largest number is "+largest);
}
function findLargestWhile(array){
  var largest = -1;
  var i = 0;
  while(i<array.length){
    var current = array[i];
    if(current>largest){
      largest = current;
    }
    i++;
  }
  console.log("The largest number is "+largest);
}
findLargestFor(numbers);
findLargestWhile(numbers);