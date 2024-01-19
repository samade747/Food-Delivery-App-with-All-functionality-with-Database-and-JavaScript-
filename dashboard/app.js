import { signUp, login, addInDBById, getLoggedInUser, getData, updateData, uploadFile, getAllDataOrderedByTimestamp, logout, addInDB, deletData} from "../utilities/functions.mjs"; 

let uid

// checking login function
const checkLogin = async () => {
    console.log('===> checking login user')
// if loggedInUser     
const loggedInUser = await getLoggedInUser()
// if log in user true hai toh 
if (loggedInUser) {
    console.log('===> user logged in', loggedInUser)
// so uid = loggedInUser.uid add krdo  
uid = loggedInUser.uid 
window.location.href = '../dashboard/index.html'
} else {
    window.location.href = "../login/index.html"
}
}
