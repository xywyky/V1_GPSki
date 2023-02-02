import { useState } from 'react';

export const getProfile = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);


    return {
        login : "HugoLeGamer",
        email : "test@gmail",
        password : "132",
        prenom: "hugo",
        nom: "carimalo",
        tel: "0666666666"
    }
}
