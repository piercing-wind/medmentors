import Carousel from "@/components/crousel";
import { Header } from "@/components/header";
import { ChevronRight, Globe2, MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full relative overflow-x-hidden ">
      <div className="fixed -z-50 right-[10%] w-[40%] h-[30rem] rounded-full opacity-20 blur-3xl bg-blue-700 rotate-45"/>
      <Header />
      <div className="w-[90%] md:w-[75%] mx-auto my-14 md:py-14">
         <h1 className="text-4xl *:sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1e1e1f] leading-tight tracking-normal">Empowering Future Lifesavers with Essential Skills</h1>
         <p className="text-xl md:w-[38rem] my-4 tracking-wide">Hi, I&apos;m Komal! I train aspiring nurses and students at <span className="font-mono border px-1 rounded-lg font-semibold">Medmentors</span> in first aid and essential healthcare practices, helping them develop the skills to save lives and make a real difference.</p>
         <div className="flex items-center gap-5">
           <Link href='' className="border-2 border-white flex w-40 shadow-inner shadow-blue-400 rounded-3xl p-1 items-center justify-between hover:scale-105 transition-all duration-500 my-4"
              style={{boxShadow: "0 0 10px 0.2rem rgba(59, 130, 246, 0.5)"}}
           >
              <Image
                 loading="lazy"
                 unoptimized
                 src='/anime-girl_950633-1297.avif'
                 alt='Hero Image'
                 width={32}
                 height={32}
                 
                 className="rounded-full flex-shrink w-8 h-8 object-cover"
              />
              About Me 
              <ChevronRight size={24} className="text-blue-500"/>
           </Link>
           {/* <Link href='' classNam="border-2 border-white flex w-44 shadow-inner shadow-blue-400 rounded-3xl p-1 px-2 items-center justify-between hover:scale-105 transition-all duration-500"
              style={{boxShadow: "0 0 10px 0.2rem rgba(59, 130, 246, 0.5)"}}
           >
              <Image
                 loading="lazy"
                 unoptimized
                 src='/whatsapp.png'
                 alt='Hero Image'
                 width={28}
                 height={28}
                 
                 className=" flex-shrink w-8 h-8 object-cover"
              />
              Contact Me 
              <ChevronRight size={24} className="text-blue-500"/>
           </Link> */}
         </div>
      </div>
       <Carousel />
       <div className="w-full mx-auto flex flex-col pl-4 md:pl-20 xl:pl-auto xl:flex-row items-start justify-between">
       <h6 className="text-2xl md:text-4xl w-full lg:w-[40%] font-extrabold leading-tight text-[#1e1e1f] text-left text-wrap mb-2">Our Services: Expert Training in Healthcare and Emergency Care</h6>
            
            <div >
               <div className="flex items-center w-14 -space-x-2 mb-4">
                <Image
                     loading="lazy"
                     unoptimized
                     src='/anime-girl_950633-1297.avif'
                     alt='Hero Image'
                     width={32}
                     height={32}

                     className="rounded-full flex-shrink w-8 h-8 object-cover"
                  />        
                <Image
                  loading="lazy"
                  unoptimized
                  src='/anime-girl_950633-1297.avif'
                  alt='Hero Image'
                  width={32}
                  height={32}

                  className="rounded-full flex-shrink w-8 h-8 object-cover"
               />
               </div>
               <p className="text-xl tacking-wide">Learn essential healthcare and emergency skills from expert instructors. Join us to gain hands-on experience, certification, and the confidence to save lives!</p>
             <Link href='https://wa.me/916283341254?text=Hi%20Komal%2C%20I%20found%20you%20through%20your%20website%20and%20I%20am%20interested%20in%20attending%20your%20courses' target="_blank" className="border-2 border-white flex w-44 shadow-inner shadow-blue-400 rounded-3xl p-1 px-2 items-center justify-between hover:scale-105 transition-all duration-500 mt-4"
              style={{boxShadow: "0 0 10px 0.2rem rgba(59, 130, 246, 0.5)"}}
             >
              <Image
                 loading="lazy"
                 unoptimized
                 src='/whatsapp.png'
                 alt='Hero Image'
                 width={28}
                 height={28}
                 
                 className=" flex-shrink w-8 h-8 object-cover"
              />
              Contact Me 
              <ChevronRight size={24} className="text-blue-500"/>
           </Link>
         </div>

      </div>
         <div className="lg:w-[60rem] 2xl:w-[70rem] mx-auto mt-20 sm:pt-14">
            <div className="h-[16rem] sm:h-[18rem] md:h-[32rem] lg:h-[38rem] w-[22rem] sm:w-[32rem] md:w-[40rem] lg:w-[50rem] 2xl:w-[70rem] mx-auto relative rounded-2xl overflow-hidden shadow-lg">
               <Image
                  src='/workshop.jpg'
                  alt='Workshop'
                  fill
                  loading="lazy"
                  unoptimized
                  style={{objectFit: "cover"}}
               />
            </div>
            <div className="flex flex-col lg:flex-row items-start pl-4 sm:pl-14 lg:pl-auto justify-between mt-8">
               <h5 className="lg:w-[40%] flex-shrink-0 text-2xl md:text-4xl font-extrabold text-[#1e1e1f] mb-8 sm:mb-16 text-left">Hands-On Workshops: Learn, Practice, and Master Lifesaving Skills</h5>
               <div className="">
                   <p className="text-xl tracking-wide">Our workshops are designed to help you learn and practice essential healthcare skills in a supportive environment. Join us to gain hands-on experience, certification, and the confidence to save lives!</p>
                   <Link href='https://wa.me/916283341254?text=Hi%20Komal%2C%20I%20found%20you%20through%20your%20website%20and%20I%20am%20interested%20in%20attending%20your%20workshop' target="_blank" className="border-2 border-white flex w-44 shadow-inner shadow-blue-400 rounded-3xl p-1 px-2 items-center justify-between hover:scale-105 transition-all duration-500 mt-4"
                  style={{boxShadow: "0 0 10px 0.2rem rgba(59, 130, 246, 0.5)"}}
                 >
                  <Image
                     loading="lazy"
                     unoptimized
                     src='/whatsapp.png'
                     alt='Hero Image'
                     width={28}
                     height={28}
                     
                     className=" flex-shrink w-8 h-8 object-cover"
                  />
                  Contact Me 
                  <ChevronRight size={24} className="text-blue-500"/>
               </Link>
               </div>
            </div>
         </div>

         <div className="xl:w-[70rem] mx-auto mt-20 pt-10 flex flex-col items-center lg:flex-row lg:items-start">
            <div className="flex flex-col items-center justify-center gap-5 mx-14 mt-10">
               <div className="rounded-full relative h-44 w-44 overflow-hidden">
                  <Image
                     src='/anime-girl_950633-1297.avif'
                     alt='Hero Image'
                     fill
                     loading="lazy"
                     unoptimized
                     style={{objectFit: "cover"}}
                  />
               </div>

               <p className="flex items-center justify-center gap-4"> <Globe2 size={28} className="text-blue-500"/> India/Punjab</p>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-4 mx-6 sm:mx-14 mt-4 lg:mt-auto" id="komal">
               <Link href='tel:916283341254' className="w-60 border-2 border-cyan-300 bg-cyan-50 bg-opacity-50 rounded-3xl p-1 px-2 flex items-center justify-between hover:scale-105 transition-all duration-500">
                  <PhoneIcon size={28} className="text-cyan-500"/>
                  <span className="text-cyan-500 text-lg">+91 628 334 1254</span>
                  <ChevronRight size={24} className="text-blue-500 border rounded-full overflow-hidden border-blue-500"/>
               </Link>
               <h1 className="text-5xl sm:text-7xl font-extrabold text-[#1e1e1f] mt-4 lg:mt-8 text-nowrap" >Komal Singh</h1>
               <h3 className="text-2xl sm:text-4xl">Founder & Lead Instructor</h3>
               <p className="text-lg tracking-normal my-5">Komal Sharma is a dedicated healthcare educator with over 10 years of experience. She founded <span className="font-bold">Medmentors</span> to empower students with essential skills in emergency care, blending expert knowledge with hands-on training to prepare future healthcare professionals.</p>
             
               <div className="mt-14">
               <h2 className="text-4xl font-bold my-10" id="work">Work Experience</h2>
               <div className="w-full flex items-start justify-between">
                  <span>
                     <h3 className="text-2xl">Apollo Hospitals</h3>
                     <p className="text-lg text-cyan-500">Emergency Nurse</p>
                  </span>
                  <span>2022 Present</span>
               </div>
               <ul className="list-disc list-inside text-lg mt-8">
                  <li>Emergency Nurse, Apollo Hospitals</li>
                  <li>First Aid Instructor, St. John Ambulance</li>
                  <li>Healthcare Educator, Medmentors</li>
               </ul>
               </div>
            </div>
         </div>
         
         <footer className="2xl:w-[75rem] mx-auto mt-14 mb-4">
            <div className="mx-14 border border-cyan-500 flex gap-y-4 p-4 flex-col md:flex-row items-center md:items-start justify-between px-14 rounded-2xl">
               <Image
                  src="/logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  unoptimized
                  loading="lazy"
               />
               <p className="mt-auto mb-auto opacity-80">© Medmentors 2024</p>
               <div className=" ">
               <h3 className="font-medium">Follow Us</h3>
               <div className="flex items-center gap-5">
               <Link href='https://wa.me/916283341254?text=Hi%20Komal%2C%20I%20found%20you%20through%20your%20website%20and%20I%20would%20like%20to%20contact%20you' target="_blank" className="hover:scale-105 transition-all duration-500 mt-4"
                >
                 <Image
                    loading="lazy"
                    unoptimized
                    src='/whatsapp.png'
                    alt='Hero Image'
                    width={28}
                    height={28}

                    className=" flex-shrink w-8 h-8 object-cover"
                 />
               </Link>
               <Link href='https://www.instagram.com/stone.heart1005/' target="_blank" className="hover:scale-105 transition-all duration-500 mt-4 relative"
                >
                 <Image
                    loading="lazy"
                    unoptimized
                    src='/instaColorFull.svg'
                    alt='Hero Image'
                    width={30}
                    height={28}

                    className=" flex-shrink w-8 h-8 object-cover"
                 />
               </Link>
               <Link href='mailto:komala1217@icloud.com' className="hover:scale-105 transition-all duration-500 mt-4 relative"
                >
                  <MailIcon size={32} className="text-blue-500"/>
               </Link>
               </div>

             </div>


            </div>

         </footer>

    </div>
  );
}
