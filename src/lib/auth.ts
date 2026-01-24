import credentials from '@/data/credentials.json';

const getUser = (gmail: string) => {
    const userId = credentials.find(g => g.gmail === gmail)

    return userId;
}


const LOGGED_IN_USER_ID = "USR004";

export {getUser, LOGGED_IN_USER_ID};