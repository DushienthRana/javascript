// const fetchUserData = new Promise((resolve,reject)=>{
//     let success=true;
//     setTimeout(()=> {
//         if (success){
//             resolve ({id:69, username:"dushyant"});
//         }
//         else{
//             reject("failed to fetch the user data");
//         }
//     },1000);
// });
//     console.log(fetchUserData);

const promise1 = new promise ((resolve,reject)=>{
    let success=true
    if (success){
    resolve ({
        id:69,
         username:"dushyant"
        })
    }else {
        reject (new error ("Data not found"))
    }
})
// promise1
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })

const promise2 =new promise ((resolve,reject=>{
      let success=true
    if (success){
    resolve ({
        id:69,
         username:"dushyant"
        })
    }else {
        reject (new error ("Data not found"))
    }
})
 promise1
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})



Promise.any([promise1,promise2])
.then((response)=>
