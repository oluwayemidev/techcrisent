import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';

const ScrollToTopOnNavigate = () => {
    const { url } = usePage();

    useEffect(() => {
        // Don't scroll for hash-based links like /#about
        if (!url.includes('#')) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [url]);

    return null;
};

export default ScrollToTopOnNavigate;
