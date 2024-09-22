import Image from "next/image";
export default function FeaturedAcademies() {
  return (
    <main className="px-4 sm:px-8 lg:px-16 ">
      <h1 className="text-center font-bold text-4xl sm:text-4xl lg:text-4xl xl:text-5xl text-blue-800 font-josefinsans mt-5">
        Featured Academies            
      </h1>
      <div className="flex flex-col md:flex-col lg:flex-row mx-4 gap-2.5 sm:mx-16 lg:mx-24 xl:mx-32 2xl:mx-64 sm:flex-col justify-between items-center sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl mt-10 font-josefinsans">
        <div className="flex flex-col items-center mb-4 sm:mb-0 shadow-[8px_8px_20px_0_rgba(0,0,0,0.3)] rounded-lg p-4 border border-gray-300">
          <Image className="mt-4" src="/images/ligi ndogo.jpeg" width={225} height={225} alt="Ligi Ndogo" />
          <h2 className="mt-2 font-bold font-josefinsans">Ligi Ndogo</h2>
          <p className="font-josefinsans">Sports Academy</p>
        </div>
        <div className="flex flex-col items-center mb-4 sm:mb-0 shadow-[8px_8px_20px_0_rgba(0,0,0,0.3)] rounded-lg p-4 border border-gray-300">
          <Image className="mt-4" src="/images/kipaji.jpeg" width={225} height={400} alt="Kipaji" />
          <h2 className="mt-2 font-bold">Kipaji</h2>
          <p>Sports Academy</p>
        </div>
        <div className="flex flex-col items-center mb-4 sm:mb-0 shadow-[8px_8px_20px_0_rgba(0,0,0,0.3)] rounded-lg p-4 border border-gray-300">
          <Image className="mt-4" src="/images/nextGen.png" width={225} height={400} alt="NextGen" />
          <h2 className="mt-2 font-bold">NextGen</h2>
          <p>Sports Academy</p>
        </div>
      </div>
    </main>
  );
}
