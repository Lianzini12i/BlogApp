let userDatabase = JSON.parse(localStorage.getItem('augustJsDatabase')) || []


let currentUserIndex = Number(localStorage.getItem('augustJsUserIndex'))

let currentUserObj = userDatabase[currentUserIndex]


console.log(currentUserIndex);
console.log(currentUserObj);
let blogDatabase = JSON.parse(localStorage.getItem('blogDatabase')) || []

displayBlog()

let currentUser = document.getElementById('currentUser')
currentUser.innerHTML = currentUserObj.username
function postBlog() {
    if (blogtitle.value.trim() === '' || blogdescription.value.trim() === '') {
        alert('All fields are mandaratory')
    }
    else {
        let blog = {
            blogdescription: blogdescription.value.trim(),
            blogtitle: blogtitle.value.trim()
        }
        blogDatabase.push(blog)
        localStorage.setItem('blogDatabase', JSON.stringify(blogDatabase))
        displayBlog()
    }


}


function displayBlog() {
    let BlogPreview = document.getElementById('blogPreview')
    BlogPreview.innerHTML = ""


    for (let index = 0; index < blogDatabase.length; index++) {
        const element = blogDatabase[index];


        BlogPreview.innerHTML += ` <div id="blogCard">
        <p id="forBlogTitle">
            ${element.blogtitle}
        </p>
        <p id="forBlogDescription">
            ${element.blogdescription}
        </p>

        <button onclick="deletePost(${index})"> Delete </button> <button onclick="editDescription(${index})"> Edit </button>
    </div>`
    }

}
function logOut() {
    let confirmLogout = window.confirm('are you sure you want to logout?')
    if (confirmLogout) {
        localStorage.removeItem('augustJsUserIndex')
        window.location.href = '../pages/login.html'
    }
}

function editDescription(i) {
    let editInput = prompt('edit blog description', `${blogDatabase[i].blogdescription}`)

        if (editInput !== blogDatabase[i].blogdescription && editInput) {
        blogDatabase[i].blogdescription = editInput;
        localStorage.setItem('blogDatabase', JSON.stringify(blogDatabase));
        displayBlog();
    }
}
function deletePost(i) {
    let confirmDel = confirm("Are you sure you want to delete this post?");
    if (confirmDel) {
        blogDatabase.splice(i, 1); 
        localStorage.setItem('blogDatabase', JSON.stringify(blogDatabase));
        displayBlog(); 
    }
}





// let myPromptValue = prompt('enter my name', 'users name')
// console.log(myPromptValue);


// let canLogout = window.confirm('are you sure?')
// console.log(canLogout);



// function return4(params) {
//     let num = 'a' + 'b'
//     console.log(num);
//     return num
// }

// console.log(return4());

// let newString = return4() + ' ' + 'hello'
// console.log(newString);