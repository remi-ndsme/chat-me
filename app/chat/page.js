'use client';

import { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import Header from "../komponen/Header";
import ReactMarkdown from 'react-markdown';

// Gunakan model dengan alias 'latest' untuk stabilitas
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-flash-lite-latest' });

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const savedChat = localStorage.getItem('chat_history');
    if (savedChat) {
      setMessages(JSON.parse(savedChat));
    } else {
      setMessages([{ role: 'system', text: 'Ask me anything. I`ll answer anything.' }]);
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('chat_history', JSON.stringify(messages));
    }
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isMounted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setMessages((prev) => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setIsLoading(true);

    try {
      const result = await model.generateContent(userText);
      const response = await result.response;
      const fullText = response.text();

      // --- LOGIKA ANIMASI MENGETIK ---
      // 1. Tambahkan pesan system kosong dulu
      setMessages((prev) => [...prev, { role: 'system', text: '' }]);

      let currentText = '';
      const textArray = fullText.split(''); // Pecah jadi karakter

      // 2. Interval untuk mengisi teks karakter demi karakter
      textArray.forEach((char, index) => {
        setTimeout(() => {
          currentText += char;
          setMessages((prev) => {
            const newMsgs = [...prev];
            // Update pesan terakhir (pesan system yang baru saja dibuat)
            newMsgs[newMsgs.length - 1] = { role: 'system', text: currentText };
            return newMsgs;
          });
        }, index * 5); // Kecepatan mengetik (15ms per karakter)
      });

    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages((prev) => [...prev, { role: 'system', text: `ERROR: ${error.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isMounted) return null;

  return (
    <div className="relative min-h-screen font-mono selection:invert antialiased overflow-hidden transition duration-500">
      <Header />
      <main className="flex flex-col h-[100dvh] max-w-7xl mx-auto px-6">

        {/* Chat History Area */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto pt-25 pb-15 no-scrollbar scroll-smooth"
        >
          {/* Gunakan min-h-full agar justify-end bekerja hanya saat konten sedikit */}
          <div className="flex flex-col justify-end min-h-full space-y-10 w-full">
            {messages.map((msg, index) => (
              <div key={index} className={`flex flex-col space-y-1 max-w-[80%] ${msg.role === 'user' ? 'ml-auto items-end text-right' : 'items-start'}`}>
                <span className="text-[10px] tracking-[0.2em] opacity-50 uppercase">[{msg.role}]</span>
                <div className={`text-sm p-1 leading-relaxed ${msg.role === 'user' ? 'italic text-foreground' : ''}`}>
                  {msg.role === 'system' ? (
                    <div className="prose prose-invert max-w-none text-sm prose-p:leading-relaxed">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
            {isLoading && <div className="text-[10px] pb-4 animate-pulse uppercase opacity-50">Processing_Sequence...</div>}
          </div>
        </div>

        {/* Input Area */}
        <div className="fixed bg-black bottom-0 left-0 w-full z-50 pointer-events-none">
          <form onSubmit={handleSubmit} className="w-full max-w-7xl mx-auto pointer-events-auto flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isLoading ? "WAITING..." : "TYPE_HERE..."}
              disabled={isLoading}
              className="w-full text-white bg-transparent p-4 text-xs md:text-sm focus:outline-none tracking-[0.2em] placeholder:opacity-50"
            />
            <button
              type="button"
              onClick={() => { localStorage.removeItem('chat_history'); window.location.reload(); }}
              className="text-white text-[10px] px-4 opacity-50 hover:opacity-100 transition-opacity"
            >
              [X]
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className={`text-white text-[10px] tracking-[0.3em] mx-2 px-6 py-3 border-l transition-all hover:bg-indigo-950 ${isLoading ? 'opacity-20' : 'hover:italic'} ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {isLoading ? '...' : 'Send_'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}