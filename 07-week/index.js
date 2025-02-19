Function.prototype.describe=function(){
    console.log(`Hello function name is ${this.name}`);
    
}

function greet(name){
    return `Hello ${name}`;
}

greet.describe()