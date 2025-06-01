import { motion } from 'framer-motion';
import { PhoneCall, Rocket } from 'lucide-react';
import { FaDrawPolygon } from 'react-icons/fa';

const services = [
    {
        icon: <Rocket size={36} />,
        title: 'Lead-Generating Websites',
        description: 'Websites built to convert visitors into leads with optimized user journeys and clear calls to action.',
    },
    {
        icon: <FaDrawPolygon size={36} />,
        title: 'UI/UX Design',
        description: 'Clean, modern, conversion-focused designs that improve user experience and increase engagement.',
    },
    {
        icon: <PhoneCall size={36} />,
        title: 'Tech Consulting & Live Coaching',
        description: 'Get expert guidance on launching, improving, or scaling your tech stack with 1-on-1 sessions.',
    },
];

const ServicesSection = () => {
    return (
        <section className="bg-background text-gray-800 dark:text-gray-100 relative z-10 px-6 py-24 md:px-12 dark:bg-gray-950" id="services">
            <div className="mx-auto max-w-6xl text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 text-3xl font-bold md:text-5xl"
                >
                    Our Core Services
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mb-12 max-w-2xl text-lg text-gray-700 dark:text-gray-400"
                >
                    Everything you need to launch, grow, or elevate your digital presence built with precision and strategy.
                </motion.p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="rounded-2xl border border-gray-800 bg-gray-900 p-6 transition hover:shadow-xl"
                        >
                            <div className="text-primary mb-4 flex justify-center">{service.icon}</div>
                            <h3 className="mb-2 text-xl font-semibold text-white">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
