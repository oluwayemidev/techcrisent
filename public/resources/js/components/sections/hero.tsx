// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] text-white">
            {/* Blurred radial background elements */}
            <div className="absolute top-0 left-0 z-0 h-[40vw] w-[40vw] rounded-full bg-indigo-600/30 blur-[120px]" />
            <div className="absolute right-0 bottom-0 z-0 h-[30vw] w-[30vw] rounded-full bg-purple-500/30 blur-[100px]" />

            {/* Optional glass overlay */}
            <div className="absolute inset-0 z-0 bg-black/20 backdrop-blur-md" />

            {/* Content */}
            <div className="relative z-10 container mx-auto flex flex-col items-center justify-between gap-10 px-6 py-24 md:flex-row md:px-12">
                {/* Text Content */}
                <motion.div
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex w-full flex-col items-center space-y-6 text-center"
                >
                    <h1 className="text-4xl leading-tight font-extrabold md:text-6xl">
                        Get 5–10 Qualified Leads
                        <br /> With a <span className="text-primary">Website That Sells for You</span>
                    </h1>
                    <p className="text-lg text-gray-300 md:text-xl">
                        We build high-converting sites and automations that generate leads guaranteed or you don’t pay
                    </p>
                    <div className="mt-6 flex gap-4">
                        <a
                            href="/audit"
                            className="rounded-2xl bg-primary px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-indigo-700"
                        >
                            Get a Free Audit
                        </a>
                        <a
                            href="#projects"
                            className="rounded-2xl border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-black"
                        >
                            See Our Work
                        </a>
                    </div>
                </motion.div>

                {/* Lottie Animation */}
                {/* <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-[400px] w-full md:w-[400px]"
                >
                    <Player
                        autoplay
                        loop
                        src="https://assets10.lottiefiles.com/packages/lf20_xlmz9xwm.json"
                        style={{ height: '100%', width: '100%' }}
                    />
                </motion.div> */}

                {/* <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="flex w-full max-w-xl items-center justify-center md:w-[600px]"
                > */}
                {/* <DotLottieReact src="https://lottie.host/2e0aefe5-b68c-4f9d-84e2-6ee61f31dda4/9FHyrOo0PR.lottie" loop autoplay /> */}
                {/* <DotLottieReact src="https://lottie.host/ad5c7b3d-deb0-4078-b6a5-970f9d583e68/X5kmG0PuKM.lottie" loop autoplay />
                </motion.div> */}
            </div>
        </section>
    );
};

export default HeroSection;
