//event
//event loop
console.log("synchronous function");
const f1=()=>{
    console.log("f1");

}
const f2=()=>{
    console.log("f2");

}
function main(){
    console.log("this event loop");
    setTimeout(f1,1000);

    setTimeout(f2,1000);
    new Promise((resolve,reject)=>{
        resolve("i am promise1")

    }).then((result)=>{
        console.log(" result");
    })
    new Promise((rsolve,reject)=>{
        resolve(" this is promise2")
    }).then((res)=>{
        console.log( res);
    })

    f2();
}
