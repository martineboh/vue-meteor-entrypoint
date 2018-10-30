Meteor.methods({
   getPosts() {
       const postsRequest = HTTP.get('https://jsonplaceholder.typicode.com/posts');

       return postsRequest.statusCode === 200 ? postsRequest.data : [];
   }
});