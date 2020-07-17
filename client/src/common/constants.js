export const HTTP_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}   
export const USER_LIST_TITLE = "User List"
export const ADD_USER_TITLE = "Add User"

export const USER_FIRSTNAME_TITLE = "Firstname"
export const USER_LASTNAME_TITLE = "Lastname"
export const USER_USERNAME_TITLE = "Username"
export const USER_PASSWORD_TITLE = "password"
export const USER_ROLE_TITLE = "Role"

export const USER_ADDED_SUCCESSFULLY_TOAST_TITLE = "User added successfully";
export const USER_ADDED_FAILED_TOAST_TITLE = "Create new user failed";
export const SEARCH_FAILED_TOAST_TITLE = "Searchfailed";

export const SEARCH_TITLE = "Search"
export const SEARCH_PLACEHOLDER = "Search User..."

export const ADD = "Add"
export const SEARCH = "Search"
export const NO_SEARCH_RESULT = "No search result";

export let BASIC_URL   = "http://localhost:5000"
export let SEARCH_SERVICE_URL  = "http://localhost:5001"

console.log("procces.env.NODE_ENV: " + process.env.NODE_ENV)
if(process.env.NODE_ENV){
  BASIC_URL   = "http://localhost"
  SEARCH_SERVICE_URL  = "http://localhost"
}

export const MAX_USERS_PER_FETCH = 10;

export const toastStyle= {
    toastText: {
      fontSize: "30px",
      lineHeight:"30px",
      color:"#FFF"
    },
    toastIcon:{
      paddingRight:"20px",
      paddingLeft:"0"
    },
  }