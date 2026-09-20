//promises for asynch
//js single threaded
// promises for async
// js single threaded

 /*new Promise((resolve, reject) => {

    console.log("Promise task 1");

    let msg = true;

   // setTimeout(() => {
//
       // if (msg) {
  //          resolve("Promise completed successfully");
       // } else {
          //  reject("Promise failed");
    //    }

  //  }, 2000);

});

promiseOne
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});*/
//async /await
/*
console.log( "1");
async function test(){
    console.log("2");
      await console.log("3"); 
     console.log("4");

     

}
test();
console.log("5");

//create promises that will print usename and password using 
//and if usename and password are not found then it will call 
//reject state and print error 
const promise=new Promise(( resolve ,reject)=>{
    setTimeout(function (){
        console.log(" this is promises");
let err=true;
if ( !err){
    resolve(
    " user :ABC,password:1233"
    );
}
else{
    reject(" error ....../");
}
    },2000);


    


    

}).then((result)=>{


}).catch((error)=>{
    console.log(error);
})
    */
   async function test(){
    console.log(" mesaages :1");
    const response =  await fetch(" ./student.json");
    console.log("response.status ");
   const stdn= await response.json();
   return stdn;
   console.log(" message :3")

   }
   test().then((res)=>{
   console.log(res);});