
const date = new Date();
const blogContainer = document.getElementById('blog-container');
let blogPosts = [];
let addFlag = true;

function displayBlog() {
  blogContainer.innerHTML = ''; // Clear previous content
  
  if (addFlag) {
    let addButton = document.createElement('button');
    addButton.innerText = 'Add Blog';
    addButton.setAttribute('onclick', 'addBlog()');
    blogContainer.appendChild(addButton);
  }

  blogPosts.forEach((blog, index) => {
    let blogDiv = document.createElement('div');
    blogDiv.classList.add('blog');

    let blogHeader = document.createElement('div');
    blogHeader.classList.add('blog-header');

    let blogBody = document.createElement('div');
    blogBody.classList.add('blog-body');
    blogBody.innerText = blog.text;

    let dateSpan = document.createElement('span');
    dateSpan.innerText = blog.date;

    let nameSpan = document.createElement('span');
    nameSpan.innerText = blog.name;

    let buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons-div');

    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.setAttribute('onclick', `deleteBlog(${index})`);

    let modifyButton = document.createElement('button');
    modifyButton.innerText = 'Modify';
    modifyButton.setAttribute('onclick', `modify(${index})`);

    blogContainer.appendChild(blogDiv);
    blogDiv.appendChild(blogHeader);
    blogDiv.appendChild(blogBody);
    blogHeader.appendChild(dateSpan);
    blogHeader.appendChild(nameSpan);
    blogHeader.appendChild(buttonsDiv);
    buttonsDiv.appendChild(deleteButton);
    buttonsDiv.appendChild(modifyButton);
  });
}

function addBlog() {
  blogContainer.innerHTML = ''; // Clear previous content
  addFlag = false;
  displayBlogForm();
}

function displayBlogForm() {
  let blogFormDiv = document.createElement('div');
  blogFormDiv.classList.add('blog-form');

  let nameInputDiv = document.createElement('div');
  nameInputDiv.classList.add('name-input-div');

  let nameInputSpan = document.createElement('span');
  nameInputSpan.innerText = 'Name';

  let nameInputElement = document.createElement('input');
  nameInputElement.setAttribute('type', 'text');
  nameInputElement.id = 'name-input-element';

  let textInputDiv = document.createElement('div');
  textInputDiv.classList.add('text-input-div');

  let textInputSpan = document.createElement('span');
  textInputSpan.innerText = 'Text';

  let textInputElement = document.createElement('textarea');
  textInputElement.setAttribute('rows', '5');
  textInputElement.setAttribute('cols', '50');
  textInputElement.id = 'text-input-element';

  let submitButton = document.createElement('button');
  submitButton.innerText = 'Submit';
  submitButton.setAttribute('onclick', 'blogSubmit()');

  blogContainer.appendChild(blogFormDiv);
  blogFormDiv.appendChild(nameInputDiv);
  blogFormDiv.appendChild(textInputDiv);
  blogFormDiv.appendChild(submitButton);

  nameInputDiv.appendChild(nameInputSpan);
  nameInputDiv.appendChild(nameInputElement);

  textInputDiv.appendChild(textInputSpan);
  textInputDiv.appendChild(textInputElement);
}

function blogSubmit() {
  addFlag = true;
  let nameInputElement = document.getElementById('name-input-element');
  let textInputElement = document.getElementById('text-input-element');
  let newPost = { date: date.toDateString(), name: nameInputElement.value, text: textInputElement.value };
  blogPosts.unshift(newPost);
  displayBlog();
}

function deleteBlog(index) {
  blogPosts.splice(index, 1);
  displayBlog();
}

function modify(index) {

blogContainer.innerHTML = ''; // Clear previous content
displayBlogForm();
let nameInputElement = document.getElementById('name-input-element');
let textInputElement = document.getElementById('text-input-element');
nameInputElement.value = blogPosts[index].name;
textInputElement.value = blogPosts[index].text;
blogPosts.splice(index, 1);
}

window.onload = function() {
  displayBlog();
};

