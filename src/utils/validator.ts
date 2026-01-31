// validation.ts
import loginPatterns from './patterns';
import { notify } from './toastHelper';

export const validateUser = (email: string, password: string): string[] => {
    const errorMessages: string[] = [];

    loginPatterns.forEach(pattern => {
        const valueToTest = pattern.id === 'email' ? email : password;
        if (pattern.required && !valueToTest) {
            console.log("Required field missing for", pattern.id);
            errorMessages.push(pattern.message.required);
        } else if (pattern.pattern && !pattern.pattern.test(valueToTest)) {
            console.log("Pattern mismatch for", pattern.id);
            errorMessages.push(pattern.message.pattern);
        }
    });

    console.log(errorMessages)

    return errorMessages;
}