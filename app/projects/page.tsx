import { fetchProjectsServer } from "@/lib/api.server";
import ProjectsClient from "./ProjectsClient";
import Header from "@/components/Header";

export default async function ProjectsPage() {
  const projects = await fetchProjectsServer();

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
      <Header />
      <ProjectsClient projects={projects} />
    </main>
  );
}