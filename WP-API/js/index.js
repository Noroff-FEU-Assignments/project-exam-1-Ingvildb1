
const baseUrl = "https://gamehub-schoolproject.site/project-exam-1/wp-json/wp/v2/posts?_embed";
const postContainer = document.querySelector(".swiper-slide");
const postSlider = document.querySelector(".post-img")

const baseUrl2 = "http://localhost/project-exam-1-Ingvildb1/wp-json/wp/v2/posts/45";


async function getPosts(url){
    const response = await fetch(url);
    const posts = await response.json();

    
    posts.forEach(function(post){
      
        postContainer.innerHTML += ` <a href="postdetails.html?id=${post.id}" class="card">
        <div class="post">
        <img src="${post._embedded['wp:featuredmedia']['0'].source_url}" alt="" class="post-img">
        <h3 class="card-text">${post.title.rendered}</h3>    
        </div> 
        </a>
        `
    })
}

getPosts(baseUrl); 






const postContainer1 = document.querySelector(".post-container-1");
const baseUrl3 = "https://gamehub-schoolproject.site/project-exam-1/wp-json/wp/v2/posts/33" ;

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


/* post boxes */

const postBoxes = document.querySelector(".post-boxes");
const boxUrl = "https://gamehub-schoolproject.site/project-exam-1/wp-json/wp/v2/posts?_embed";

async function getBoxes(url){
  const response = await fetch(url);
  const postBox = await response.json();

  
  postBox.forEach(function(post){
      postBoxes.innerHTML += ` <a href="postdetails.html?id=${post.id}" class="box-card">
      <div class="box-post">
      <img src="${post._embedded['wp:featuredmedia']['0'].source_url}" alt="" class="box-img">
      <h3 class="box-text">${post.title.rendered}</h3>    
      </div> 
      </a>
      `
  })
}

getBoxes(boxUrl);




var swiper = new Swiper(".slide-latest", {
    slidesPerView: 3,
    spaceBetween: 20,
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



  /* hamburger menu */

  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');

  menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
  }
  
  );
 

