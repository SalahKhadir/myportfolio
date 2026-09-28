import { profile } from "@/resources/content";

const renderParagraph = (text: string) => {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <span key={i} className="text-accent font-medium">
          {part.slice(1, -1)}
        </span>
      );
    }
    return part;
  });
};

export default function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
      <div className="text-center mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
          SOFTWARE & DEVOPS ENGINEER
        </p>
        <h2 className="text-[clamp(48px,8vw,100px)] font-accent uppercase tracking-tight leading-[0.85] text-black dark:text-white mb-6">
          ABOUT ME
        </h2>
        <p className="font-light text-gray-500 max-w-lg mx-auto">
          Bridging the gap between robust backend engineering and zero-trust DevOps infrastructure.
        </p>
      </div>
      
      <div className="w-full space-y-6 text-left">
        {profile.aboutParagraphs.map((paragraph, idx) => (
          <p key={idx} className="text-gray-600 dark:text-gray-300 font-light text-lg md:text-xl leading-relaxed">
            {renderParagraph(paragraph)}
          </p>
        ))}
      </div>
    </div>
  );
}
