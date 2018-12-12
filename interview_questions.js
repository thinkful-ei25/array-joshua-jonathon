'use strict';

function fancyURLify(input){
  let answer = '';
  let pointer = 0;
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

console.log(fancyURLify('test        '));

