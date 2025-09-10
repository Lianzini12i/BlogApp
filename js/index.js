let userDatabase = JSON.parse(localStorage.getItem('augustJsDatabase')) || []
let username = document.getElementById('name')
let email = document.getElementById('email')
let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirm')


function displayUsers(params) {
    tbody.innerHTML = ''
    for (let index = 0; index < userDatabase.length; index++) {
        tbody.innerHTML += ` <tr>
   <td> ${index + 1} </td>
   <td> ${userDatabase[index].username} </td>
   <td> ${userDatabase[index].email} </td>
   <td> ${userDatabase[index].password}  </td>
</tr>`

    }
}

displayUsers()

function signUp() {
    let myUsername = username.value.trim()
    let myEmail = email.value.trim()
    let myPassword = password.value.trim()
    let myConfirm = confirmPassword.value.trim()

    // if (myUsername === '' || myEmail === '' || myPassword === '' || myConfirm === '') {
    //     alert('all fields are mandatory')

    // } else if (myPassword !== myConfirm) {
    //     alert('passwords do not match')

    // }else{

    // }

    if (myUsername === '' || myEmail === '' || myPassword === '' || myConfirm === '') {
        alert('all fields are mandatory')
        return
    }

    if (myPassword !== myConfirm) {
        alert('passwords do not match')
        return
    }

    if (myPassword < 8) {
        alert('password must be at least 8 characters')
        return
    }


    let UserExistingObj = undefined

    for (let index = 0; index < userDatabase.length; index++) {
        if (userDatabase[index].username === myUsername) {
            UserExistingObj = userDatabase[index]
            break
        }
    }


    if (UserExistingObj) {
        alert('user already exists')
        return
    }

    let userObj = {
        username: myUsername,
        email: myEmail,
        password: myPassword
    }

    userDatabase.push(userObj)
    localStorage.setItem('augustJsDatabase', JSON.stringify(userDatabase))
    displayUsers()

    alert('sign up successful')
    console.log(userDatabase);
    location.href = './pages/login.html'


}