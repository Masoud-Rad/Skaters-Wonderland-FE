
import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen  p-24">
      <h1 className="border-b shadow-sm text-gray-500 mb-4">Popular Wonderland</h1>

      <div className="grid lg:grid-cols-3 gap-6">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
  <div>Column 4</div>
</div>

      <Link href="/lands">See all Skater Wonderlands</Link>
      <Link href="/users">See all the users</Link>
      <h2>Happy skating</h2>
    </main>
  );
}
 