'use strict';


/*
  Runtime is O(n) or O(n^2) depending on how string concatenation works and could be expensive due to the constant concatenation of
  unmutable strings. Furthur improvements could be made onto this algorithm if the O(n^2) case deems to be true by concatenating the strings in chunks
  between a starting pointer and end pointer designating the spaces to remove severely reducing the amount of concatenations needed.
*/
function URLify(input){
  let answer = '';
  for(let i = 0; i < input.length; i++){
    if(input.charAt(i) === ' '){
      answer+='%20';
    }
    else{
      answer+=input.charAt(i);
    }
  }
  return answer;
}

/*
  Runtime is O(n) but may become expensive if multiple array expansions are required due to the arr.push needing more space.
  Optimization could get the runtime down to O(2n) = O(n) through the first pass getting the size of the array required
  and the second copying the necessary values in the new array. Furthur improvements could also be made on this with 
  a different implementation.
*/
function arrayFilter(arr){
  let arrRet = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 5){
      arrRet.push(arr[i]);
    }
  }
  return arrRet;
}


/*
  Runtime is O(n)
  No optimization needed
*/
function maxAdd(arr){
  let maxNow = arr[0], maxBefore = arr[0];
  for(let i = 1; i < arr.length; i++){
    if((maxNow + arr[i]) > arr[i]){
      maxNow += arr[i];
    }
    else{
      maxNow = arr[i];
    }
    if(maxNow > maxBefore){
      maxBefore = maxNow;
    }
  }
  return maxBefore;
}


/*
  Runtime is O(n)
  No optimization needed
*/
function mergeArrays(arrOne, arrTwo){
  const lengthOne = arrOne.length;
  const lengthTwo = arrTwo.length;
  let i = 0, j = 0;
  let answer = Array(lengthOne + lengthTwo);
  while(i < lengthOne && j < lengthTwo){
    if(arrOne[i] < arrTwo[j]){
      answer[i+j] = arrOne[i];
      i++;
    }
    else{
      answer[i+j] = arrTwo[j];
      j++;
    }
  }
  while(i < lengthOne){
    answer[i+j] = arrOne[i];
    i++;
  }
  while(j < lengthTwo){
    answer[i+j] = arrTwo[j];
    j++;
  }
  return answer;
}


function assignMasks(charsToRemove){
  let code;
  const length = charsToRemove.length;
  let masks = [0, 0, 0];

  for(let i = 0; i < length; i++){
    code = (charsToRemove.charAt(i).charCodeAt(0));
    if(code < 65){
      masks[0] += (1 << (code - 32));
    }
    else if(code < 97){
      masks[1] += ( 1 << (code - 64));
    }
    else{
      masks[2] += (1 << (code - 97));
    }
  }
  return masks;
}

function checkMasks(masks, character){
  let code = character.charCodeAt(0);
  if(code < 65){
    code = (1 << (code - 32));
    if((masks[0] & code) === 0){
      return 0;
    }
  }
  else if(code < 97){
    code = (1 << (code - 64));
    if((masks[1] & code) === 0){
      return 0;
    }
  }
  else{
    code = (1 << (code - 97));
    if((masks[2] & code) === 0){
      return 0;
    }
  }
  return 1;
}


/*  
  Runtime is O(n) with slight modications by using a symbol table to minimize large removals
  are required and bitwise operations for the slightly quicker runtime for checks.
  Currently unsure if there is a more efficient solution. It's possible further improvements could be made.
*/
function removeCharacters(charsToRemove, sentence){
  let answer = '';
  let character = '';
  let masks = assignMasks(charsToRemove);
  for(let i = 0; i < sentence.length; i++){
    character = sentence.charAt(i);
    if(checkMasks(masks, character) === 0){
      answer += sentence.charAt(i);
    }
  }
  return answer;
}


/*
  Runtime is O(n)
  No optimization needed
*/
function Product(arr) {
  let result = [];
  if(arr.length < 2){
    return result;
  }
  result[arr.length-1]=1;
  for(let i=arr.length-2; i>=0; i--){
    result[i]=result[i+1]*arr[i+1];
  }

  let left=arr[0];
  for(let i=1; i<arr.length; i++){
    result[i]=result[i]*left;
    left = left*arr[i];
  }

  return result;
}


function changeToZeroes(matrix, i, j, length, height){
  const xCoords = [-1, 1];
  const yCoords = [-1, 1];
  const defaultCoords = [i,j];
  yCoords.forEach(direction => {
    while(i !== -1 && i !== height){
      matrix[i][j] = 0;
      i += direction;
    }
    i = defaultCoords[0];
  });
  xCoords.forEach(direction => {
    while(j !== -1 && j !== length){
      matrix[i][j] = 0;
      j += direction;
    }
    j = defaultCoords[1];
  });

}

/*
  Time complexity O(n^2)
  The time complexity can't be improved significantly but there may be a better solution for space complexity
  where a second matrix is not used
*/
function twoDArray(array){
  const height = array.length;
  const length = array[0].length;
  const answerMatrix = new Array(height).fill(1).map(() => new Array(length).fill(1));
  for(let i = 0; i < height; i++){
    for(let j = 0; j < length; j++){
      if(array[i][j] === 0){
        changeToZeroes(answerMatrix, i, j, length, height);
      }
    }
  }
  return answerMatrix;
}


/*
  Runtime complexity of O(n) due to the .includes
  Further improvements may be made by making a custom .includes function for this problem specifically.
  Benefits would hardly be worthwhile though.
*/
function ifRotated(stringOne, stringTwo){
  stringOne += stringOne;
  if(stringOne.includes(stringTwo)){
    return true;
  }
  return false;
}