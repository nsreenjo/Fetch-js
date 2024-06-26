// task 1

// function apiData() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(posts) {
//         const postsContainer = document.getElementById('postsContainer');
        

//         posts.forEach(function(post) {
//             const postsDiv = document.createElement('div');
            
//             const postsTitle = document.createElement('h3');
//             postsTitle.innerText = post.title;

//             const postsBody = document.createElement('p');
//             postsBody.innerText = post.body;

//             postsDiv.appendChild(postsTitle);
//             postsDiv.appendChild(postsBody);
//             postsContainer.appendChild(postsDiv);
//         });
//     })
//     .catch(function(error) {
//         console.error('Error fetching posts:', error);
//     });
// }

// apiData();


// task 2 

// function fetchDataForComments(postId) {
//     const commentsDiv = document.getElementById('comments');
//     fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(comments) {
//             comments.forEach(function(comment) {
//                 const commentDiv = document.createElement('div');
                
//                 const commentName = document.createElement('h4');
//                 commentName.textContent = comment.name;

//                 const commentEmail = document.createElement('p');
//                 commentEmail.textContent = comment.email;

//                 const commentBody = document.createElement('p');
//                 commentBody.textContent = comment.body;

//                 commentDiv.appendChild(commentName);
//                 commentDiv.appendChild(commentEmail);
//                 commentDiv.appendChild(commentBody);

//                 commentsDiv.appendChild(commentDiv);
//             });

//         })
//         .catch(function(error) {
//             console.error('Error fetching comments:', error);
//         });
// }

// fetchDataForComments(1);

// task 3 

function apiForAlbums(albumid) {
    const albumContainer = document.getElementById('albums'); 
 
   
    albumContainer.innerHTML = '';

    fetch('https://jsonplaceholder.typicode.com/albums?userId=' + albumid)
        .then(function(response) {
            return response.json(); 
        })
        .then(function(albums) {
            albums.forEach(function(album) {
                const albumDiv = document.createElement('div'); 
                albumDiv.className = 'album'; 

                const albumTitle = document.createElement('p'); 
                albumTitle.textContent = album.title; 

                albumDiv.appendChild(albumTitle);

                albumContainer.appendChild(albumDiv);
            });
        })
        .catch(function(error) {
            console.error('Error fetching albums:', error); 
        });
}

apiForAlbums(1);

