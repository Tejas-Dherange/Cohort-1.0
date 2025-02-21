let obj = {
    "user": {
        "name": "Tejass",
        "age": 25,
        dhhd: null,
        dhxm: null
    }
};

let str = "user.dkd";  // Path as a string
let keys = str.split(".");  // Split by dot to get an array of keys

let value = keys.reduce((acc, key) => acc && acc[key], obj);

console.log(value); // Output: Tejass


function cleanObject(obj1) {
    // Remove all properties with null or undefined values
    for(let key in obj1){
      if( obj1[key] == null || obj1[key] ==undefined){
        delete obj1.key;
        console.log("hello");
        
      }
    }
    return obj1;
  }
// console.log(cleanObject(obj));
