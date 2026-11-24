import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello, I am Sarah</h1>
      <p>I am an IT student.</p>
      <Link href="/projects">See my projects</Link>
    </main>
  );
}