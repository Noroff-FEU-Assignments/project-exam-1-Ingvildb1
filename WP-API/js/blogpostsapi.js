const baseUrl = "http://localhost/project-exam-1-Ingvildb1/wp-json/wp/v2/posts";
const postContainer = document.querySelector(".posts");
const perPage = document.querySelector('#load-more');

async function getPosts(url){
    const response = await fetch(url);
    const posts = await response.json();

    
    posts.forEach(function(post){
        postContainer.innerHTML += ` <a href="postdetails.html?id=${post.id}" class="card">
        <div class="post">
        <img src="${post.jetpack_featured_media_url}" alt="" class="post-img">
        <h3>${post.title.rendered}</h3>     
        </div> 
        </a>
        `
    })
}

getPosts(baseUrl);

perPage.onclick = function(){
    const newUrl = baseUrl + '?per_page=20';
    postContainer.innerHTML ="";
    getPosts(newUrl);
}


/* load more btn */

/*var boxes = document.querySelectorAll('.post');
var loadMoreBtn = document.querySelector('#load-more');
var currentItem = 10;

loadMoreBtn.addEventListener('click', function(){
    for(var i = currentItem;i<currentItem+10;i++){
        if(boxes[i]){
            boxes.style.display = 'grid';  
        }
    }
})*/


/*let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 10;

loadMoreBtn.onclick = () =>{
    let boxes = [...document.querySelectorAll('.posts .latest-box')];
    for (var i = currentItem; i < currentItem + 10; i++){
        if(boxes[i]){
            boxes.style.display = 'grid';  
        }

    }
    currentItem += 2;
}*/


/* Back button */

function backButton(){
    onclick
    window.history.back()
}

backButton(back);
