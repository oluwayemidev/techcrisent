import { motion } from 'framer-motion';
import { Fuel, Globe, HeadphonesIcon, MailOpen, SearchCheck, Smartphone } from 'lucide-react';

const services = [
    {
        icon: <Globe size={28} />,
        title: 'Lead-Generating Websites',
        benefit: 'Websites built to convert, not just look pretty.',
    },
    {
        icon: <Fuel size={28} />,
        title: 'Automated Sales Funnels',
        benefit: 'Capture leads and follow up automatically.',
    },
    {
        icon: <SearchCheck size={28} />,
        title: 'SEO-Optimized',
        benefit: 'Get found by the right people at the right time.',
    },
    {
        icon: <MailOpen size={28} />,
        title: 'Email + WhatsApp Follow-Up',
        benefit: 'Engage leads with automated, personalized messages.',
    },
    {
        icon: <Smartphone size={28} />,
        title: 'Mobile-Optimized',
        benefit: 'Your site works seamlessly on any device.',
    },
    {
        icon: <HeadphonesIcon size={28} />,
        title: 'Tech Consulting & Live Coaching',
        benefit: 'Expert guidance to launch, improve, or scale your tech stack.',
    },
];

const ServicesSnapshotSection = () => {
    return (
        <section className="bg-background dark:bg-gray-950 px-6 py-24 text-white md:px-12" id="services">
            <div className="mx-auto max-w-6xl text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 text-3xl font-bold md:text-5xl text-gray-800 dark:text-gray-100"
                >
                    What We Deliver
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mb-12 max-w-2xl text-lg text-gray-500"
                >
                    Our services are designed to get you results — not overwhelm you with tech talk. Here’s what we build for you.
                </motion.p>

                <div className="grid grid-cols-1 gap-8 text-left sm:grid-cols-2 md:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="rounded-2xl border border-gray-800 bg-gray-900 p-6 transition hover:shadow-xl"
                        >
                            <div className="mb-4 text-indigo-400">{service.icon}</div>
                            <h3 className="mb-1 text-lg font-semibold">{service.title}</h3>
                            <p className="text-sm text-gray-400">{service.benefit}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSnapshotSection;
