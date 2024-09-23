import Image from 'next/image';

const Team = () => {
  return (
    <div className="px-4 py-8">
      <h2  id="members" className="text-[48px] text-center font-josefinsans font-bold text-custom-blue text-blue-800 mb-4">
        Our Team
      </h2>
      <div className="flex justify-center mb-8 px-4">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 justify-center">
          <div className="flex flex-col items-center max-w-[300px]">
            <Image
              src="/images/Dorcas.jpg"
              alt="Dorcas"
              width={380}
              height={350}
              className="rounded-[20px]"
            />
            <p className="text-[24px] mt-4 font-josefinsans">Dorcas Tuukuo</p>
          </div>

          <div className="flex flex-col items-center max-w-[300px]">
            <Image
              src="/images/Nyokabi.png"
              alt="Esther"
              width={380}
              height={350}
              className="rounded-[20px]"
            />
            <p className="text-[24px] mt-4 font-josefinsans">Esther Nyokabi</p>
          </div>

          <div className="flex flex-col items-center max-w-[300px]">
            <Image
              src="/images/Nyambura.jpg"
              alt="Margaret"
              width={380}
              height={350}
              className="rounded-[20px]"
            />
            <p className="text-[24px] mt-4 font-josefinsans">Margaret Nyambura</p>
          </div>

          <div className="flex flex-col items-center max-w-[300px]">
            <Image
              src="/images/24.07.24-219 (1).jpg"
              alt="Teresiah"
              width={380}
              height={350}
              className="rounded-[20px]"
            />
            <p className="text-[24px] mt-4 font-josefinsans">Teresiah Wangui</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
