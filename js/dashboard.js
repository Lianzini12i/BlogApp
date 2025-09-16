let userDatabase = JSON.parse(localStorage.getItem('augustJsDatabase')) || [];

let currentUserIndex = localStorage.getItem('augustJsUserIndex');

let currentUserObj = userDatabase[currentUserIndex]

// let imgMemory = JSON.parse(localStorage.getItem('imgArr')) || []
// let imgArr = imgMemory || []


function checkUserAuth() {
    if (!currentUserIndex) {
        window.location.href = '../pages/login.html';
    }
}
checkUserAuth()



console.log(currentUserIndex);
console.log(currentUserObj);
let blogDatabase = JSON.parse(localStorage.getItem('blogDatabase')) || [];

displayBlog();

let currentUser = document.getElementById('currentUser');
currentUser.innerHTML = currentUserObj.username;

let uploadedImage = null


function postBlog() {
    if ( blogtitle.value.trim() === '' || blogdescription.value.trim() === '' ||!uploadedImage) {
        alert("All fields are mandatory.")
        return
    }
    
    let blog = {
        blogtitle: blogtitle.value.trim(),
        blogimage: uploadedImage,
        blogdescription: blogdescription.value.trim()
    }
    
    blogDatabase.push(blog);
    localStorage.setItem('blogDatabase', JSON.stringify(blogDatabase));
    // localStorage.clear
    // localStorage.setItem
    displayBlog()
    uploadedImage = null
}


function pickPic() {
    let file = document.getElementById('blogImage').files[0];
    if (!file) {
        return
    }
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.addEventListener('load', (ev)=>{
            uploadedImage = ev.target.result;
            // console.log(uploadedImage);
            // image.src = uploadedImage
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
    
    
            BlogPreview.innerHTML += ` 
            <div id="blogCard">
                <p id="forBlogTitle"> ${element.blogtitle}</p>
                <img src="${element.blogimage}" alt="Blog Image" width="300" height="300">
                <p>${element.blogdescription}</p>
                <button onclick="deletePost(${index})">Delete</button>
                <button onclick="editDescription(${index})">Edit</button>
            </div>
            `
        }
    }

    blogtitle.value = ""
    blogImage.value = ""
    blogdescription.value = ""
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
    if (editInput && editInput !== blogDatabase[i].blogdescription) {
        // blogDatabase.splice(i, 1, {blogtitle : obj.blogtitle , blogdescription: editedValue})
        blogDatabase[i].blogdescription = editInput
        localStorage.setItem('blogDatabase', JSON.stringify(blogDatabase))
        displayBlog()
    }
}

function deletePost(i) {
    let confirmDel = confirm("Are you sure you want to delete this post?");
    if (confirmDel) {
        blogDatabase.splice(i, 1)
        localStorage.setItem('blogDatabase', JSON.stringify(blogDatabase))
        displayBlog()
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