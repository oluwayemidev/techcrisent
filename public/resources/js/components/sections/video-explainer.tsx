import { motion } from 'framer-motion';

const VideoExplainerSection = () => {
    return (
        <section className="bg-gray-900 px-6 py-24 text-white md:px-12">
            <div className="mx-auto max-w-5xl text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 text-3xl font-bold md:text-5xl"
                >
                    Watch: How We Turn Sites into Lead Machines
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mb-12 max-w-2xl text-lg text-gray-400"
                >
                    In 90 seconds, you'll learn who we help, the problems we solve, and how we get real results, plus what to do next.
                </motion.p>

                {/* Video Embed or Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-gray-800 shadow-lg"
                >
                    <iframe
                        className="h-full w-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Explainer Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-10">
                    <a
                        href="#contact" // update this to your CTA section ID
                        className="inline-block rounded-full bg-primary px-8 py-3 font-semibold text-white shadow-md transition hover:bg-indigo-500"
                    >
                        Book Your Free Discovery Call
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoExplainerSection;
