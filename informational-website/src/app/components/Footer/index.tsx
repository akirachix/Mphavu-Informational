

import React from 'react';
import Link from 'next/link';
import { MdPhone } from 'react-icons/md'; 
import { MdEmail } from 'react-icons/md'; 
import { HiLocationMarker } from 'react-icons/hi'; 
const Footer: React.FC = () => {
  return (
    <footer className="bg-green-500 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pl-[100px]">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[26px] font-josefinsans">Get In Touch</h2>
            <p className="flex items-center mb-3 text-[23px] font-josefinsans ml-[-55px]">
              <MdPhone className="h-[30px] w-[40px] mr-2" />
              +254717244476
            </p>
            <p className="flex items-center text-[23px] font-josefinsans ml-[-55px] ">
              <MdEmail className="h-[30px] w-[40px] mr-2" />
              SpotUs@gmail.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-[26px] font-josefinsans">About Us</h2>
            <ul>
              <li className="mb-2 text-[23px] font-josefinsans">
                <Link href="/mission" className="hover:underline">Mission</Link>
              </li>
              <li className="text-[23px] font-josefinsans">
                <Link href="/vision" className="hover:underline">Vision</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-[26px] font-josefinsans">Location</h2>
            <p className="flex items-start text-[23px] font-josefinsans ml-[-50px]">
              <HiLocationMarker className="h-[30px] w-[40px] mr-2 mt-1" />
              <span>
                Karen Hardy<br />
                616 Korongo Road
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-600 py-4">
        <div className="container mx-auto px-4 text-center lg:text-[20px]">
          <p className="text-[20px] font-josefinsans">Copyright &copy; 2024 Brand - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



