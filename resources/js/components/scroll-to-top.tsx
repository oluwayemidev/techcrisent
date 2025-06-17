import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';

const ScrollToTopOnNavigate = () => {
    const { url } = usePage();

    useEffect(() => {
        if (!url.includes('#')) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [url]);

    return null;
};

export default ScrollToTopOnNavigate;
