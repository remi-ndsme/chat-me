import Footer from "./komponen/Footer";
import Header from "./komponen/Header";

export default function Page() {
  return (
    // Container utama dengan font mono dan background gelap total
    <div className="relative min-h-screen font-mono selection:bg-white selection:text-black antialiased overflow-hidden">

      <Header />

      {/* Main Content */}
      <main className="container flex flex-col justify-center min-h-screen px-6 md:px-20 max-w-7xl mx-auto">
        <div className="space-y-12">
          {/* Typography Hero */}
          <h1 className="text-5xl md:text-[6.5rem] font-medium leading-[0.85] tracking-[-0.05em] uppercase italic">
            I&apos;m cool, <br />
            <span className="not-italic">but I </span>
            <span className="relative inline-block not-italic">
              want
              {/* Efek coretan/glitch horizontal */}
              <span className="absolute inset-0 flex items-center">
                <span className="w-full h-[3px] bg-white/90 mt-2 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></span>
              </span>
            </span>
            <span className="not-italic text-[0.8em]"> to: be better</span>
          </h1>

          {/* Deskripsi Kecil (Grid System) */}
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-start-6 md:col-span-4 lg:col-start-5 lg:col-span-3">
              <p className="text-[11px] md:text-[12px] leading-relaxed text-gray-500 font-light border-l border-gray-800 pl-4">
                The text about <span className="bg-foreground">the fact that we got to bots,</span>
                and not just bots, but synthetic crypto-currency
                traders on artificial intelligence can do.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}