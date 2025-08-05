// Creation of Promise 
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true
            if(success) {
                resolve("Data fetched succesfully!")
            } else {
                reject("Data is not fetched. ERROR!")
            }
        }, 3000)
    })   
}

// promise is only in three StaticRange, pending, fulling, reject 

// catching the promise that 
fetchData()
    .then((data) => { // we can perfrom then chaining too.
        console.log(data)
        return 'tushar'
    })
    .then((data) => {
        console.log(data);
        
    })
    .catch((error) => console.log(error)
    )
