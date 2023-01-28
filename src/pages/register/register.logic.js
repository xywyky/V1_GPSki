import { useState } from 'react';

export const useRegister = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_2, setPassword_2] = useState('');

    const [error, setError] = useState(false);

    return {
        email,
        setEmail,
        error,
        setError,
        password,
        setPassword,
        password_2,
        setPassword_2

    }
}