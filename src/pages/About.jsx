import ScrollRevealParagraph from '../components/animations/ScrollRevealParagraph';

export default function About() {
  const bioPara1 = "I’m a software developer focused on building reliable, scalable, and well-structured applications. My journey into tech began with curiosity about how systems work behind the scenes, which naturally led me into web development. I’m particularly drawn to backend engineering — designing APIs, working with databases, and thinking deeply about system architecture.";
  
  const bioPara2 = "I enjoy building backend services using Python and FastAPI, and working with relational databases like PostgreSQL. At the same time, I value clean user interfaces and responsive design, creating intuitive experiences with modern frontend tools with React, Tailwind CSS & TypeScript.";

  return (
    <section id="about" className="relative py-20 px-4 max-w-5xl mx-auto min-h-screen flex flex-col justify-center items-center text-center">
      <h2 className="text-6xl font-bold mb-20">In Brief</h2>
      <div className="relative z-10 text-white/70 space-y-16 leading-relaxed max-w-4xl">
        <ScrollRevealParagraph
          paragraph={bioPara1}
          className="text-3xl text-white/70"
        />

        <ScrollRevealParagraph
          paragraph={bioPara2}
          className="text-3xl text-white/70"
        />
      </div>
      
    </section>
  )
}
