'use client';

import Image from "next/image";
import Modal from './model';
import { useState } from 'react';
import Marquee from "./ui/marquee";

export const Certificates = () => {

   const [modalIsOpen, setModalIsOpen] = useState(false);
   const [currentCertificate, setCurrentCertificate] = useState('');

   const certificate = [
      {
         certificate : `${process.env.NEXT_PUBLIC_WEBSITE_URL}/certificates/BLSProvider.jpg`,
         logo : `${process.env.NEXT_PUBLIC_WEBSITE_URL}/certificates/logos/AHA.jpg`,
         name: "Basic Life Support Provider CRP & AED",
         height: 100,
         width: 100,
      },
      {
         certificate : `${process.env.NEXT_PUBLIC_WEBSITE_URL}/certificates/AIWC.jpeg`,
         logo : `${process.env.NEXT_PUBLIC_WEBSITE_URL}/certificates/logos/aiwc.jpeg`,
         name: "Physio Therapy Technician",
         height: 100,
         width: 100,
      },
      {
         certificate : `${process.env.NEXT_PUBLIC_WEBSITE_URL}/certificates/ACLSProvider.jpg`,
         logo : `${process.env.NEXT_PUBLIC_WEBSITE_URL}/certificates/logos/AHA.jpg`,
         name: "Advanced Cardiovascular Life Support",
         height: 100,
         width: 100,
      },
      {
         certificate : `${process.env.NEXT_PUBLIC_WEBSITE_URL}/certificates/Cognizavest.jpeg`,
         logo : `${process.env.NEXT_PUBLIC_WEBSITE_URL}/certificates/logos/Logo-Cognizavest.png`,
         name: "Clinical & Counselling Psychology",
         height: 100,
         width: 200,
      },
      {
         certificate : `${process.env.NEXT_PUBLIC_WEBSITE_URL}/certificates/PNRC.jpeg`,
         logo : `${process.env.NEXT_PUBLIC_WEBSITE_URL}/certificates/logos/pnrc.jpg`,
         name: "Nursing Certificate",
         height: 100,
         width: 100,
      },
      {
         certificate : `${process.env.NEXT_PUBLIC_WEBSITE_URL}/certificates/infection-control-nurse.jpg`,
         logo : `${process.env.NEXT_PUBLIC_WEBSITE_URL}/certificates/logos/ICN.jpg`,
         name: "Infection Control Nurse",
         height: 100,
         width: 100,
      },
      {
         certificate : `${process.env.NEXT_PUBLIC_WEBSITE_URL}/certificates/Critical_Care_Nursing.jpg`,
         logo : `${process.env.NEXT_PUBLIC_WEBSITE_URL}/certificates/logos/adcn.jpg`,
         name: "Advanced Critical Care Nursing",
         height: 120,
         width: 120,
      },
   ]
   const openModal = (certificate : string) => {
      setCurrentCertificate(certificate);
      setModalIsOpen(true);
   };

   const closeModal = () => {
      setModalIsOpen(false);
      setCurrentCertificate('');
   };
   return(
      <div className="">


         <div className="flex items-start gap-5 mt-14">
            <Marquee>
            {certificate.map((item, index) => (
             <div key={index} className="flex flex-col items-center justify-between h-44 gap-x-4" onClick={() => openModal(item.certificate)}>  
               <Image
                  unoptimized
                  loading="lazy"
                  
                  src={item.logo}
                  alt={item.name}
                  height={item.height}
                  width={item.width}
                  
                  className="cursor-pointer transition-transform transform hover:scale-105 rounded-full"
               />
               <div className="flex flex-col items-center justify-end gap-y-2 mt-auto">
                  <p className="text-center text-xs">{item.name}</p>
                  <span className="text-sm border border-blue-400 px-2 py-1 rounded-md text-nowrap hover:scale-105 cursor-pointer transition-all duration-500"
                  style={{boxShadow: "0 0 10px 2px rgba(0,0,255,0.1)"}}
                  >View Certificate </span>
               </div>
            </div>
            ))}
            </Marquee>
         </div>

         <Modal isOpen={modalIsOpen} onClose={closeModal}>
            <div className="flex justify-center items-center h-[70vh] m-auto">
               <Image src={currentCertificate} alt="Certificate" className="max-w-full max-h-full" />
            </div>
         </Modal>

      </div>
   )
}

