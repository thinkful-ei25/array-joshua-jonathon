'use strict';
import memory from './memory';
require(memory);
class Array {
  constructor(){
    this.length = 0;
    this.ptr = memory.allocate(this.length);
  }
}