import { DockIcon, Home, Mail, UserCircle } from "lucide-react"
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="flex items-center justify-center md:justify-between px-20 my-5">
      <Image
         src="/logo.png"
         alt="Logo"
         unoptimized
         loading="lazy"
         width={100}
         height={100}
      />
        <ul className="p-1 border-2 rounded-xl hidden md:flex items-center gap-10 px-4">
          <li className="hover:bg-blue-100 hover:bg-opacity-40 hover:border hover:rounded-xl px-2 py-1">
            <Link className="flex items-center gap-2" href="#">
              <Home size={24}/> Home
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2" href="#komal" >
             <UserCircle size={24}/>About
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2" href="#work">
            <DockIcon size={24}/>
              Work
            </Link>
          </li>
        </ul>
      <Link href="mailto:komala1217@icloud.com" className="hidden md:block">
        <Mail/>
      </Link>  
    </nav>
  );
};