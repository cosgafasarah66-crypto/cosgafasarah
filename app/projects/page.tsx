export const metadata = { title: "My Work | Sarah" };

const myWork = [
  { slug: "todo-app", title: "To-Do App", summary: "A simple list to track daily tasks." },
  { slug: "weather-widget", title: "Weather Widget", summary: "Shows the forecast for a chosen city." },
  { slug: "recipe-book", title: "Recipe Book", summary: "A collection of my favorite recipes." },
];

export default function Projects() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-10">
      <h1 className="mb-6 text-3xl font-bold">My Projects</h1>
      <ul className="space-y-4">
        {myWork.map((item) => (
          <li key={item.slug} className="rounded-lg border p-4 shadow-sm">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-600">{item.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}