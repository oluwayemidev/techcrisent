// components/sections/FAQSection.tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
    {
        question: 'What is a funnel?',
        answer: 'A funnel is a step-by-step process that guides your audience from awareness to action, like booking a call or making a purchase. It’s not just a website—it’s a strategic journey.',
    },
    {
        question: 'How is this different from a website?',
        answer: 'Websites are static and often overwhelming. Funnels are dynamic, focused on conversion, and designed to lead visitors to take specific actions.',
    },
    {
        question: 'How long does it take to build a funnel?',
        answer: 'Typically 2–4 weeks, depending on complexity. We work quickly without sacrificing quality.',
    },
    {
        question: 'How fast can I get results?',
        answer: 'Clients often start seeing leads within 7–14 days after launch. Timelines vary based on your offer and setup speed.',
    },
    {
        question: 'What if it doesn’t work?',
        answer: "We don't believe in fluff. We test, iterate, and optimize your funnel. If something isn't working, we adjust it. Our process is built for results.",
    },
    {
        question: 'How much does it cost?',
        answer: 'We offer flexible packages depending on your needs. Book a free call to get a quote, we don’t do cookie-cutter pricing.',
    },
];

export default function FAQSection() {
    return (
        <section className="bg-gray-200 px-6 py-24 md:px-12 dark:bg-gray-900 text-gray-800 dark:text-gray-400">
            <div className="mx-auto max-w-4xl">
                <h2 className="mb-12 text-center text-3xl font-bold md:text-5xl ">Frequently Asked Questions</h2>

                <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="rounded-sm border border-gray-400 dark:border-gray-950">
                            <AccordionTrigger className="rounded-sm px-6 py-5 font-medium text-gray-800 transition hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-800">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-6 pt-4 text-gray-700 dark:text-gray-400">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
