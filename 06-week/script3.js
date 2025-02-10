let obj = {
  name: "Tejas",
  obj2: {
    age: 20,
    val: 14,
  },
  obj3: {
    obj4: {
      name: "obj3 -> obj4 name",
    },
    mesage: "Hello",
  },
};

console.log(obj);

let objCopy={...obj};  // shallow copy
objCopy.obj2.age=65
console.log(objCopy);

console.log(obj);

let str=JSON.stringify(obj);

let objCopy=JSON.parse(str);
objCopy.obj2.val=5455

console.log(objCopy)
