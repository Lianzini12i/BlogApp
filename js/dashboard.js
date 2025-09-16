let userDatabase = JSON.parse(localStorage.getItem('augustJsDatabase')) || []


let currentUserIndex = localStorage.getItem('augustJsUserIndex')

let imgMemory = JSON.parse(localStorage.getItem('imgArr')) || []

let currentUserObj = userDatabase[currentUserIndex]

let imgArr = imgMemory || []

function checkUserAuth() {
    if (!currentUserIndex) {
        window.location.href = '../pages/login.html'
    }
}
checkUserAuth()


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
        // localStorage.clear
        // localStorage.setItem()
        displayBlog()
    }
}



    function pickPic() {
        let file = document.getElementById('photo').files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.addEventListener('load', (ev)=>{
            let result = ev.target.result
            // image.src = result
            imgArr.push(result)
        localStorage.setItem('imgArr', JSON.stringify(imgArr))
       

        })
    }



function displayBlog() {
    let BlogPreview = document.getElementById('blogPreview')
    BlogPreview.innerHTML = ""

    // if (!file) {
    //     alert('Please add an image to the blog.')
    //     return;
    // }

    if (blogDatabase.length === 0) {
        BlogPreview.innerHTML = `<h4>No blogs yet...</h4>`
    } else{
        
        for (let index = 0; index < blogDatabase.length; index++) {
            const element = blogDatabase[index];
    
    
            BlogPreview.innerHTML += ` <div id="blogCard">
            <p id="forBlogTitle">
                ${element.blogtitle}
            </p>
            <img src=${imgArr[index]} id="image" alt="" width="300" height="300">
            <p id="forBlogDescription">
                ${element.blogdescription}
            </p>
    
            <button onclick="deletePost(${index})"> Delete </button> <button onclick="editDescription(${index})"> Edit </button>
        </div>`
        }
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
    let editInput = prompt('Edit Description', blogDatabase[i].blogdescription)

        if (editInput !== blogDatabase[i].blogdescription && editInput) {
            // blogDatabase.splice(i, 1, {blogtitle : obj.blogtitle , blogdescription: editedValue})
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