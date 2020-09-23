function merge(array1, array2) {
  let result = [];
  // var result as array
  while (array1.length || array2.length) {
    let ele1 = array1.length ? array1[0] : Infinity;
    let ele2 = array2.length ? array2[0] : Infinity;
    
    let next;
    if(ele1 < ele2) {
      next = array1.shift();
    }
    else {
      next = array2.shift();
    }
    result.push(next);
  }

  return result;
  // while ( a and b have elements )
  //   if ( a[0] > b[0] )
  //     add b[0] to the end of result
  //     remove b[0] from b
  //   else
  //     add a[0] to the end of result
  //     remove a[0] from a
  //   end if
  // end while

  // while ( a has elements )
  //   add a[0] to the end of result
  //   remove a[0] from a
  // end while

  // while ( b has elements )
  //   add b[0] to the end of result
  //   remove b[0] from b
  // end while

  // return result
}

function mergeSort(array) {
  // if ( n == 1 ) return a
  let midIndex = Math.floor(array.length / 2)
  if(array.length <= 1) return array;
  
    let leftHalf = array.slice(0, midIndex);
    let rightHalf = array.slice(midIndex);
    let sortedLeft = mergeSort(leftHalf);
    let sortedRight = mergeSort(rightHalf);
  
return merge(sortedLeft, sortedRight);
 
}





console.log(mergeSort([2, -1, 4, 3, 7, 3]))

module.exports = {
  merge,
  mergeSort
};
