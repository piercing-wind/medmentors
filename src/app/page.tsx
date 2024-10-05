import AnimatedBorder from "@/components/animatedBorder";
import FadeUpAnimator from "@/components/animator";
import Carousel from "@/components/crousel";
import { Header } from "@/components/header";
import { Social } from "@/components/social";
import { FadeText } from "@/components/ui/fade-text";
import GradualSpacing from "@/components/ui/gradual-spacing";
import TypingAnimation from "@/components/ui/typing-animation";
import TypingAnimation2 from "@/components/ui/typing-animation2";
import { ChevronRight, Globe2, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full relative overflow-x-hidden ">
      <div className="fixed -z-50 right-[10%] w-[40%] h-[30rem] rounded-full opacity-20 blur-3xl bg-blue-700 rotate-45"/>
      <Header />
      <div className="w-[90%] md:w-[75%] mx-auto my-14 md:py-14">
       <GradualSpacing
         className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1e1e1f] leading-tight tracking-normal flex flex-wrap"
         text="Empowering Future Lifesavers with Essential Skills"
       />
         <TypingAnimation
           text=" Hi, I'm Komal! I train aspiring nurses and students at <span className='font-mono border px-1 rounded-lg font-semibold'>Medmentors</span> in first aid and essential healthcare practices, helping them develop the skills to save lives and make a real difference."
           duration={10}
           className="custom-class mt-8"
         />
         <FadeUpAnimator>
        <div className="flex items-center gap-5">
           <Link href='#komal' className="border-2 border-white flex w-40 shadow-inner shadow-blue-400 rounded-3xl p-1 items-center justify-between hover:scale-105 transition-all duration-500 my-8"
              style={{boxShadow: "0 0 10px 0.2rem rgba(59, 130, 246, 0.5)"}}
           >
              <Image
                 loading="lazy"
                 unoptimized
                 src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/anime-girl_950633-1297.avif`}
                 alt='Hero Image'
                 width={32}
                 height={32}
                 
                 className="rounded-full flex-shrink w-8 h-8 object-cover"
              />
              About Me 
              <ChevronRight size={24} className="text-blue-500"/>
           </Link>
         </div>
         </FadeUpAnimator>
      </div>

      <div className="lg:w-[60rem] 2xl:w-[70rem] mx-auto mt-20 sm:pt-14 mb-24">
         <FadeUpAnimator>
            <div className="h-[16rem] sm:h-[18rem] md:h-[32rem] lg:h-[40rem] w-[22rem] md:w-[28rem] mx-auto relative rounded-2xl overflow-hidden shadow-lg">
               <Image
                  src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/service1.jpeg`}
                  alt='Workshop'
                  fill
                  loading="lazy"
                  unoptimized
                  style={{objectFit: "contain"}}
               />
            </div>
         </FadeUpAnimator>
            <div className="flex flex-col lg:flex-row gap-x-4 items-start pl-4 sm:pl-14 lg:pl-0 justify-between mt-20 my-8">
               <FadeText
                 className="lg:w-[40%] flex-shrink-0 text-2xl md:text-4xl font-extrabold text-[#1e1e1f] mb-8 sm:mb-16 text-left"
                 direction="left"
                 framerProps={{
                   show: { transition: { duration : 1, delay: 0.4 } },
                 }}
                 text="Comprehensive Healthcare, Elderly Care, and Emergency Response Services"
               />
               <div className="lg:w-[60%] flex-shrink-0">
               <TypingAnimation2
                  className="text-xl tracking-wide"
                  duration={10}
                  text="We offer expert training in healthcare, emergency response, and specialized elderly care services, ensuring compassionate support and essential skills for all ages. Empower yourself to care for others confidently!"
               />
                   <Link href='https://wa.me/916283341254?text=Hi%20Komal%2C%20I%20found%20you%20through%20your%20website%20and%20I%20am%20interested%20in%20attending%20your%20workshop' target="_blank" className="border-2 border-white flex w-44 shadow-inner shadow-blue-400 rounded-3xl p-1 px-2 items-center justify-between hover:scale-105 transition-all duration-500 mt-8"
                  style={{boxShadow: "0 0 10px 0.2rem rgba(59, 130, 246, 0.5)"}}
                 >
                  <Image
                     loading="lazy"
                     unoptimized
                     src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/whatsapp.png`}
                     alt='Hero Image'
                     width={28}
                     height={28}
                     
                     className=" flex-shrink w-8 h-8 object-cover"
                  />
                  Consult Now
                  <ChevronRight size={24} className="text-blue-500"/>
               </Link>
               </div>
            </div>
         <AnimatedBorder />
         </div>

         
       <Carousel />
       
       <div className="lg:w-[60rem] 2xl:w-[70rem] mx-auto flex flex-col pl-4 md:pl-20 xl:pl-0 xl:flex-row items-start justify-between mt-20">
            <FadeText
                 className="lg:w-[40%] flex-shrink-0 text-2xl md:text-4xl font-extrabold text-[#1e1e1f] mb-8 sm:mb-16 text-left"
                 direction="left"
                 framerProps={{
                   show: { transition: { duration : 1, delay: 0.4 } },
                 }}
                 text="Our Courses: Expert Training in Healthcare and Emergency Care"
               />
            <div className="lg:w-[60%] flex-shrink-0">
               <div className="flex items-center w-14 -space-x-2 mb-4">
                <Image
                     loading="lazy"
                     unoptimized
                     src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/anime-girl_950633-1297.avif`}
                     alt='Hero Image'
                     width={32}
                     height={32}

                     className="rounded-full flex-shrink w-8 h-8 object-cover"
                  />        
                <Image
                  loading="lazy"
                  unoptimized
                  src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/anime-girl_950633-1297.avif`}
                  alt='Hero Image'
                  width={32}
                  height={32}

                  className="rounded-full flex-shrink w-8 h-8 object-cover"
               />
               </div>
               <TypingAnimation2
                  className="text-xl tracking-wide"
                  duration={10}
                  text="Learn essential healthcare and emergency skills from expert instructors. Join us to gain hands-on experience, certification, and the confidence to save lives!"
               />
             <Link href='https://wa.me/916283341254?text=Hi%20Komal%2C%20I%20found%20you%20through%20your%20website%20and%20I%20am%20interested%20in%20attending%20your%20courses' target="_blank" className="border-2 border-white flex w-44 shadow-inner shadow-blue-400 rounded-3xl p-1 px-2 items-center justify-between hover:scale-105 transition-all duration-500 mt-8"
              style={{boxShadow: "0 0 10px 0.2rem rgba(59, 130, 246, 0.5)"}}
             >
              <Image
                 loading="lazy"
                 unoptimized
                 src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/whatsapp.png`}
                 alt='Hero Image'
                 width={28}
                 height={28}
                 
                 className=" flex-shrink w-8 h-8 object-cover"
              />
              Contact Me 
              <ChevronRight size={24} className="text-blue-500"/>
           </Link>
         <AnimatedBorder />
         </div>
      </div>
    
         <div className="lg:w-[60rem] 2xl:w-[70rem] mx-auto mt-20 sm:pt-14">
            <div className="h-[16rem] sm:h-[18rem] md:h-[32rem] lg:h-[38rem] w-[22rem] sm:w-[32rem] md:w-[40rem] lg:w-[50rem] 2xl:w-[70rem] mx-auto relative rounded-2xl overflow-hidden shadow-lg">
               <Image
                  src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/workshop.jpg`}
                  alt='Workshop'
                  fill
                  loading="lazy"
                  unoptimized
                  style={{objectFit: "cover"}}
               />
            </div>
            <div className="flex flex-col lg:flex-row items-start pl-4 sm:pl-14 lg:pl-0 justify-between mt-20">
            <FadeText
                 className="lg:w-[40%] flex-shrink-0 text-2xl md:text-4xl font-extrabold text-[#1e1e1f] mb-8 sm:mb-16 text-left"
                 direction="left"
                 framerProps={{
                   show: { transition: { duration : 1, delay: 0.4 } },
                 }}
                   text="Hands-On Workshops: Learn, Practice, and Master Lifesaving Skills"
               />
               <div className="lg:w-[60%] flex-shrink-0">
               <TypingAnimation2
                  className="text-xl tracking-wide"
                  duration={10}
                  text="Our workshops are designed to help you learn and practice essential healthcare skills in a supportive environment. Join us to gain hands-on experience, certification, and the confidence to save lives!"
               />

                   <Link href='https://wa.me/916283341254?text=Hi%20Komal%2C%20I%20found%20you%20through%20your%20website%20and%20I%20am%20interested%20in%20attending%20your%20workshop' target="_blank" className="border-2 border-white flex w-44 shadow-inner shadow-blue-400 rounded-3xl p-1 px-2 items-center justify-between hover:scale-105 transition-all duration-500 mt-8"
                  style={{boxShadow: "0 0 10px 0.2rem rgba(59, 130, 246, 0.5)"}}
                 >
                  <Image
                     loading="lazy"
                     unoptimized
                     src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/whatsapp.png`}
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
            <AnimatedBorder />
         </div>

         <div className="xl:w-[70rem] mx-auto mt-20 pt-10 flex flex-col items-center lg:flex-row lg:items-start">
            <div className="flex flex-col items-center justify-center gap-5 mx-14 mt-10">
               <div className="rounded-full relative h-44 w-44 overflow-hidden">
                  <Image
                     src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/anime-girl_950633-1297.avif`}
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
               <Social />

             </div>


            </div>

         </footer>

    </div>
  );
}
