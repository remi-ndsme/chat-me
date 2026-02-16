import Header from "../komponen/Header";

export default function Contact() {
    return (
        <div className="relative min-h-screen font-mono selection:bg-white selection:text-black antialiased overflow-hidden pt-15 px-24">
            <Header />
            <h1 className="text-5xl md:text-[6.5rem] font-medium leading-[0.85] tracking-[-0.05em] uppercase italic">
                Contact Us
            </h1>
            <p className="text-[11px] md:text-[12px] leading-relaxed text-gray-500 font-light border-l border-gray-800 pl-4">
                For inquiries, please reach out to us at
                <a href="mailto:ahmadfaisal00002@gmail.com" className="text-white underline px-2">Email</a>  or call us at <a href="tel:+6287750694562" className="text-white underline px-2">telepone</a>.
                We look forward to hearing from you!
            </p>

            <div className="flex justify-center items-center mt-2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31585.002610461506!2d113.95117523127256!3d-8.290324521627483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6af7428c1b4f1%3A0xce911ba302b80e1c!2sKalibaru%20Kulon%2C%20Kec.%20Kalibaru%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1771209353371!5m2!1sid!2sid"
                    className="grayscale contrast-[200%] brightness-80 rounded-lg border-0 w-full md:w-[80%] h-[350px]"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                <div className="text-left text-gray-500 text-sm m-4">
                    <span className="bg-foreground">Location:</span> Kalibaru Kulon, Kec. Kalibaru, Kabupaten Banyuwangi, Jawa Timur
                </div>
            </div>
        </div>
    );
}   