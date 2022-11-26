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