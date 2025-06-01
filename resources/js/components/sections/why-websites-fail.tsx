import { motion } from 'framer-motion';

const WhyWebsitesFail = () => {
    return (
        <section className="relative z-10 bg-gray-200 px-6 py-20 text-gray-800 md:px-12 dark:bg-gray-900 dark:text-gray-200" id="case-studies">
            <div className="mx-auto max-w-5xl space-y-8 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold md:text-4xl"
                >
                    Want to know why your site isn’t converting?
                    <br />
                    <span className="text-primary text-3xl"> Get a free 5-minute audit that shows where you’re losing leads.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl dark:text-gray-300"
                >
                    93% of Real estate websites (and most business sites) fail because they don’t guide visitors to action. <br />
                    They impress but don’t convert.
                </motion.p>

                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
                    <a
                        href="/audit"
                        className="hover:bg-gray-900 dark:hover:bg-gray-600 mt-6 inline-block rounded-sm bg-gray-700 px-8 py-4 text-sm font-semibold text-white transition"
                    >
                        Book Free Audit
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyWebsitesFail;
