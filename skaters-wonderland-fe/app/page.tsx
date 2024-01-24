
import Link from "next/link";
import PopularLands from "../components/PopularLands";

export default function Home() {
  return (
    <>
    <main className=" min-h-screen  p-24">
      <h1 className="border-b shadow-sm text-gray-500 mb-4">Popular Wonderland</h1>

      <PopularLands />

      <Link key="lands" href="/lands" className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">See all Skater Wonderlands</Link>
      <Link key="users" href="/users"  className="">See all the users</Link>
      <h2>Happy skating</h2>
    </main>
    </>
  );
}
 