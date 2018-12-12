'use strict';

function fancyURLify(input){
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

function arrayFilter(arr){
  let arrRet = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 5){
      arrRet.push(arr[i]);
    }
  }
  return arrRet;
}

function maxAdd(arr){
  let maxNow, maxBefore = arr[0];
  for(let i = 1; i < arr.length; i++){
    console.log(arr[i]);
    if((maxNow + arr[i]) > arr[i]){
      // console.log(arr[i]);
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

// console.log(fancyURLify('test        '));

let inArr = [1, 3, 6, -7, 19, -5, -22];
// console.log(arrayFilter(inArr));

console.log(maxAdd(inArr));