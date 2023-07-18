import Image from "next/image";
import { Inter } from "next/font/google";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Gallery from "@/components/Gallery";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user, error, isLoading } = useUser();
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    const fetchObjects = async () => {
      try {
        const response = await fetch("/api/listObjects");
        const data = await response.json();
        setObjects(data.objects);
      } catch (error) {
        console.error("Error fetching objects:", error);
      }
    };

    fetchObjects();
  }, []);

  return (
    <div className="relative">
      <Gallery objects={objects}/>
      {!user && <div className="h-full w-full bg-black opacity-[0.9]  font-serif absolute top-0 left-0 flex items-center flex-col pt-60 text-white">
        <h1 className="text-5xl">Seems like you're not logged In</h1>
       <Link href="/api/auth/login" className="bg-blue-500 p-2 w-28 opacity-100 font-mono text-center rounded-sm text-xl mt-10"> Login</Link>
      </div>}
    </div>
  );
}
