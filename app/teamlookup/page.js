import Header from "../komponen/Header";

export default function TeamLookup() {
    return (
        <div className="relative min-h-screen font-mono selection:bg-white selection:text-black antialiased overflow-hidden p-24">
            <Header />
            <h1 className="text-5xl md:text-[6.5rem] font-medium leading-[0.85] tracking-[-0.05em] uppercase italic">
                Team Lookup
            </h1>
            <p className="text-[11px] md:text-[12px] leading-relaxed text-gray-500 font-light border-l border-gray-800 pl-4">
                The text about <span className="bg-foreground">the fact that we got to bots,</span>
                and not just bots, but synthetic crypto-currency
                traders on artificial intelligence can do.
            </p>
            <h2 className="text-3xl mt-12 mb-6 font-medium tracking-[0.1em] uppercase">
                Meet the Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-foreground p-6 rounded-lg">
                    <h3 className="text-background text-xl font-semibold mb-2">faisal ahmad</h3>
                    <p className="text-background/80 text-sm">Frontend Developer</p>
                </div>
                <div className="bg-foreground p-6 rounded-lg">
                    <h3 className="text-background text-xl font-semibold mb-2">faisal ahmad</h3>
                    <p className="text-background/80 text-sm">AI Specialist</p>
                </div>
                <div className="bg-foreground p-6 rounded-lg">
                    <h3 className="text-background text-xl font-semibold mb-2">faisal ahmad</h3>
                    <p className="text-background/80 text-sm">Backend Developer</p>
                </div>
            </div>
        </div>
    );
}
