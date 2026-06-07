import { useState, useCallback } from 'react';

export function useNotification() {
    const [notification, setNotification] = useState(null);

    const showNotification = useCallback((message) => {
        setNotification(message);
        setTimeout(() => {
            setNotification(null);
        }, 3000);
    }, []);

    return { notification, showNotification };
}
