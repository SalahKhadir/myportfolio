import Navbar from "@/components/Navbar";
import FadeInView from "@/components/FadeInView";
import { experience, education, certifications } from "@/resources/content";

export const metadata = {
  title: "Experience | Salah Khadir",
  description: "Career timeline, education, and certifications.",
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 max-w-[90rem] mx-auto w-full">
        <FadeInView delay={0.2}>
          <header className="mb-24 border-b border-gray-alt/10 pb-12">
            <h1 className="heading mb-6">EXPERIENCE</h1>
            <p className="font-mono text-gray-500 uppercase tracking-widest text-sm max-w-2xl">
              CAREER TIMELINE, ACADEMIC BACKGROUND, AND OFFICIAL CERTIFICATIONS.
            </p>
          </header>
        </FadeInView>

        {/* Experience Timeline */}
        <FadeInView className="mb-32">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-accent uppercase tracking-tight mb-2">CAREER TIMELINE</h2>
          </div>

          <div className="relative border-l border-gray-alt/30 ml-4 md:ml-6 space-y-20">
            {experience.map((job, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-accent rounded-full outline outline-4 outline-white dark:outline-[#0a0a0a]"></div>
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-3">
                  <h3 className="text-2xl font-bold dark:text-white">{job.role}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500 bg-gray-alt/10 px-2 py-1 rounded">
                    {job.period}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest mb-6">
                  <span className="text-accent font-bold">{job.company}</span>
                  <span className="text-gray-alt">/</span>
                  <span className="text-gray-500">{job.location}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-6 max-w-3xl">
                  {job.summary}
                </p>

                <ul className="space-y-3 mb-8 max-w-3xl">
                  {job.metrics.map((metric, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></span>
                      <span className="text-sm font-mono text-gray-600 dark:text-gray-400">{metric}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 font-mono text-[9px] uppercase tracking-widest rounded-full border border-gray-alt/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeInView>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Certifications */}
          <FadeInView>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-accent uppercase tracking-tight mb-2">CERTIFICATIONS</h2>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="border border-gray-alt/20 bg-gray-50/50 dark:bg-white/5 p-8 rounded-xl hover:border-accent/50 transition-colors group">
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">{cert.type}</span>
                    <span className="font-mono text-[10px] bg-accent text-white px-2 py-1 rounded font-bold uppercase tracking-widest">{cert.code}</span>
                  </div>
                  <h3 className="text-xl font-bold dark:text-white mb-2">{cert.title}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">ISSUER: <span className="text-gray-800 dark:text-gray-200">{cert.issuer}</span></p>
                </div>
              ))}
            </div>
          </FadeInView>

          {/* Education */}
          <FadeInView>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-accent uppercase tracking-tight mb-2">EDUCATION</h2>
            </div>
            
            <div className="space-y-12">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-gray-alt/20 hover:border-accent transition-colors">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500 block mb-3">{edu.period}</span>
                  <h3 className="text-xl font-bold dark:text-white mb-2 leading-tight">{edu.degree}</h3>
                  <p className="text-accent text-sm mb-4 font-medium">{edu.specialization}</p>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-gray-500 space-y-1">
                    <span className="block text-gray-700 dark:text-gray-300 font-bold">{edu.school}</span>
                    <span className="block">{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </main>
    </>
  );
}
