import Header from "../komponen/Header";

export default function BaseSystem() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pt-20 gap-10 px-24">
            <Header />
            <div className="relative font-mono selection:bg-white selection:text-black antialiased ">
                <h1 className="text-5xl md:text-[6.5rem] font-medium leading-[0.85] tracking-[-0.05em] uppercase italic">
                    Base System
                </h1>
                <p className="text-[11px] md:text-[12px] leading-relaxed text-gray-500 font-light border-l border-gray-800 pl-4">
                    The text about <span className="bg-foreground">the fact that we got to bots,</span>
                    and not just bots, but synthetic crypto-currency
                    traders on artificial intelligence can do.
                </p>
                <h2 className="pt-8 text-2xl md:text-[1.5rem] font-medium leading-[0.85] tracking-[-0.05em] uppercase italic">
                    Google Gemini
                </h2>
                <p className="text-[11px] md:text-[12px] leading-relaxed text-gray-500 font-light border-l border-gray-800 pl-4">
                    google gemini pro is a <span className="bg-foreground">large language model</span> that can be used as the base engine for our synthetic crypto-currency traders. It has the ability to understand and generate human-like text, making it ideal for creating intelligent trading bots that can analyze market trends and make informed decisions. With Google Gemini Pro, we can build a robust and efficient trading system that can adapt to changing market conditions and maximize profits.
                </p>
                <h2 className="pt-10 text-2xl md:text-[1.5rem] font-medium leading-[0.85] tracking-[-0.05em] uppercase italic">
                    Next.js 14
                </h2>
                <p className="text-[11px] md:text-[12px] leading-relaxed text-gray-500 font-light border-l border-gray-800 pl-4">
                    Next.js 14 is a powerful <span className="bg-foreground">framework javascript</span> that provides a seamless development experience for building modern web applications. It offers features like server-side rendering, static site generation, and API routes that make it ideal for creating scalable and performant applications.
                </p>
                <h2 className="pt-10 text-2xl md:text-[1.5rem] font-medium leading-[0.85] tracking-[-0.05em] uppercase italic">
                   Tailwind CSS
                </h2>
                <p className="text-[11px] md:text-[12px] leading-relaxed text-gray-500 font-light border-l border-gray-800 pl-4">
                    Tailwind CSS is a <span className="bg-foreground">utility-first CSS framework</span> that allows developers to rapidly build custom user interfaces. It provides a wide range of pre-defined classes that can be easily combined to create unique and responsive designs. With Tailwind CSS, we can quickly style our application and ensure a consistent look and feel across all pages.
                </p>
            </div>
        </main>
    );
}
