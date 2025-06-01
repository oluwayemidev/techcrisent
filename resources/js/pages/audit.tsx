import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import GuestLayout from '@/layouts/guest-layout';
import type { PageProps } from '@/types';
import { useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function AuditPage() {
    const pageProps = usePage<PageProps>();
    const { props } = pageProps;

    useEffect(() => {
        if (props.flash?.success) {
            toast('Success!', {
                description: props.flash.success,
            });
        }
    }, [props.flash]);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        website: '',
        struggle: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('audit.store'), {
            onSuccess: () => {
                toast.success('Audit request submitted successfully.');
                reset();
            },
            onError: () => {
                toast.error('Submission failed. Please try again.');
            },
        });
    };

    return (
        <>
            <GuestLayout title={pageProps.props.title || 'Free Homepage Audit'}>
                <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-12 text-white">
                    <div className="mb-12 max-w-3xl text-center">
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Claim Your Free Homepage Audit</h1>
                        <p className="text-lg text-gray-300">
                            Discover what’s preventing your site from converting visitors into clients — and how to fix it.
                        </p>
                    </div>

                    <Card className="w-full max-w-xl border-slate-700 bg-slate-800 text-white">
                        <CardContent className="relative z-1 space-y-6 p-6">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} placeholder="John Doe" />
                                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                                </div>

                                <div>
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="you@example.com"
                                    />
                                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                                </div>

                                <div>
                                    <Label htmlFor="website">Website URL</Label>
                                    <Input
                                        id="website"
                                        type="url"
                                        value={data.website}
                                        onChange={(e) => setData('website', e.target.value)}
                                        placeholder="https://yourwebsite.com"
                                    />
                                    {errors.website && <p className="mt-1 text-sm text-red-500">{errors.website}</p>}
                                </div>

                                <div>
                                    <Label htmlFor="struggle">Biggest Struggle</Label>
                                    <Textarea
                                        id="struggle"
                                        rows={4}
                                        value={data.struggle}
                                        onChange={(e) => setData('struggle', e.target.value)}
                                        placeholder="Tell us what's been holding your site back..."
                                    />
                                </div>

                                <Button type="submit" disabled={processing} className="bg-primary w-full text-lg text-white">
                                    {processing ? 'Submitting...' : 'Request My Free Audit'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                    <div className="absolute top-0 left-1/2 z-0 -translate-x-1/2 transform opacity-20 blur-3xl">
                        <div className="bg-primary h-[600px] w-[600px] animate-pulse rounded-full mix-blend-lighten" />
                    </div>
                </div>
            </GuestLayout>
        </>
    );
}
