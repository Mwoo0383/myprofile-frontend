import { fetchProjectsServer } from "@/lib/api.server";
import ProjectsClient from "./ProjectsClient";

export default async function ProjectsPage() {
  const projects = await fetchProjectsServer();

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24 }}>
        Projects
      </h1>

      <ProjectsClient projects={projects} />
    </main>
  );
}