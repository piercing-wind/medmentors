import React from "react";
 
import { Dock, DockIcon } from "@/components/ui/dock";
import Link from "next/link";
import { MailIcon } from "lucide-react";
import Image from "next/image";
 
 
export function Social() {
  return (
    <div className="relative">
      <Dock direction="middle">
        <DockIcon className="flex items-center justify-center">
         <Link href='https://wa.me/916283341254?text=Hi%20Komal%2C%20I%20found%20you%20through%20your%20website%20and%20I%20would%20like%20to%20contact%20you' target="_blank" className="hover:scale-105 transition-all duration-500 mt-4"
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
               </Link>
        </DockIcon>
        <DockIcon>
         <Link href='https://www.instagram.com/stone.heart1005/' target="_blank" className="hover:scale-105 transition-all duration-500 mt-4 relative"
         >
           <Image
              loading="lazy"
              unoptimized
              src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/instaColorFull.svg`}
              alt='Hero Image'
              width={30}
              height={28}
              className=" flex-shrink w-8 h-8 object-cover"
           />
         </Link>
        </DockIcon>
        <DockIcon>
         <Link href='mailto:komala1217@icloud.com' className="hover:scale-105 transition-all duration-500 mt-4 relative"
          >
            <MailIcon size={32} className="text-blue-500"/>
         </Link>
        </DockIcon>
      </Dock>
    </div>
  );
}