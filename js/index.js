// DOM for filter
const filter = document.getElementById('filter');
const postContainer = document.getElementById('posts-container');
const loader = document.querySelector('.loader');

// DOM for Menu
const toggle = document.getElementById('btn-toggle');
const open = document.getElementById('open');
const close = document.getElementById('close-btn');
const modal = document.getElementById('modal');

// setting the value 
let limit = 3;
let page = 1;

// fatch post from API
async function getPost() {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    )
    const data = await response.json();
    return data;
}

// Showing the post
async function showPost() {
    const posts = await getPost();
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
        <div class="number">
        ${post.id}
        </div>
        <div class="post-info">
          <h2 class="post-title">
         ${post.title} 
          </h2>
          <p class="post-body">
           ${post.body} 
          </p>
        </div>
     `;
        postContainer.appendChild(postElement)
    });
}

// Showing Post and Fatching
function showLoading() {
    loader.classList.add('show')
    setTimeout(() => {
        loader.classList.remove('show')
    }, 800);
    setTimeout(() => {
        page++;
        showPost();
    }, 300);
}

// Showing initial post begins 
showPost();

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        showLoading();
    }
})

// filtering the post
function filterPost(e) {
    const term = e.target.value.toUpperCase();
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        const title = post.querySelector('.post-title').innerHTML.toUpperCase();
        const body = post.querySelector('.post-body').innerHTML.toUpperCase();
        if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
            post.style.display = 'flex';
        } else {
            post.style.display = 'none';
        }
    })
}
filter.addEventListener('input', filterPost);

// Menu Section
// show the Menu section
toggle.addEventListener('click', () => document.body.classList.toggle('show-nav'));

// show the Modal section
open.addEventListener('click', () => modal.classList.add('show-modal'));

// close the Modal section
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// closing the Modal by clicking any place
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);