const baseUrl = "http://localhost/project-exam-1-Ingvildb1/wp-json/wp/v2/posts";
const postContainer = document.querySelector(".posts");

async function getPosts(url){
    const response = await fetch(url);
    const posts = await response.json();

    const image =
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