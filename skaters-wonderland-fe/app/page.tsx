
import Link from "next/link";
import PopularLands from "../components/PopularLands";

export default function Home() {
  return (
    <>
    <main className=" min-h-screen  p-24">
      <h1 className="border-b shadow-sm text-gray-500 mb-4">Popular Wonderland</h1>

      <PopularLands />

      <Link href="/lands">See all Skater Wonderlands</Link>
      <Link href="/users">See all the users</Link>
      <h2>Happy skating</h2>
    </main>
    </>
  );
}
 