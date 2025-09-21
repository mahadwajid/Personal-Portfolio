import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-400 mb-8">My Projects</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Portfolio Website"
          description="A personal portfolio built with Next.js and Tailwind CSS."
          imageUrl="/images/portfolio.png"
          link="https://your-portfolio-link.com"
        />
        
        <ProjectCard
          title="AI Chatbot"
          description="An AI-powered chatbot built with Python and Next.js frontend."
          imageUrl="/images/chatbot.png"
          link="https://github.com/username/chatbot"
        />

        <ProjectCard
          title="E-commerce Store"
          description="Full-stack MERN e-commerce app with Stripe payments."
          imageUrl="/images/ecommerce.png"
          link="https://myecommerce.com"
        />
      </div>
    </main>
  );
}
