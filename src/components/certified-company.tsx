import Image from "next/image"
import { FadeText } from "./ui/fade-text"
import { ZoomAnimator } from "./animator"

export const Certified =()=>{
   return(
    <div className="max-w-6xl w-full mx-auto my-20 gap-4 flex flex-col items-center">
         <FadeText
           className="text-2xl md:text-4xl font-extrabold text-[#1e1e1f] mb-8 sm:mb-16 text-left"
           direction="up"
           framerProps={{
             show: { transition: { duration : 1, delay: 0.4 } },
           }}
             text="We are a certified company"
         />
      <div className=" w-full mx-auto my-20 grid grid-cols-2 sm:gap-y-20 lg:gap-y-8 gap-8 lg:grid-cols-4 px-4 sm:px-10 lg:px-20 items-center justify-between">
         <ZoomAnimator className="h-36 sm:h-44 relative aspect-square rounded-full shadow-lg overflow-hidden bg-white m-auto">
            <Image
               src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/certificates/ISO_9001-2015.jpg`}
               fill
               style={{
                  objectFit : 'contain'
               }}
               alt="Certified Company"
            />
         </ZoomAnimator>
         <ZoomAnimator delay={0.4} className="h-36 sm:h-44 relative aspect-square rounded-full shadow-lg overflow-hidden bg-white m-auto">
            <Image
               src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/certificates/IAF.png`}
               fill
               style={{
                  objectFit : 'contain'
               }}
               alt="Certified Company"
            />
         </ZoomAnimator>
         <ZoomAnimator delay={0.6} className="h-36 sm:h-44 relative aspect-square rounded-full shadow-lg overflow-hidden bg-white m-auto">
            <Image
               src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/certificates/INA-Logo-large.jpg`}
               fill
               style={{
                  objectFit : 'contain'
               }}
               alt="Certified Company"
            />
         </ZoomAnimator>
         <ZoomAnimator delay={0.8} className="h-36 sm:h-44 relative aspect-square rounded-full shadow-lg overflow-hidden bg-white m-auto">
            <Image
               src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/certificates/CPD-Logo.png`}
               fill
               style={{
                  objectFit : 'contain'
               }}
               alt="Certified Company"
            />
         </ZoomAnimator>
      </div>
     </div>
   )
}