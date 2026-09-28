import Navbar from "@/components/Navbar";
import FadeInView from "@/components/FadeInView";
import AboutSection from "@/components/AboutSection";

export const metadata = {
  title: "About | Salah Khadir",
  description: "About the engineer behind the systems.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-48 pb-24 px-6 max-w-[90rem] mx-auto w-full min-h-[80vh]">
        <FadeInView className="mb-32">
          <AboutSection showCvDownload={true} />
        </FadeInView>
      </main>
    </>
  );
}
