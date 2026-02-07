import credentials from '@/data/credentials.json';

let LOGGED_IN_USER_ID = "USR001";

const getUser = (gmail: string) => {
    const userId = credentials.find(g => g.gmail === gmail)

    console.log("User ID:", userId);
    // LOGGED_IN_USER_ID = userId ? userId.id : "USR001";
    return userId;
}




export {getUser, LOGGED_IN_USER_ID};