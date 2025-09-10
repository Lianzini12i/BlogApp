let userDatabase = JSON.parse(localStorage.getItem('augustJsDatabase')) || []



function signUp() {
    let username = document.getElementById('name').value.trim()
    let password = document.getElementById('password').value.trim()

    if (!username || !password) {
        alert('All fields are mandatory')
        return

    }




    if (!findUserObj(username , true)) {
        alert('user not found try signing up')
        window.location.href = '../index.html'
    } else {
        if (password === findUserObj(username, true).password) {
            alert('Login sucessful')
            localStorage.setItem('augustJsUserIndex', findUserObj(username, false))
            window.location.href = '../pages/dashboard.html'
        } else {
            alert('Incorrect Password')
        }
    }


}


function findUserObj(username, bool) {
    let userExisting = undefined
    for (let index = 0; index < userDatabase.length; index++) {
        if (username === userDatabase[index].username) {
            userExisting = bool ? userDatabase[index] : index
            break
        }
    }
    return userExisting
}

function four() {
    return 4
}

console.log(four());