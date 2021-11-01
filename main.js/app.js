

function myPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        const generalPost = document.querySelector("#post-portion");
        let html = "";

        data.forEach(e => {
            html +=`
            <div class="col-sm-12 col-md-4 col-lg-4 mb-3 bg-light">
                    <a class="aTag text-decoration-none text-dark" href='blog.html' target="_blank" id=${e.id}>
                        <div class="card h-100  border border-success">
                            <div class="card-body">
                                <div class="d-flex justify-content-center">
                                <h5 class="text-primary"> ${e.id}</h5>
                                </div>
                                <h5 class="post-header mb-4">${e.title}</h5>
                                <p class="post-body">${e.body}</p>
                            </div>
                        </div>
                     </a>
                    </div>
            `
            console.log(e);
            generalPost.innerHTML = html
            
            const aTag = Array.from(document.querySelectorAll('.aTag'))
            aTag.forEach(tag => {
                tag.addEventListener('click', () => {
                    const postId = tag.getAttribute('id')
                        localStorage.setItem('postId', postId)
                })
            });
        });
    });
}

myPosts();
