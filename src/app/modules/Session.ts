// import { setValue, getValue, removeValue, getSessionTimeoutDuration } from '../utils/localStorageManager.js';

// const checkIsValidSession = () => {
//     const sessionEnd = getValue('sessionTimeEnd');
//     if (!sessionEnd) return false;
//     if (Date.now() < Number(sessionEnd)) {
//         return true;
//     }
// }

// const checkSession = (AuthUser) => {
//     if (!AuthUser === null) {
//         return false;

//     } else {
//         if (!AuthUser === null && !AuthUser.isRemembered && checkIsValidSession()){

//         }
//     }

//     return true;
// }

// const startSession = (AuthUser) => {
//     setValue('authUser', AuthUser);
//     setValue('sessionTimeEnd', Date.now() + Number(getSessionTimeoutDuration()));
// }

// const logoutSession = (redirect) => {
//     removeValue('authUser');
//     removeValue('sessionTimeEnd');
//     window.location.href = redirect;
// }

// const getCurrentUser = () => {
//     return getValue('authUser');
// }

// export { checkIsValidSession, checkSession, startSession, logoutSession, getCurrentUser };