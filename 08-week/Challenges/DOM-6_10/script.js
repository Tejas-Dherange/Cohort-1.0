console.log("Hello!");

const movieRatings = [
  { title: "Pathan", ratings: [5, 7, 8, 9, 4] },
  { title: "Krish", ratings: [5, 7, 9, 4] },
  { title: "Dangal", ratings: [7, 8, 9, 5, 4, 7, 4] },
];

const averageRatings = movieRatings.map((movie) => {
  let average =
    movie.ratings.reduce((sum, rating) => sum + rating, 0) /
    movie.ratings.length;
  // movie.ratings=average;
  // return movie
  return { title: movie.title, ratings: average.toFixed(1) };
});

// console.log(averageRatings);
// console.log(movieRatings);

let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr[2]=8);
// console.log(arr);

// const res=  fetch("https://japi.freeapi.app/api/v1/public/randomusers")
//         res.then((res)=>res.json())
//         .then((data)=>console.log(data.data.data[0].picture))
//         .catch((err)=> console.log(err))
        

async function data() {
    const data=await res.json();
    console.log(data.data.data[0]);
    
    
}
// data()



let user={
  name:"Tejas",
  password:"12345",
  age:15
}


let myProxy=new Proxy(user,{
  get(target,prop){
      if(prop==="password"){
        return "Access Denied"
      }

      return target[prop];
  },

  set(target,prop,value){
    if(prop!=="password"){
      target[prop]=value;
      return true;
    }
  }
})


// console.log(myProxy.name);
// myProxy.password="djbbhj"
// console.log(myProxy.password);


let myarr=[1,[2,3,4,5],6,7];
 console.log(myarr);
 
 let shallow=[...myarr]
 console.log(shallow);
 shallow[1]=7
 console.log(shallow);

 console.log(myarr);
 