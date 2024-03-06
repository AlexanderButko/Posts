import {useState} from "react";

export const useFetching = (callback) => {//Создание кастомного хука загрузки данных с сервера
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback();
        } catch(e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }
    return [fetching, isLoading, error];
}

