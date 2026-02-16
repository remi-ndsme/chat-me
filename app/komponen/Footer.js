
export default function Footer() {
    return (
        < footer className="fixed bottom-0 left-0 w-full px-6 pb-1 md:px-10 md:pb-2 flex justify-between items-end z-50 pointer-events-none" >
            <div className="flex flex-col space-y-1 pointer-events-auto text-[10px] uppercase tracking-widest text-gray-400">
                <a href="/basesystem" className="hover:text-white hover:line-through transition-all cursor-crosshair text-left">Base system</a>
                <a href="/teamlookup" className="hover:text-white hover:line-through transition-all cursor-crosshair text-left">Team lookup</a>
                <a href="/contact" className="hover:text-white hover:line-through transition-all cursor-crosshair text-left">Contacts</a>
            </div>

            <div className="pointer-events-auto text-[10px] opacity-40 hidden md:block tracking-[0.3em]">
                ↓
            </div>
            <div className="pointer-events-auto text-[8px] md:text-[8px] opacity-30 px-4 pb-2 tracking-widest flex justify-between">
                <span>© Faisal Ahmad 2026</span>
            </div>

            <a href="/chat" className="pointer-events-auto cursor-pointer text-[20px] uppercase tracking-[0.2em] border-b border-transparent hover:border-white transition-all">
                Chat |
            </a>
        </footer >
    );
}