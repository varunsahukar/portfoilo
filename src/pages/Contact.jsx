export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto min-h-screen flex flex-col items-center justify-center text-center">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Let's work together</h2>
      <p className="text-white/60 mb-10 text-lg max-w-lg">
        Have a project in mind? Reach out and let's build something amazing.
      </p>
      <a 
        href="mailto:varunsahukar9798@gmail.com" 
        className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-900/20"
      >
        Say Hello
      </a>
    </section>
  )
}
