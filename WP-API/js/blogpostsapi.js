const baseUrl = "http://localhost/project-exam-1-Ingvildb1/wp-json/wp/v2/posts";
const postContainer = document.querySelector(".posts");

async function getPosts(url){
    const response = await fetch(url);
    const posts = await response.json();
    posts.forEach(function(post){
        postContainer.innerHTML += ` <a href="postdetails.html?id=${post.id}" class="card">
        <div class="post"><h3>${post.title.rendered}</h3>
        <img src="${post.jetpack_featured_media_url.src}" alt="" class="post-img">     
        </a>
        </div> 
        `
    })
}

getPosts(baseUrl);
