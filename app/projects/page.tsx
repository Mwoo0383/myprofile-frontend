import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types/project";
import NotFound from "./[id]/not-found";

  
  async function getProjects(): Promise<Project[]> {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/projects`,
      { cache: "no-store" }
    );
  
    if (!res.ok) {
      NotFound();
    }
  
    return res.json();
  }
  
  export default async function ProjectsPage() {
    const projects = await getProjects();
  
    
    return (
        <main style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
            <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24 }}>
                Projects
            </h1>
    
            <div style={{ display: "grid", gap: 16 }}>
                {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
            </div>
        </main>
    );
}