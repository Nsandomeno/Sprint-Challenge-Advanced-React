import  { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('darkMode')

    useEffect(() => {
        if (value === false) {
            document.body.classList.add('darkMode')

        }else {
            document.body.classList.remove('darkMode')
        }
    }, [value])
    return [value, setValue]

}