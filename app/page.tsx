import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 text-center">
      <h1 className="mb-4 text-4xl font-bold">Hi, I'm Sarah</h1>
      <p className="mb-8 text-lg text-gray-700">
        Welcome to my personal site. Here you can learn about me and
        see the things I have built.
      </p>
      <Link
        href="/projects"
        className="rounded bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
      >
        View my work
      </Link>
    </section>
  );
}