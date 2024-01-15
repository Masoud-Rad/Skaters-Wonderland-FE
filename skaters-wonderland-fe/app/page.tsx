import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold underline"> Hello Skaters! </h1>
      <Link href="/lands">See all Skater Wonderlands</Link>
      <Link href="/users">See all the users</Link>
      <h2>Happy skating</h2>
    </main>
  );
}
 