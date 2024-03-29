const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const posterInput = document.querySelector('#poster');
const submitBtn = document.querySelector('button#submit-btn')


submitBtn.addEventListener('click', function (event) {
  event.preventDefault(); // prevent page from refreshing on click

  // create blog post object from user input
  const blogPost = {
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
    poster: posterInput.value.trim(),
  };

  // if any field is left blank, an alert will appear
  if ((titleInput.value === '') || (contentInput.value === '') || (posterInput.value === '')) {
    alert("You must fill in all fields"); 
    return false;
  } else { // send input to blog.html once all fields are filled
    localStorage.setItem('blogPost', JSON.stringify(blogPost));
    window.location.href="./blog.html";
  };
});









