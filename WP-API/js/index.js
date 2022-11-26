const baseUrl = "http://localhost/project-exam-1-Ingvildb1/wp-json/wp/v2/posts";
const postContainer = document.querySelector(".posts");
const postSlider = document.querySelector(".post-img")

const baseUrl2 = "http://localhost/project-exam-1-Ingvildb1/wp-json/wp/v2/posts/45";
const postContainer1 = document.querySelector(".post-container-1");

async function getPosts(url){
    const response = await fetch(url);
    const posts = await response.json();

    
    posts.forEach(function(post){
        postContainer.innerHTML += ` <a href="postdetails.html?id=${post.id}" class="card">
        <div class="post">
        <img src="${post.jetpack_featured_media_url}" alt="" class="post-img">
        <h3 class=">${post.title.rendered}</h3>     
        </div> 
        </a>
        `
    })
}

getPosts(baseUrl);




const baseUrl3 = "http://localhost/project-exam-1-Ingvildb1/wp-json/wp/v2/posts/31" ;

async function getDetails(url){
    const response = await fetch(url);
    const details = await response.json();


    postContainer1.innerHTML = ` <a href="postdetails.html?id=${details.id}" class="post-container ">
    <div class="container-card">
    <h3 class="post-container-text">${details.title.rendered}</h3>
    <a href="postdetails.html?id=${details.id}" class="btn-container-1">more</a>  
    </div>
   
    </a>
    `;


}

getDetails(baseUrl3);



var swiper = new Swiper(".slide-latest", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


