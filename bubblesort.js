function bubbleSort(array) {
  //make count
  let swapCount = 0
  //loop through
  for (let i = 0; i < array.length - 1; i++) {
    //slice(i, i + 2)
    let thisSlice = array.slice(i, i + 2)
    //make newslice
    let newSlice;
    //if comparing thisslice returns true...
    if (compare(thisSlice)) {
      //make newslice = swap(thisslice)
      newSlice = swap(thisSlice)
      //increase count of swaps
      swapCount++
    } else { //if comparing thisslice returns false...
      //newslice just equals thisslice with no changes
      newSlice = thisSlice
    }
    //now array[i] becomes first value in newslice
    array[i] = newSlice[0]
    //array[i + 1] becomes second value in newslice
    array[i + 1] = newSlice[1]
  }
  //if swapcount = 0 (meaning we never had to swap), return array
  //else return recursive bubblesort with the newly changed array
  return (swapCount === 0) ? array : bubbleSort(array)
}

function swap(arrayOfTwo) {
  let firstElem = arrayOfTwo[0]
  arrayOfTwo[0] =  arrayOfTwo[1]
  arrayOfTwo[1] =  firstElem
  return arrayOfTwo
}

function compare(arrayOfTwo) {
  if (arrayOfTwo[1] < arrayOfTwo[0]) {
    return true
  }
}
