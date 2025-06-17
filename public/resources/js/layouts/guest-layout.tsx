import AppearanceToggleTab from '@/components/appearance-tabs2';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { LucideIcon, Menu, X } from 'lucide-react';
import React, { ReactNode, useState } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { TbMailFilled } from 'react-icons/tb';
import ScrollToTopOnNavigate from '@/components/scroll-to-top';

interface GuestLayoutProps {
    children: ReactNode;
    title?: string;
}

interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isButton?: boolean;
    buttonClass?: string;
    isExternal?: boolean;
    isActive?: boolean;
}
    
const navItems: NavItem[] = [
    { title: 'Services', href: '/#services' },
    { title: 'Case Studies', href: '/#case-studies' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'About', href: '/#about' },
    { title: 'Blog', href: '' },
    { title: 'Contact', href: '/audit' },
    {
        title: 'Book Free Audit',
        href: '/audit',
        isButton: true,
        buttonClass:
            'rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-white hover:text-white transition hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 md:px-8 md:py-4 hidden md:inline-block',
    },
];

const resourceLinks: NavItem[] = [
    { title: 'Privacy Policy', href: '/privacy-policy' },
    { title: 'Terms of Service', href: '/terms' },
    { title: 'Refund Policy', href: '/refund-policy' },
    { title: 'Cookie Policy', href: '/cookie-policy' },
    { title: 'Careers', href: '/careers' },
    { title: 'Support', href: '/support' },
];

const GuestLayout: React.FC<GuestLayoutProps> = ({ children, title = 'Crisent' }) => {
    const { auth } = usePage<SharedData>().props;
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen transition-colors duration-300 bg-background text-foreground">
            <ScrollToTopOnNavigate />
            <Head title={title}>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <Toaster />

            {/* Header */}
            <header className="sticky top-0 z-50 border-b shadow-sm bg-card border-border">
                <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
                    <Link href="/" className="text-2xl font-bold text-primary">
                        <div className="flex items-center gap-2 mb-2">
                            <img src="/logo.png" alt="Logo" className="w-6 h-6" /> {/* Replace with your actual logo */}
                            <span>Crisent</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="items-center hidden gap-4 text-sm lg:flex">
                        {navItems.map((item) =>
                            !item.isButton ? (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className={`${item.isActive ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'} ${item.isButton ? item.buttonClass : ''}`}
                                    target={item.isExternal ? '_blank' : undefined}
                                >
                                    {item.icon && <item.icon className="inline-block mr-1" />}
                                    {item.title}
                                </Link>
                            ) : (
                                ''
                            ),
                        )}

                        <AppearanceToggleTab />
                    </nav>

                    {navItems.map((item) =>
                        item.isButton ? (
                            <Link key={item.title} href={item.href} className={`${item.buttonClass}`} target={item.isExternal ? '_blank' : undefined}>
                                {item.icon && <item.icon className="inline-block mr-1" />}
                                {item.title}
                            </Link>
                        ) : (
                            ''
                        ),
                    )}

                    {/* Mobile Nav Toggle */}
                    <button
                        className="p-2 transition rounded-full text-muted-foreground hover:text-primary lg:hidden"
                        onClick={() => setMobileNavOpen(!mobileNavOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileNavOpen && (
                    <nav className="bg-background border-border space-y-2 border-t px-[20%] py-4 text-sm lg:hidden">
                        {navItems.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className={`block w-full py-2 ${item.isActive ? 'text-primary font-semibold' : 'hover:text-primary border-b-1 border-b-gray-600 text-gray-400 transition'} ${item.isButton ? item.buttonClass : ''}`}
                                target={item.isExternal ? '_blank' : undefined}
                                onClick={() => setMobileNavOpen(false)}
                            >
                                {item.icon && <item.icon className="inline-block mr-1" />}
                                {item.title}
                            </Link>
                        ))}
                        <div className="flex items-center justify-center gap-4 py-2">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                navItems.map((item) =>
                                    item.isButton ? (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className={`w-fit ${item.buttonClass} ${item.isActive ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'} ${item.isButton ? item.buttonClass : ''} inline-block`}
                                            target={item.isExternal ? '_blank' : undefined}
                                            onClick={() => setMobileNavOpen(false)}
                                        >
                                            {item.icon && <item.icon className="inline-block mr-1" />}
                                            {item.title}
                                        </Link>
                                    ) : (
                                        ''
                                    ),
                                )
                            )}
                        </div>
                        <AppearanceToggleTab className="m-auto" />
                    </nav>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-grow">{children}</main>

            {/* Footer */}
            <footer className="bg-[#0B1120] px-4 py-12 text-gray-400">
                <div className="grid grid-cols-1 gap-10 mx-auto max-w-7xl sm:grid-cols-2 md:grid-cols-4">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <img src="/logo.png" alt="Logo" className="w-6 h-6" /> {/* Replace with your actual logo */}
                            <span className="text-lg font-bold text-white">Crisent</span>
                        </div>
                        <p className="mb-4 text-sm">We build conversion-driven websites and digital systems that turn traffic into paying clients.</p>
                        <div className="flex gap-4 mt-4 text-gray-500">
                            <a href="#" className="transition hover:text-white">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="transition hover:text-white">
                                <FaTwitter />
                            </a>
                            <a href="#" className="transition hover:text-white">
                                <FaInstagram />
                            </a>
                            <a href="#" className="transition hover:text-white">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            {navItems.map((item) =>
                                !item.isButton ? (
                                    <li>
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className={`${item.isActive ? 'text-primary font-semibold' : 'hover:text-white'} ${item.isButton ? item.buttonClass : ''}`}
                                            target={item.isExternal ? '_blank' : undefined}
                                        >
                                            {item.icon && <item.icon className="inline-block mr-1" />}
                                            {item.title}
                                        </Link>
                                    </li>
                                ) : (
                                    ''
                                ),
                            )}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="mb-4 font-semibold text-white">Resources</h4>
                        <ul className="space-y-2 text-sm">
                            {resourceLinks.map((item) =>
                                !item.isButton ? (
                                    <li>
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className={`${item.isActive ? 'text-primary font-semibold' : 'hover:text-white'} ${item.isButton ? item.buttonClass : ''}`}
                                            target={item.isExternal ? '_blank' : undefined}
                                        >
                                            {item.icon && <item.icon className="inline-block mr-1" />}
                                            {item.title}
                                        </Link>
                                    </li>
                                ) : (
                                    ''
                                ),
                            )}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="mb-4 font-semibold text-white">Contact Us</h4>

                        <p className="flex items-center mb-2 text-sm text-muted-foreground">
                            <TbMailFilled className="w-4 h-4 mr-2 fill-primary" />
                            support@crisent.com
                        </p>

                        <p className="flex items-center mb-2 text-sm text-muted-foreground">
                            <BsFillTelephoneFill className="w-4 h-4 mr-2 fill-primary" />
                            +234 703 282 0840
                        </p>
                        <p className="flex items-center text-sm text-muted-foreground">
                            <FaLocationDot className="w-4 h-4 mr-2 fill-primary" />
                            Lagos Nigeria
                        </p>
                    </div>
                </div>
                <div className="pt-4 mt-10 text-xs text-center text-gray-600 border-t">
                    &copy; {new Date().getFullYear()} Crisent. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default GuestLayout;
