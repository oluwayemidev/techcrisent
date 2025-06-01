import { useCallback, useEffect, useState } from 'react';

export type Appearance = 'light' | 'dark' | 'system';

const prefersDark = () => {
    if (typeof window === 'undefined') {
        return false;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const setCookie = (name: string, value: string, days = 365) => {
    if (typeof document === 'undefined') {
        return;
    }

    const maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};

const applyTheme = (appearance: Appearance) => {
    const isDark = appearance === 'dark' || (appearance === 'system' && prefersDark());

    document.documentElement.classList.toggle('dark', isDark);
};

const mediaQuery = () => {
    if (typeof window === 'undefined') {
        return null;
    }

    return window.matchMedia('(prefers-color-scheme: dark)');
};

const handleSystemThemeChange = () => {
    const currentAppearance = localStorage.getItem('appearance') as Appearance;
    applyTheme(currentAppearance || 'system');
};

// export function initializeTheme() {
//     const savedAppearance = (localStorage.getItem('appearance') as Appearance) || 'system';

//     applyTheme(savedAppearance);

//     // Add the event listener for system theme changes...
//     mediaQuery()?.addEventListener('change', handleSystemThemeChange);
// }

// export function initializeTheme() {
//     const stored = localStorage.getItem('theme');
//     if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//         document.documentElement.classList.add('dark');
//         localStorage.setItem('theme', 'dark');
//     } else {
//         document.documentElement.classList.remove('dark');
//         localStorage.setItem('theme', 'light');
//     }
// }

export function initializeTheme() {
    const storedAppearance = (localStorage.getItem('appearance') as Appearance) || 'system';
    applyTheme(storedAppearance);
    mediaQuery()?.addEventListener('change', handleSystemThemeChange);
}


export function useThemeMode() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const isDark = document.documentElement.classList.contains('dark');
        setTheme(isDark ? 'dark' : 'light');
    }, []);

    return theme;
}




export function useAppearance() {
    const [appearance, setAppearance] = useState<Appearance>('system');

    const updateAppearance = useCallback((mode: Appearance) => {
        setAppearance(mode);

        // Store in localStorage for client-side persistence...
        localStorage.setItem('appearance', mode);

        // Store in cookie for SSR...
        setCookie('appearance', mode);

        applyTheme(mode);
    }, []);

    useEffect(() => {
        const savedAppearance = localStorage.getItem('appearance') as Appearance | null;
        updateAppearance(savedAppearance || 'system');

        return () => mediaQuery()?.removeEventListener('change', handleSystemThemeChange);
    }, [updateAppearance]);

    return { appearance, updateAppearance } as const;
}
