import PaperCard from '../components/ui/PaperCard';
import { 
  SiReact, 
  SiNodedotjs, 
  SiFirebase, 
  SiVuedotjs, 
  SiD3Dotjs, 
  SiPython 
} from 'react-icons/si';

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-scale online store with secure payments, real-time inventory tracking, and an intuitive admin dashboard.",
      icon: SiReact,
      rotation: -2
    },
    {
      title: "Task Management App",
      description: "Collaborative tool for teams to manage projects, track time, and automate workflows with ease.",
      icon: SiVuedotjs,
      rotation: 1.5
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization platform processing millions of data points for actionable business insights.",
      icon: SiD3Dotjs,
      rotation: -1
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto min-h-screen">
      <h2 className="text-4xl font-bold mb-16 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <PaperCard 
            key={index}
            title={project.title}
            description={project.description}
            icon={project.icon}
            rotation={project.rotation}
          />
        ))}
      </div>
    </section>
  )
}
