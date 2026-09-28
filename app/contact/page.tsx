import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import FadeInView from "@/components/FadeInView";

export const metadata = {
  title: "Contact | Salah Khadir",
  description: "Initialize discovery and deploy an inquiry.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 w-full min-h-screen flex flex-col items-center justify-center bg-[radial-gradient(#e8e8e8_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]">
        <FadeInView className="w-full max-w-[90rem] mx-auto" delay={0.2}>
          <ContactForm />
        </FadeInView>
      </main>
    </>
  );
}
