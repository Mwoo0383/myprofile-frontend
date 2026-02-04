import { fetchProjects } from "@/lib/api";
import { Project } from "@/types/project";
import ProjectCard from "@/components/ProjectCard";

export default async function ProjectsPage() {
  const projects: Project[] = await fetchProjects();

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