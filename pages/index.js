import Image from "next/image";
import { Inter } from "next/font/google";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user, error, isLoading } = useUser();
  const [objects, setObjects] = useState([]);
  const [view, setView] = useState('s3');
  const driveObjects = ["1f5gqwqFSJHGh9hIGSLCSL0z1W8GYQzQI", "1IxljFOOfpC9LYMhMi41Yzp9tv4J8CSy-", "1vDP-vOnFv-XvGOQtjsloShqJvZwC3shE", "1HkGRW1AnLuv78zC37L-4OLPFrUvKsK7j", "1p2ib0pCM5xXkjZtA70zjFsIGHlwVmmNa", "1eWa0m_AsqiteYtqk4H4TPIFjdax8vxOv"];


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
    if (view === 's3')
    fetchObjects();
  }, [view]);

  return (
    <div className="relative">
      <Navbar/>
      <div className="mt-10 flex justify-center">
        <div className="flex justify-between rounded-xl text-xl font-bold  w-80" style={{border:"2px solid black"}}>
          <button onClick={() => setView('s3')} className={`flex-1 ${view === "s3" ? "bg-blue-500 text-white rounded-xl" : null}`}>S3</button>
          <button onClick={() => setView('drive')} className={`flex-1 ${view === "drive" ? "bg-blue-500 text-white rounded-xl" : null}`}>Drive</button>
        </div>
      </div>
      <Gallery objects={view === 's3' ? objects : driveObjects} base={view==='s3' ? 'https://testbucketfp.s3.ap-south-1.amazonaws.com/' : 'https://drive.google.com/uc?id='}/>
      {!user && <div className="h-full w-full bg-black opacity-[0.9]  font-serif absolute top-0 left-0 flex items-center flex-col pt-60 text-white">
        <h1 className="text-5xl">Seems like you're not logged In</h1>
       <Link href="/api/auth/login" className="bg-blue-500 p-2 w-28 opacity-100 font-mono text-center rounded-sm text-xl mt-10"> Login</Link>
      </div>}
    </div>
  );
}
