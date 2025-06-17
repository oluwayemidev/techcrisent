import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const results = [
    {
        company: 'Tooplus NG',
        quote: '“We went from zero online leads to 87 warm leads in just 21 days after the redesign. Their system works.”',
        stat: '+87 Leads in 3 Weeks',
        logo: '/logos/tooplus.jpg',
    },
    {
        company: 'Goodspac',
        quote: '“They rebuilt our site from the ground up — faster, cleaner, and 3x higher sign-ups. Worth every penny.”',
        stat: '3x Sign-up Rate',
        logo: '/logos/goodspac.png',
    },
    {
        company: 'AndOne Solar',
        quote: '“From outdated to unbeatable. Their redesign + automation brought in 200+ leads in 2 months. Game-changer.”',
        stat: '200+ Leads in 60 Days',
        logo: '/logos/andone.png',
    },
];

const ResultsSection = () => {
    return (
        <section className="relative z-10 bg-gray-900 px-6 py-24 text-white md:px-12">
            <div className="mx-auto max-w-6xl text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 text-3xl font-bold md:text-5xl"
                >
                    Real Results From Real Clients
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mb-12 max-w-2xl text-lg text-gray-400"
                >
                    We don’t just build websites, we build results. Here’s what happens when businesses trust us to redesign and optimize their
                    digital presence.
                </motion.p>

                <div className="grid grid-cols-1 gap-10 text-left md:grid-cols-3">
                    {results.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="space-y-4 rounded-2xl border border-gray-800 bg-gray-950 p-6 shadow-md transition flex flex-col justify-between"
                        >
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-green-400" size={20} />
                                <p className="text-sm font-medium text-green-400">{item.stat}</p>
                            </div>
                            <p className="text-lg text-white italic">“{item.quote}”</p>
                            <div className="w-full mt-4 flex items-center justify-between self-end">
                                <span className="font-semibold text-gray-300">{item.company}</span>
                                {item.logo && (
                                    <img src={item.logo} alt={item.company} className="h-10 w-10 rounded-full bg-white object-contain p-1" />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResultsSection;
