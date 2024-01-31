import Link from "next/link";
import PopularLands from "../../components/PopularLands";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      <main className=" min-h-screen  p-24">
        <h1 className="border-b shadow-sm text-gray-500 mb-4">
          Popular Wonderland
        </h1>

        <Suspense fallback={<Loading />}>
          <PopularLands />
        </Suspense>

        
        <Link
          key="lands"
          href="/lands"
          className="flex h-[48px] grow items-center  justify-center text-center mt-8  rounded-md  p-3 text-sm font-medium  hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        >
          See all Skater Wonderlands
        </Link>
        <Link
          key="users"
          href="/users"
          className="flex h-[48px] grow items-center justify-center mt-8 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 "
        >
          See all the users
        </Link>
      </main>
    </>
  );
}
