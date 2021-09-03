//var random_boolean = Math.random() < 0.5;
// this how to get random boolean 

const myPromise = new Promise((resolve, reject) => {

    if (Math.random() < 0.5) {
        resolve("Success")
    }else{
        reject("fail")
    }
    


})


myPromise.then(
    (resolve) => console.log(resolve),
    (reject) => console.log(reject)

)