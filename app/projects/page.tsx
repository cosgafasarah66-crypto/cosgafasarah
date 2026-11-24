export const metadata = { title: "Projects | Sarah" };

const projects = [
  { id: 1, name: "Project one", description: "One sentence." },
  { id: 2, name: "Project two", description: "One sentence." },
  { id: 3, name: "Project three", description: "One sentence." },
];

export default function ProjectsPage() {
  return (
    <main>
      <h1>Projects</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </main>
  );
}