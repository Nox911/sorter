class Sorter {
  constructor() {
    this.array=[];
    this.compareFunc=0;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {

    // Sorting function
    function merge (left,right) {
      let result = [];

      while (left.length>0&&right.length>0) {
        if(left[0]<right[0]) {
          result.push(left.shift());
          }
        else {
          result.push(right.shift());
        }
      }
      return result.concat(left).concat(right);
    }

    function sorting(arr) {
      if (arr.length<2) {
        return arr;
      }
      let mid = Math.floor(arr.length/2);
      let left = arr.slice(0,mid);
      let right = arr.slice(mid)
      return merge(sorting(left), sorting(right));
    }
    
    // main function
    let arrTemp = [];
    indices=sorting(indices);
    let indicesLen=indices.length;
    for (let i=0;i<indicesLen;i++) {
      arrTemp.push(this.at(indices[i]));
    }
    if (this.compareFunc) {
      arrTemp.sort(this.compareFunc);
    }
    else {
      arrTemp=sorting(arrTemp);
    }
    for (let i=0;i<indicesLen;i++) {
      this.array[indices[i]]=arrTemp[i];
    }
  }

  setComparator(compareFunction) {  
    this.compareFunc=compareFunction;
  }
}

module.exports = Sorter;