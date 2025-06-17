import { Button } from '@/components/ui/button';
import GuestLayout from '@/layouts/guest-layout';
import { Check, X } from 'lucide-react';

export default function PricingPage() {
    return (
        <GuestLayout title="Pricing Plans - TechCrisent">
            <div className="bg-white from-slate-900 via-slate-800 to-slate-900 text-zinc-900 dark:bg-gradient-to-r dark:text-gray-200">
                {/* Hero Section */}
                <section className="px-6 py-24 text-center md:px-12">
                    <h1 className="mb-4 text-4xl font-bold md:text-6xl">Get More Leads. Predictably. Affordably.</h1>
                    <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl">
                        Choose a plan that fits your growth goals. All our plans include expert strategy, design, and lead automation.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="#contact"
                            className="bg-primary rounded-sm p-3 md:px-6 md:py-3 font-semibold text-white shadow-lg transition hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                        >
                            Get Started
                        </a>
                        <a
                            href="/audit"
                            className="rounded-sm border border-gray-500 p-3 md:px-6 md:py-3 font-semibold transition hover:bg-white hover:text-black"
                        >
                            Get Free Audit
                        </a>
                    </div>
                </section>

                {/* Pricing Tiers */}
                <section className="bg-zinc-950 px-6 py-16">
                    <div className="mx-auto mb-12 max-w-6xl text-center">
                        <h2 className="mb-2 text-4xl font-bold text-white">
                            Flexible{' '}
                            <span className="text-gradient bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                Pricing
                            </span>
                        </h2>
                        <p className="text-zinc-400">Choose the right plan for your business needs</p>
                    </div>
                    <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
                        {[
                            {
                                name: 'Startup',
                                price: '$199',
                                description: 'Perfect for small businesses and startups',
                                features: [
                                    'Custom website or application',
                                    'Responsive design',
                                    'Basic SEO optimization',
                                    '30 days of support',
                                    ['Advanced integrations', false],
                                    ['AI-powered features', false],
                                ],
                                cta: 'Get Started',
                            },
                            {
                                name: 'Business',
                                price: '$499',
                                description: 'Ideal for growing businesses',
                                features: [
                                    'Custom web/mobile application',
                                    'Advanced UI/UX design',
                                    'Third-party integrations',
                                    '90 days of support',
                                    'Performance optimization',
                                    ['AI-powered features', false],
                                ],
                                cta: 'Get Started',
                                popular: true,
                            },
                            {
                                name: 'Enterprise',
                                price: 'Custom',
                                description: 'For large-scale enterprise solutions',
                                features: [
                                    'Full-scale digital transformation',
                                    'AI and ML implementations',
                                    'Custom software architecture',
                                    'Dedicated project manager',
                                    '12 months of premium support',
                                    'Regular updates and maintenance',
                                ],
                                cta: 'Contact Us',
                            },
                        ].map((plan, i) => (
                            <div
                                key={i}
                                className={`relative rounded-2xl p-8 shadow-lg ${
                                    plan.popular ? 'border-2 border-primary shadow-purple-700/40' : 'border border-zinc-800'
                                } bg-zinc-900 text-left`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 rounded-bl-xl bg-primary px-3 py-1 text-xs font-bold text-white">
                                        POPULAR
                                    </div>
                                )}
                                <h3 className="mb-2 text-2xl font-bold text-gray-200">{plan.name}</h3>
                                <p className="mb-6 text-zinc-400">{plan.description}</p>
                                <div className="mb-1 text-3xl font-bold text-white">{plan.price}</div>
                                <div className="mb-6 text-sm text-zinc-400">/project</div>
                                <ul className="mb-6 space-y-3">
                                    {plan.features.map((item, idx) => {
                                        const isString = typeof item === 'string';
                                        const label = isString ? item : item[0];
                                        const isAvailable = isString ? true : item[1];

                                        return (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-white">
                                                {isAvailable ? <Check className="h-4 w-4 text-green-500" /> : <X className="h-4 w-4 text-red-500" />}
                                                <span className={isAvailable ? '' : 'text-zinc-500 line-through'}>{label}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <Button
                                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-purple-700' : 'bg-zinc-800 hover:bg-zinc-700'} text-white`}
                                >
                                    {plan.cta}
                                </Button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* What's Included */}
                <section className="mx-auto max-w-4xl px-6 py-20">
                    <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">What’s Included</h2>
                    <ul className="grid grid-cols-1 gap-6 text-lg sm:grid-cols-2">
                        <li>
                            <Check className="mr-2 inline h-5 w-5 text-green-500" /> Custom design to generate leads
                        </li>
                        <li>
                            <Check className="mr-2 inline h-5 w-5 text-green-500" /> Mobile responsive + fast
                        </li>
                        <li>
                            <Check className="mr-2 inline h-5 w-5 text-green-500" /> WhatsApp/email automation setup
                        </li>
                        <li>
                            <Check className="mr-2 inline h-5 w-5 text-green-500" /> CRM integration
                        </li>
                        <li>
                            <Check className="mr-2 inline h-5 w-5 text-green-500" /> Basic SEO setup
                        </li>
                        <li>
                            <Check className="mr-2 inline h-5 w-5 text-green-500" /> 30-day post-launch support
                        </li>
                    </ul>
                </section>

                {/* Comparison Table */}
                <section className="overflow-x-auto bg-gray-100 px-6 py-20 dark:bg-gray-900">
                    <div className="mx-auto max-w-6xl">
                        <h3 className="mb-6 text-2xl font-bold">Compare Plans</h3>
                        <table className="w-full border-collapse border border-zinc-200 text-sm md:text-base dark:border-gray-800">
                            <thead>
                                <tr className="bg-primary text-white dark:bg-gray-950">
                                    <th className="p-3 text-left">Feature</th>
                                    <th className="p-3 text-center">Starter</th>
                                    <th className="p-3 text-center">Growth</th>
                                    <th className="p-3 text-center">Scale</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['Lead Capture Forms', true, true, true],
                                    ['Automated Replies', false, true, true],
                                    ['WhatsApp Integration', false, true, true],
                                    ['Landing Page Funnel', false, false, true],
                                    ['Custom Copywriting', false, true, true],
                                    ['Revisions', '1', '2', 'Unlimited'],
                                ].map(([feature, s, g, sc], i) => (
                                    <tr key={i} className="border-t border-zinc-200 dark:border-gray-800">
                                        <td className="p-3 font-medium">{feature}</td>
                                        {[s, g, sc].map((val, j) => (
                                            <td key={j} className="p-3 text-center">
                                                {val === true ? (
                                                    <Check className="inline h-4 w-4 text-green-500" />
                                                ) : val === false ? (
                                                    <X className="inline h-4 w-4 text-red-500" />
                                                ) : (
                                                    val
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-20 text-center text-white">
                    <div className="relative z-10">
                        <h2 className="mb-6 text-3xl font-extrabold md:text-5xl">Not sure what plan fits? Let’s talk.</h2>
                        <p className="mb-6 text-lg">Book a free 15 min audit and we’ll recommend the best path for your business.</p>
                        <a
                            href="/audit"
                            className="bg-primary inline-block rounded-sm px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-600 hover:shadow-xl"
                        >
                            Get My Audit
                        </a>
                    </div>
                    <div className="absolute top-0 left-1/2 z-0 -translate-x-1/2 transform opacity-20 blur-3xl">
                        <div className="bg-primary h-[600px] w-full md:w-[600px] animate-pulse rounded-full mix-blend-lighten" />
                    </div>
                </section>
            </div>
        </GuestLayout>
    );
}
