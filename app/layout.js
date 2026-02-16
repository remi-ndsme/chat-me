import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "chat-web",
  description: "A simple chat application built with Next.js 14 and Google Gemini Pro, showcasing the capabilities of large language models in a conversational interface. This project demonstrates how to integrate AI-generated responses into a user-friendly chat experience, allowing users to interact with the model in real-time. With a focus on clean design and seamless functionality, this application serves as a practical example of leveraging cutting-edge AI technology in web development.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
