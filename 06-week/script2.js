// Object.prototype.print = function () {
//     // for (let key in this) {
//     //     console.log(key + ": " + this[key]);
//     // }
//     console.log(this);
// }

// let obj = { a: 1, b: 2, c: 3 };
// obj.print();

if (!Array.prototype.Mymap) {
  Array.prototype.Mymap = function (callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      arr.push(callback(this[i], i));
    }
    return arr;
  };
}

if (!Array.prototype.Myreduce) {
  Array.prototype.Myreduce = function (callback) {
    let arr = this;
    let sum =0;
    for (let i = 0; i < arr.length ; i++) {
      sum = callback(sum, arr[i]);
    }
        return sum;
  };
}

if(!Array.prototype.MyindexOf){
  Array.prototype.MyindexOf=function (callback) {

    for (let i = 0; i < this.length; i++) {
        if(this[i]==callback){
          return i;
        }
    }
    return -1;
  }
}


let arr = [1, 2, 3];
console.log(arr.Mymap((x,i)=>x*2));

let sum = arr.Myreduce((a, b) => a + b);
console.log(sum);

let narr=[2,4,6,8,5,9,5]

let f=narr.MyindexOf(16);
console.log(f)
