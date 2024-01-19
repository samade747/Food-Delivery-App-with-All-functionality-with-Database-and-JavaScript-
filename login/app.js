import { signUp, login, addInDBById, getLoggedInUser, getData, updateData, uploadFile, getAllDataOrderedByTimestamp, logout, addInDB, deletData } from "../utilities/functions.mjs"; 


const email = document.getElementById('email')
const Password = document.getElementById('password')
const loginBtn = document.getElementById('loginBtn')


const handleLogin = async (event) => {
    console.log('====> checking login User')
    event.preventDefault();    
    console.log(email.value, Password.value)

    if(!email.value || !Password.value){
        console.log("Please fill in all fields")
        return
    } else if (Password.value.length < 8) {
        console.log("Password should be at least 8 characters long!")
        return
    }

    const logging = await login(email.value, Password.value)
    
    if(logging.status) {
        console.log(logging.message)
        window.location.href = '../home/index.html'
    } else {
        console.log(logging.message)
        console.error('Firebase Authentication Error:', logging.code);
    }
}

// const handleLogin = async (event) => {
//     console.log('====> checking login User')
//     event.preventDefault();    
//     console.log(email.value, inputPassword.value)

//     if(!email.value || !inputPassword){
//         alert("pls fill all fields")
//         return
//     } else if (inputPassword.value.length < 8) {
//         alert("Password should be at least 8 characters long!")
//         return
//     }
        
//     const logging = await login(email.value, inputPassword.value)
//     if(logging.status) {
//     alert(logging.message)
//     window.location.href = '../home/index.html'
//     } else {
//         alert(logging.message)
//         console.error('Firebase Authentication Error:', logging.error);
//     }

// }

loginBtn.addEventListener('click', handleLogin)