let arrayOfPosts;
let arrayOfComments;
let arrayOfUsers;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
  getPosts();
  getComments();
  getUsers();
}

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
}

const getComments = () => {
  fetch('http://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(comments => arrayOfComments = comments);
}

const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => arrayOfUsers = users);
}

// this function logs the results in your browsers console
const consolePosts = () => {
  console.log(arrayOfPosts)
}

const postPost = () => {
  let posttitle = document.getElementById("postTitle").value;
  let userpost = document.getElementById("userPost").value;
  console.log(posttitle);
  console.log(userpost);
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: posttitle,
      body: userpost,
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => {
    console.log(json)
    document.getElementById("newPostDiv").innerHTML += JSON.stringify(json) + "<br/>";
  })
}
const displayUsers = () => {
    const allPosts = document.getElementById('all-posts')
    allPosts.innerHTML = '';
    arrayOfUsers.map((user, index) => {
      const li = document.createElement('li')
      const text = `Name: ${user.name}<br />
                                            userName: ${user.username}, email: ${user.email}<br />
                                            Company: ${user.company.name} <br/>
                                            <span style="font-family:Tahoma;font-size:10px;">"${user.company.bs}"</span> `;
      li.innerHTML =text;
      allPosts.append(li);
      });
}

const displayComments = () => {
    const allPosts = document.getElementById('all-posts')
    allPosts.innerHTML = '';
    arrayOfComments.map((post, index) => {
      const li = document.createElement('li')
      const text = document.createTextNode(`#${index}, Post: ${post.id}:  ${post.body}, by user: ${post.email}`)
      li.appendChild(text)
      allPosts.append(li)
      });
}

const display5Posts = () => {
    const allPosts = document.getElementById('all-posts');
    allPosts.innerHTML = "";
    let start = getRandomInt(1,94);
    let myFivePosts = arrayOfPosts.slice(start,start+5);
    myFivePosts.map((post,index) => {
        const li = document.createElement('li');
        const text = document.createTextNode(`#${index}, Title: ${post.title}: ${post.body}, by user: ${post.userId}`);
        li.appendChild(text);
        allPosts.append(li);
    })

}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
  const allPosts = document.getElementById('all-posts')
  allPosts.innerHTML = '';
  arrayOfPosts.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

// Your job now is to follow the functions above and use them as templates to build the functionality the buttons in the index.html file already have laid out in it. This way you can learn how to build fetch requests and work with other apis and become a real developer!!
