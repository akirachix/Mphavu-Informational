"use client"; 

import { FaTrophy, FaPlay, FaChartLine } from "react-icons/fa";

export default function Process() {
  return (
    <main>
      <div className="mt-[5%]">
        
        <div className="flex gap-8 flex-col md:flex-row flex-wrap justify-center px-4 sd:ml-[8%] iPA:w-[1020px]flex-wrap">
          <div className="border-4 rounded-2xl w-full md:w-[32%] max-w-[420px] h-auto p-6 bg-blue-500 text-white">
            <FaPlay className="w-9 h-9 mb-4" />
            <h2 className="text-[26px] font-bold font-josefinSans">Upload your video</h2>
            <p className="mt-4 text-[22px] font-josefinSans">
              Upload your video footage and game statistics
            </p>
          </div>

          <div className="border-4 rounded-2xl w-full md:w-[32%] max-w-[420px] h-auto p-6 bg-blue-500 text-white">
            <FaTrophy className="w-10 h-10 mb-4" />
            <h2 className="text-[26px] font-bold font-josefinSans">
              Spot Us analyzes your video and game stats
            </h2>
            <p className="mt-4 text-[22px] font-josefinSans">
              Our AI technology automatically analyzes your video and game stats
            </p>
          </div>

          <div className="border-4 rounded-2xl w-full md:w-[32%] max-w-[420px] h-auto p-6 bg-blue-500 text-white">
            <FaChartLine className="w-10 h-10 mb-4" />
            <h2 className="text-[26px] font-bold font-josefinSans">
              Get insights and improve your game
            </h2>
            <p className="mt-4 text-[22px] font-josefinSans">
              Receive detailed insights and recommendations to improve your game
            </p>
          </div>
        </div>

        <div className="text-center mt-10 text-[48px] text-[#283891] font-bold font-josefinSans">
          How to get started
        </div>
         
        <div className="flex flex-wrap justify-center gap-10 mt-12 nh:w-[979px] nhm:w-[50%] nhm:ml-[25%] ">
        
         
          <div className="relative flex justify-center">
            <div className="border-4 rounded-2xl w-[300px] h-auto p-6 bg-green-500 text-white">
              <h2 className="text-[26px] font-bold font-josefinSans">Download the app</h2>
              <p className="mt-4 text-[22px] font-josefinSans">
                Download Spot Us from the App Store or Google Play
              </p>
            </div>
            <div className="absolute top-[-15px] right-[-15px] bg-white border-4 rounded-full h-12 w-12 flex items-center justify-center border-green-500">
              <span className="font-josefinSans font-bold">1</span>
            </div>
          </div>

       
          <div className="relative flex justify-center">
            <div className="border-4 rounded-2xl w-[300px] h-auto p-6 bg-green-500 text-white">
              <h2 className="text-[26px] font-bold font-josefinSans">Upload your video</h2>
              <p className="mt-4 text-[22px] font-josefinSans">
                Record your game footage using the app or upload an existing video
              </p>
            </div>
            <div className="absolute top-[-15px] right-[-15px] bg-white border-4 rounded-full h-12 w-12 flex items-center justify-center border-green-500">
              <span className="font-josefinSans font-bold">2</span>
            </div>
          </div>

        
          <div className="relative flex justify-center">
            <div className="border-4 rounded-2xl w-[300px] h-auto p-6 bg-green-500 text-white">
              <h2 className="text-[26px] font-bold font-josefinSans">Get insights & improve your game</h2>
              <p className="mt-4 text-[22px] font-josefinSans">
                Receive instant feedback and detailed insights
              </p>
            </div>
            <div className="absolute top-[-15px] right-[-15px] bg-white border-4 rounded-full h-12 w-12 flex items-center justify-center border-green-500">
              <span className="font-josefinSans font-bold">3</span>
            </div>
          </div>


          <div className="relative flex justify-center">
            <div className="border-4 rounded-2xl w-[300px] h-auto p-6 bg-green-500 text-white">
              <h2 className="text-[26px] font-bold font-josefinSans">Monitor your team's progress</h2>
              <p className="mt-4 text-[22px] font-josefinSans">
                Monitor your teams progress over time with detailed analytics
              </p>
            </div>
            <div className="absolute top-[-15px] right-[-15px] bg-white border-4 rounded-full h-12 w-12 flex items-center justify-center border-green-500">
              <span className="font-josefinSans font-bold">4</span>
            </div>
          </div>
        </div>
      </div>

    
      <style jsx>{`
        @media (min-width: 1024px) and (max-width: 1366px),
               (min-width: 1024px) and (max-height: 600px),
               (min-width: 1280px) and (max-height: 800px) {
        //   .flex-wrap {
        //     flex-direction: row; 
            flex-wrap: wrap; 
            justify-content: center;
          
          }
          .flex-wrap > div {
            width: 45%; /* Each card takes up half the width */
          }
        }

        @media (max-width: 540px) and (max-height: 720px) {
          .flex-wrap {
            justify-content: center; /* Center the blue cards */
          }
          .flex-wrap > div {
            width: auto; /* Centering the cards */
          }
        }
      `}</style>
     </main>
  );
}
