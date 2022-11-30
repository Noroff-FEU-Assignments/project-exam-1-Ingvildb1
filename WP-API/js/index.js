const baseUrl = "http://localhost/project-exam-1-Ingvildb1/wp-json/wp/v2/posts/";
const postContainer = document.querySelector(".swiper-slide");
const postSlider = document.querySelector(".post-img")

const baseUrl2 = "http://localhost/project-exam-1-Ingvildb1/wp-json/wp/v2/posts/45";


async function getPosts(url){
    const response = await fetch(url);
    const posts = await response.json();

    
    posts.forEach(function(post){
        postContainer.innerHTML += ` <a href="postdetails.html?id=${post.id}" class="card">
        <div class="post">
        <img src="${post.jetpack_featured_media_url}" alt="" class="post-img">
        <h3 class="card-text">${post.title.rendered}</h3>    
        </div> 
        </a>
        `
    })
}

getPosts(baseUrl); 

/* SLIDER*/ 


/* 2 */

/*const card2 = document.querySelector(".card");
const cardUrl2 = "http://localhost/project-exam-1-Ingvildb1/wp-json/wp/v2/posts/43" ;

async function getCard(url){
    const response = await fetch(url);
    const details = await response.json();


    card1.innerHTML = ` <a href="postdetails.html?id=${details.id}" class="card-2">
    <div class="post-2">
    <img src="${details.jetpack_featured_media_url}" alt="" class="post-img">
    <h3 class=">${details.title.rendered}</h3>     
    </div> 
    </a>
    `;


}

getCard(cardUrl2);*/


const postContainer1 = document.querySelector(".post-container-1");
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


/* post boxes */

const postBoxes = document.querySelector(".post-boxes");
const boxUrl = "http://localhost/project-exam-1-Ingvildb1/wp-json/wp/v2/posts?per_page=4";

async function getBoxes(url){
  const response = await fetch(url);
  const postBox = await response.json();

  
  postBox.forEach(function(post){
      postBoxes.innerHTML += ` <a href="postdetails.html?id=${post.id}" class="box-card">
      <div class="box-post">
      <img src="${post.jetpack_featured_media_url}" alt="" class="post-img">
      <h3 class="box-text">${post.title.rendered}</h3>    
      </div> 
      </a>
      `
  })
}

getBoxes(boxUrl);




var swiper = new Swiper(".slide-latest", {
    slidesPerView: 8,
    spaceBetween: 20,
    slidesPerGroup: 8,
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


 

