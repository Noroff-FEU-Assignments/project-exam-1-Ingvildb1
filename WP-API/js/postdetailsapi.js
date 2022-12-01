const postContainer = document.querySelector(".posts");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href ="/";
}

const baseUrl = "http://localhost/project-exam-1-Ingvildb1/wp-json/wp/v2/posts/" + id;

async function getDetails(url){
    const response = await fetch(url);
    const details = await response.json();


    postContainer.innerHTML = `<h2>${details.title.rendered}</h2>
                                <div class="post-card>
                               
                               <div class="post-text">${details.content.rendered}</div>

                                </div>
    `;


}

getDetails(baseUrl);





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

back();