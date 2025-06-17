import { useThemeMode } from '@/hooks/use-appearance';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Marquee from 'react-fast-marquee';

const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg',
    'https://upload.wikimedia.org/wikipedia/commons/3/3b/Slack_icon_2022.svg',
    'https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/b/b1/LinkedIn_Logo_2013_%282%29.svg',
];

const testimonials = [
    {
        quote: 'We went from 0 to 87 leads in just 3 weeks. The system just works.',
        name: 'James O., CEO @ RealFlow Agency',
    },
    {
        quote: 'Our conversion rate tripled after the redesign. Game changer.',
        name: 'Maria T., Founder @ VisionNest',
    },
    {
        quote: 'This isn’t just design—it’s strategic. They understand growth.',
        name: 'Ahmed B., Director @ ScaleGrid',
    },
];

const SocialProofSection = () => {
    const theme = useThemeMode();
    const gradientColor = theme === 'dark' ? "rgb{[24, 24, 27]}" : "rgb{[255, 255, 255]}";

    return (
        <section className="p-3 md:px-6 md:py-24 text-white dark:bg-gray-950">
            {/* <div className="mx-auto mb-16 max-w-6xl text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold md:text-5xl"
                >
                    Trusted by Teams That Grow
                </motion.h2>
            </div> */}

            {/* Logo Carousel */}
            <div className="mb-5 md:mb-20">
                <Marquee gradient={true} gradientColor={gradientColor} speed={50} className="mx-auto max-w-6xl">
                    {logos.map((src, index) => (
                        <motion.div whileHover={{ scale: 1.05 }} key={index} className="mx-8 opacity-70 transition hover:opacity-100">
                            <img src={src} alt={`Logo ${index + 1}`} className="h-4 object-contain grayscale hover:grayscale-0 md:h-6" />
                        </motion.div>
                    ))}
                </Marquee>
            </div>

            {/* Testimonials */}
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        className="rounded-2xl border border-gray-800 bg-gray-900 p-6 text-left transition hover:shadow-lg"
                    >
                        <Quote className="mb-4 text-indigo-500" />
                        <p className="mb-4 text-base text-gray-300 italic">“{t.quote}”</p>
                        <p className="text-sm font-medium text-gray-500">— {t.name}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SocialProofSection;
