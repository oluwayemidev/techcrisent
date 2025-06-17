import { motion } from 'framer-motion';
import { LayoutDashboard, MailCheck, TrendingUp } from 'lucide-react';

const solutions = [
    {
        icon: <LayoutDashboard size={32} />,
        title: '1. We Redesign Your Homepage for Conversion',
        description: 'Your homepage becomes a guided experience that turns visitors into leads with clear calls to action and persuasive structure.',
    },
    {
        icon: <MailCheck size={32} />,
        title: '2. We Plug in Lead Capture & Automated Follow-ups',
        description: 'We integrate contact forms, lead magnets, and smart automation (email, CRM, WhatsApp) to follow up without lifting a finger.',
    },
    {
        icon: <TrendingUp size={32} />,
        title: '3. You Get More Leads Without Touching Ads',
        description: 'Your site works 24/7, turning organic and referral traffic into real business—no ad spend needed.',
    },
];

const SolutionSection = () => {
    return (
        <section className="bg-background text-gray-800 dark:text-gray-100 relative z-10 px-6 py-24 md:px-12 dark:bg-gray-950">
            <div className="mx-auto max-w-5xl text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 text-3xl font-bold md:text-5xl"
                >
                    Your Solution <br /> <span className='text-primary text-4xl'>(Our 3-Step Framework)</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mb-12 max-w-2xl text-lg text-gray-900 dark:text-gray-400"
                >
                    We solve the “looks good but doesn’t convert” problem by rebuilding your site with strategy, automation, and real results.
                </motion.p>

                <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-3">
                    {solutions.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="rounded-2xl border border-gray-800 bg-gray-900 p-6 transition hover:shadow-xl"
                        >
                            <div className="mb-4 text-primary">{step.icon}</div>
                            <h3 className="mb-2 text-xl font-semibold text-white">{step.title}</h3>
                            <p className="text-sm text-gray-400">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
