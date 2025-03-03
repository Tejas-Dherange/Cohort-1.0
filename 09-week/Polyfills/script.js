console.log("Hello");
const obj2 = {
  greet(name, age, ...args) {
    console.log(`Hello my name is ${this.name} and age is ${this.age}`);
    console.log(`Hello my name is ${name} and age is ${age}`);
  },
};

const obj = {
  name: "Tejas",
  age: 20,
};
// greet.call(obj);

if (!Function.prototype.myCall) {
  Function.prototype.myCall = function (context, ...args) {
    context.fn = this;
    context.fn(...args);
  };
}

// greet.myCall(obj);

if (!Function.prototype.myApply) {
  Function.prototype.myApply = function (context, args) {
    if (args == null) {
      context.fn = this;
      context.fn(args);
    } else {
      context.fn = this;
      context.fn(...args);
    }
  };
}

// greet.apply(obj);
// greet.myApply(obj, ["hello", 25]);

if (!Function.prototype.myBind) {
  Function.prototype.myBind = function (context, ...args) {
    const fn=this;
    return function (...newArgs) {
      fn.apply(context,[...args,...newArgs])
    };
  };
}

const bounded=obj2.greet.bind(obj,"hello",5)
bounded()
const myBounded=obj2.greet.myBind(obj,"hello",5)
myBounded()