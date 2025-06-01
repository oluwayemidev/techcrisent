import { useAppearance } from '@/hooks/use-appearance';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';

export default function AppearanceToggleSwitch({ className = '' }: { className?: string }) {
    const { appearance, updateAppearance } = useAppearance();
    const isDark = appearance === 'dark';

    return (
        <button
            onClick={() => updateAppearance(isDark ? 'light' : 'dark')}
            className={cn('relative flex h-8 w-16 items-center rounded-full bg-neutral-200 transition-colors dark:bg-neutral-700', className)}
            aria-label="Toggle theme"
        >
            <div
                className={cn(
                    'absolute top-0 left-0 flex h-full w-1/2 items-center justify-center transition-all duration-300',
                    isDark ? 'translate-x-full' : 'translate-x-0',
                )}
            >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md dark:bg-neutral-900">
                    {isDark ? <Moon className="h-4 w-4 text-neutral-800 dark:text-white" /> : <Sun className="h-4 w-4 text-neutral-800" />}
                </div>
            </div>

            {/* Optional: Icons in background */}
            <div className="flex w-full gap-2 justify-between px-2 text-xs text-neutral-600 dark:text-neutral-300">
                <Sun className="h-4 w-4" />
                <Moon className="h-4 w-4" />
            </div>
        </button>
    );
}
