import credentials from "@/data/credentials.json"
import { notify } from "@/utils/toastHelper";

export const Authentication = (email: string, password: string) => {
    const user = credentials.find(cred => cred.gmail === email && cred.password === password);

    if (!user) {
        notify('Invalid email or password.', 'error');
    } 

    return {
        email: user?.gmail,
        role: user?.role,
        success: true 
    };
}