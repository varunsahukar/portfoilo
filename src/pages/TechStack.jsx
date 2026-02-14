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

export default function TechStack() {
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
    <section id="skills" className="py-20 overflow-hidden bg-black/20">
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold text-center opacity-80">Tech Stack</h2>
      </div>
      
      <div className="relative">
        <LogoLoop 
          logos={techLogos} 
          speed={60} 
          direction="left" 
          logoHeight={50} 
          gap={80} 
          hoverSpeed={0} 
          scaleOnHover 
          fadeOut 
          fadeOutColor="#000000" 
          ariaLabel="Technology partners" 
        />
      </div>

      <div className="mt-8 relative">
        <LogoLoop 
          logos={[...techLogos].reverse()} 
          speed={40} 
          direction="right" 
          logoHeight={50} 
          gap={80} 
          hoverSpeed={0} 
          scaleOnHover 
          fadeOut 
          fadeOutColor="#000000" 
          ariaLabel="Technology partners reverse" 
        />
      </div>
    </section>
  );
}
