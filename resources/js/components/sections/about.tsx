import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaRocket, FaTwitter } from 'react-icons/fa';

const AboutSection = () => {
    return (
        <section className="relative z-10 bg-gray-950 px-6 py-24 text-white md:px-12 dark:bg-gray-900">
            <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
                {/* Text Content */}
                <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                    <h2 className="mb-6 text-3xl font-bold md:text-5xl">About Our Agency</h2>
                    <p className="mb-4 text-lg text-gray-300">
                        We're a tech agency built by developers and strategists who’ve helped top startups and businesses go from idea to traction.
                        Our mission is to craft websites that don’t just look great, they deliver results.
                    </p>
                    <p className="mb-4 text-gray-400">
                        Using Laravel + React, we build scalable, fast, secure platforms paired with design that converts. We’ve worked with 30+
                        brands across tech, real estate, eCommerce, and education.
                    </p>
                    <p className="text-gray-400">Whether you're launching, rebranding, or scaling, we partner with you to make it happen.</p>

                    <div className="mt-6 flex space-x-4">
                        <a
                            href="https://twitter.com/techcrisent"
                            className="inline-block p-2 text-sm font-semibold text-gray-400 transition hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Follow us on Twitter"
                        >
                            <FaTwitter className="inline-block text-gray-400 transition hover:text-white" size={20} />
                        </a>
                        <a
                            href="https://instagram.com/techcrisent"
                            className="inline-block p-2 text-sm font-semibold text-gray-400 transition hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Follow us on Instagram"
                        >
                            <FaInstagram className="inline-block text-gray-400 transition hover:text-white" size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/company/techcrisent"
                            className="inline-block p-2 text-sm font-semibold text-gray-400 transition hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Follow us on LinkedIn"
                        >
                            <FaLinkedin className="inline-block text-gray-400 transition hover:text-white" size={20} />
                        </a>
                        <a
                            href="https://facebook.com/techcrisent"
                            className="inline-block p-2 text-sm font-semibold text-gray-400 transition hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Follow us on Facebook"
                        >
                            <FaFacebook className="inline-block text-gray-400 transition hover:text-white" size={20} />
                        </a>
                    </div>
                    <a
                        href="#contact"
                        className="mt-6 inline-block rounded-xl border border-gray-700 px-6 py-3 text-xs font-semibold text-gray-400 transition hover:border-white hover:text-white md:mt-4 md:px-6 md:py-4"
                    >
                        Let’s Build Something Great Together
                    </a>
                </motion.div>

                {/* Image or Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex h-[320px] w-full items-center justify-center rounded-3xl bg-gradient-to-tr from-indigo-600/40 to-purple-600/40 shadow-2xl backdrop-blur-md md:h-[400px]"
                >
                    <span className="text-2xl font-semibold text-white/80 md:text-3xl flex flex-col items-center gap-2"><FaRocket /> Laravel + React Powerhouse</span>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
