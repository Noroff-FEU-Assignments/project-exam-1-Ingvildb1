const baseUrl = "https://gamehub-schoolproject.site/project-exam-1/wp-json/wp/v2/posts?_embed";
const postContainer = document.querySelector(".posts");
const perPage = document.querySelector('#load-more');

async function getPosts(url){
    const response = await fetch(url);
    const posts = await response.json();

    
    posts.forEach(function(post){
        postContainer.innerHTML += ` <a href="postdetails.html?id=${post.id}" class="card">
        <div class="post">
        <img src="${post._embedded['wp:featuredmedia']['0'].source_url}" alt="" class="post-img">
        <h3>${post.title.rendered}</h3>     
        </div> 
        </a>
        `
    })
}



getPosts(baseUrl);

const moreUrl = "https://gamehub-schoolproject.site/project-exam-1/wp-json/wp/v2/posts?_embed"

perPage.onclick = function(){
    const newUrl = moreUrl + '?per_page=20';
    postContainer.innerHTML ="";
    getPosts(newUrl);
}












/* hamburger menu */

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function() {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
}

);


/* Back button */

function backButton(){
    onclick
    window.history.back()
}

backButton(back);