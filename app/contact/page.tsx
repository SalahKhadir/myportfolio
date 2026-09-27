import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Salah Khadir",
  description: "Initialize discovery and deploy an inquiry.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 max-w-[90rem] mx-auto w-full min-h-screen flex flex-col items-center justify-center">
        <header className="mb-16 text-center">
          <h1 className="heading mb-6">INITIALIZE DISCOVERY</h1>
          <p className="font-mono text-gray-500 uppercase tracking-widest text-sm max-w-2xl mx-auto">
            ESTABLISH SECURE CONNECTION OR DEPLOY AN INQUIRY.
          </p>
        </header>

        <div className="w-full">
          <ContactForm />
        </div>
      </main>
    </>
  );
}
