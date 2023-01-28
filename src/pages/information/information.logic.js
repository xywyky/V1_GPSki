import { useState } from 'react';

export const useInformation = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [niveau, setNiveau] = useState('');
    const [error, setError] = useState(false);

    return {
        nom,
        setNom,
        niveau,
        setNiveau,
        error,
        setError,
        prenom,
        setPrenom
    }
}