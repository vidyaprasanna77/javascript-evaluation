function group(given){
   let name = given.reduce((arr,given) => {
      arr.push(given.id);
      return arr;
   },[]);

   console.log(name);
}

group([{
   id:1,name:"edison"},
   {id:2,name:"annand"},
   {id:3,name:"vasnath"}
]);