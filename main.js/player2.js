
//Retrieve post ID
const postId = localStorage.getItem('postId')

//Get  parent element
let parent = document.getElementById('single-post-layout')
let header = document.getElementById('header')

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(data => {
    let postContainer = `
                        <div class="col-md-4 col-lg-4 col-12">
                            <a class="text-decoration-none text-dark" href="#">
                                <div class="card">
                                    <div class="card-body">
                                        <h2 class="d-flex justify-content-center text-danger" >${data.id}</h2>
                                        <h5 class="post-title mb-4">${data.title}</h5>
                                        <p class=" post-body">${data.body}</p>

                                    </div>
                                </div>
                            </a>

                        </div>
                    `
            parent.innerHTML = postContainer;
            header.innerHTML = `Post ${data.id}`
})