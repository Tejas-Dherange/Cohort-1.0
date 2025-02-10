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
    let arr = this;
    for (let i = 0; i < this.length; i++) {
      // arr.push(callback(this[i], i));
      this[i]=callback(this[i], i);
    }
    return this;
  };
}

if (!Array.prototype.Myreduce) {
  Array.prototype.Myreduce = function (callback) {
    let arr = this;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = callback(sum, arr[i]);
    }
    return sum;
  };
}

if (!Array.prototype.MyindexOf) {
  Array.prototype.MyindexOf = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] == callback) {
        return i;
      }
    }
    return -1;
  };
}

if (!Array.prototype.Mysort) {
  Array.prototype.Mysort = function (compareFn) {
    if (typeof compareFn !== "function") {
      compareFn = (a, b) => String(a).localeCompare(String(b)); // Default sorting behavior
    }

    let n = this.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (compareFn(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]]; // Swap elements
        }
      }
    }
    return this;
  };
}

if (!Array.prototype.Myincludes) {
  Array.prototype.Myincludes = function (a, b) {
    for (let i = !b ? 0 : b; i < this.length; i++) {
      if (a === this[i]) {
        return true;
      }
    }
    return false;
  };
}
if (!Array.prototype.Myreverse) {
  Array.prototype.Myreverse = function () {
    let n=this.length-1;
    let i=0;
    while(i<=n) {
     [this[i],this[n]]=[this[n],this[i]]
     n--;
     i++;
    }
    return this;
  };
}

if (!Array.prototype.Myfilter) {
  Array.prototype.Myfilter=function (callback) {
    let arr=[];
    for (let i = 0; i < this.length; i++) {
     if (callback(this[i])) {
      arr.push(this[i])
     }
    }
    return arr;
  }
}


let arr = [1, 2, 3];
console.log(arr.Mymap((x,i)=>x*2));

let sum = arr.Myreduce((a, b) => a + b);
// console.log(sum);

let narr = [2, 4, 6, 8, 5, 9, 5];

let f = narr.MyindexOf(16);
// console.log(f)

narr.sort((a, b) => a - b);
console.log(narr);

let has = narr.Myincludes(4, 2);
console.log(has);


let rev=narr.Myreverse()
console.log(rev);

let filt=narr.Myfilter((x)=>x>5);
console.log(filt);
