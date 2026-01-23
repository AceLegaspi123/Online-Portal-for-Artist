// validation.ts
import loginPatterns from './patterns';
import { notify } from './toastHelper';

export const validateUser = (email: string, password: string): string[] => {
    const errorMessages: string[] = [];

    loginPatterns.forEach(pattern => {
        const valueToTest = pattern.id === 'email' ? email : password;

        if (pattern.required && !valueToTest) {
            errorMessages.push(pattern.message.required);
        } else if (pattern.pattern && !pattern.pattern.test(valueToTest)) {
            errorMessages.push(pattern.message.pattern);
        }
    });

    return errorMessages;
}