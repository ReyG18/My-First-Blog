
// displays blog to card
function renderLastBlog() {
  const storedBlog =JSON.parse(localStorage.getItem('blogPost'));

  if(storedBlog !== null) {
    document.getElementById('blog-title').innerHTML = storedBlog.title;
    document.getElementById('blog-content').innerHTML = storedBlog.content;
    document.getElementById('blog-poster').innerHTML = storedBlog.poster;
  };
};

// initializes the function
function init() {
  renderLastBlog();
};
init();


