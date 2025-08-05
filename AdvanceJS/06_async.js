function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({name:'chaicode', url:'https://chaicode.com' })
        }, 3000)
    }) 
}

async function getUserData() {
    try {
        console.log('Fetching user data...');
        const userData = await fetchData() // we can only use await when there is a async function
        console.log(userData);
        console.log(`User data: ${JSON.stringify(userData)}`);
    } catch (error) {
        console.log(error);
        
        console.log(`Error fetching data: ${JSON.stringify(error)}`);
        
    }
}

getUserData()

// Part-2
function fetchPostData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Post Data Fetched.`)
        }, 2000)
    })
}

function fetchCommentData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Comment Data Fetched.`)
        }, 2000)
    })
}

async function getBlogData() {
    try {
        console.log(`Fetching Data...`);
        // const blogData = await fetchPostData()
        // const commentData = await fetchCommentData()
        // console.log(blogData);
        // console.log(commentData);
        // console.log(`fetch complete. ${JSON.stringify(blogData)}`);
        // console.log(`fetch complete. ${JSON.stringify(commentData)}`);
        const [blogData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()])
        console.log(blogData); 
        console.log(commentData); 
        
    } catch (error) {
        // always handle the error first 
            console.log(`Error fetching data: ${JSON.stringify(error)}`);
        
    }
}

// getBlogData()