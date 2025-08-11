import Image from "next/image";
import Footer from "../components/shared/footer";
import Navbar from "../components/shared/navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <main className="flex flex-col items-center justify-center flex-grow text-center pt-24">
        {/* Top Shape */}
        <div className="mb-4">
          <Image src="/top.png" alt="top shape" width={150} height={150} />
        </div>

        {/* Title */}
        <h1 className="text-[48px] font-bold text-[#0b2d64] mb-6">
          Vintage Creator<sup className="text-[12px]">®</sup>
        </h1>

        {/* Bottom Shape */}
        <Image src="/bottom.png" alt="bottom shape" width={200} height={200} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
