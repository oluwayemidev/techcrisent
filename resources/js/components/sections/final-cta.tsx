const FinalCTA = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-20 text-center text-white" id="pricing">
            <div className="relative z-10 mx-auto max-w-4xl">
                <h2 className="mb-6 text-4xl leading-tight font-extrabold md:text-5xl">
                    Book your <span className="text-primary">free website audit</span> today
                </h2>
                <p className="mb-8 text-lg text-gray-300 md:text-xl">
                    See exactly what’s holding your business back from daily leads. Let’s fix it together.
                </p>
                <a
                    href="/audit"
                    className="inline-block rounded-sm bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-600 hover:shadow-xl"
                >
                    Get My Audit
                </a>
            </div>

            {/* Optional 3D or Glow Background Effect */}
            <div className="absolute top-0 left-1/2 z-0 -translate-x-1/2 transform opacity-20 blur-3xl">
                <div className="h-[600px] w-full md:w-[600px] animate-pulse rounded-full bg-primary mix-blend-lighten" />
            </div>
        </section>
    );
};

export default FinalCTA;
