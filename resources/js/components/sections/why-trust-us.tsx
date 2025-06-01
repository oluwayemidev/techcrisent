import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socialLinks = [
    {
        href: 'https://twitter.com/techcrisent',
        icon: <FaTwitter size={20} />,
        title: 'Follow us on Twitter',
    },
    {
        href: 'https://instagram.com/techcrisent',
        icon: <FaInstagram size={20} />,
        title: 'Follow us on Instagram',
    },
    {
        href: 'https://linkedin.com/company/techcrisent',
        icon: <FaLinkedin size={20} />,
        title: 'Follow us on LinkedIn',
    },
    {
        href: 'https://facebook.com/techcrisent',
        icon: <FaFacebook size={20} />,
        title: 'Follow us on Facebook',
    },
];

const WhyTrustUsSection = () => {
    return (
        <section className="bg-background text-foreground px-6 py-24 md:px-12 dark:bg-gray-950" id="about">
            <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
                {/* Text Block */}
                <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">Why Trust Us</h2>
                    <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-400">
                        We’re a small, elite team focused on helping agencies like yours grow through clarity and automation, not fluff or flashy
                        design.
                    </p>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        No bloated retainers. No corporate BS. Just real systems that get you leads.
                    </p>
                    <Separator className="mx-auto my-6 w-24 border-gray-800 dark:border-gray-400" orientation="horizontal" />
                    <div className="mt-6 flex space-x-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="inline-block p-2 text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                                title={link.title}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                    <a
                        href="/audit"
                        className="bg-primary mt-6 inline-block rounded-sm px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 md:mt-4 md:px-8 md:py-4 dark:bg-gray-700 dark:hover:bg-gray-600"
                        title="Book a Free Audit"
                    >
                        Book Free Audit
                    </a>
                </motion.div>

                {/* Founder Image */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <img
                        src="/images/founder.jpg"
                        alt="Founder"
                        className="h-84 w-84 rounded-2xl border-4 border-indigo-600 object-cover shadow-xl"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default WhyTrustUsSection;
