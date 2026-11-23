export const metadata = {
    title: "Projects | My Site",
}

const projects = [
    { id: 1, name: "Portfolio" },
    { id: 2, name: "Todo App" },
    { id: 2, name: "Weather App" },
];

export default function ProjectsPage() {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold">Projects</h1>
        <ul>
          {projects.map((p) => (
            <li key={p.id}>{p.name}</li>
          ))}
        </ul>
      </main>
    );
}