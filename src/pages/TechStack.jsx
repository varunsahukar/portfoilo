import LogoLoop from '../components/ui/LogoLoop';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiGit, 
  SiGithub, 
  SiFastapi, 
  SiPostgresql,
  SiNodedotjs,
  SiPython
} from 'react-icons/si';

export default function TechStack({ isDark }) {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
    { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
    { node: <SiFastapi />, title: "FastAPI", href: "https://fastapi.tiangolo.com" },
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  ];

  return (
    <section id="skills" className={`py-24 overflow-hidden ${isDark ? 'bg-black/20' : 'bg-white/20'}`}>
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className={`text-5xl md:text-8xl font-black text-center tracking-tighter uppercase bg-gradient-to-b ${isDark ? 'from-white to-white/40' : 'from-black to-black/40'} bg-clip-text text-transparent`}>
          Tech Stack
        </h2>
      </div>
      <div className="relative">
        <LogoLoop
          logos={techLogos}
          speed={55}
          direction="left"
          logoHeight={56}
          gap={72}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor={isDark ? "#000000" : "#f5f5f0"}
          ariaLabel="Technology stack"
        />
      </div>
    </section>
  );
}
