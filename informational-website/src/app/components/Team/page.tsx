import Image from 'next/image';

const Team = () => {
  return (
    <div id='team'>
    <div id="members" className="px-4 py-8">
      <h2 className="text-[48px] text-center font-josefinSans font-bold text-custom-blue text-blue-800 mb-6">
        Our Team
      </h2>
      <div className="flex justify-center mb-8 px-4">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 justify-center">
          <div className="flex flex-col items-center max-w-[300px]">
            <Image
              src="/images/Tuukuo.jpeg"
              alt="Dorcas"
              width={380}
              height={350}
              className="rounded-[20px]"
            />
            <p className="text-[24px] mt-4 font-josefinSans">Dorcas Tuukuo</p>
          </div>

          <div className="flex flex-col items-center max-w-[300px]">
            <Image
              src="/images/Esther.jpeg"
              alt="Esther"
              width={380}
              height={350}
              className="rounded-[20px]"
            />
            <p className="text-[24px] mt-4 font-josefinSans">Esther Nyokabi</p>
          </div>

          <div className="flex flex-col items-center max-w-[300px]">
            <Image
              src="/images/Maggy.jpeg"
              alt="Margaret"
              width={380}
              height={350}
              className="rounded-[20px]"
            />
            <p className="text-[24px] mt-4 font-josefinSans">Margaret Nyambura</p>
          </div>

          <div className="flex flex-col items-center max-w-[300px]">
            <Image
              src="/images/Terry.jpeg"
              alt="Teresiah"
              width={380}
              height={350}
              className="rounded-[20px]"
            />
            <p className="text-[24px] mt-4 font-josefinSans">Teresiah Wangui</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Team;
