const http = new easyHTTP;

// GET POSTS
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

// GET SINGLE POST
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// CREATE DATA
const data={
    title:'Custom Post',
    body:'this is a custom post'
};

// CREATE POST
http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,post){
    if (err) {
                console.log(err);
            } else {
                console.log(post);
            }
})