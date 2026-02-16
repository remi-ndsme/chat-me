'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  // Cek apakah user sedang di halaman home
  const isHomePage = pathname === '/';

  return (
    <header className="fixed bg-background/10 backdrop-blur-sm top-0 left-0 w-full px-6 py-3 md:px-10 md:py-4 flex justify-between items-start z-50 pointer-events-none">
      <div className="pointer-events-auto cursor-pointer tracking-tighter text-sm">
        +<span className="opacity-50">_</span>+
      </div>
      
      <div className="pointer-events-auto cursor-pointer text-[10px] opacity-40 hover:opacity-100 transition-opacity">
        {pathname === '/chat' ? 'Chat Mode' : '↑'}
      </div>

      {/* Logika Kondisional Share / Back */}
      <div 
        onClick={() => !isHomePage ? router.back() : null}
        className="pointer-events-auto cursor-pointer text-[10px] uppercase tracking-[0.3em] font-light hover:line-through transition-all"
      >
        {isHomePage ? 'Share' : 'Back'}
      </div>
    </header>
  );
}