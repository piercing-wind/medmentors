'use client'
import { useState, useEffect } from "react";
import { DockIcon, Home, Mail, UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [activeLink, setActiveLink] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight - 60) {
          currentSection = section.getAttribute("id") || "home";
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flex items-center justify-center md:justify-between px-20 my-5 z-50">
      <Image
        src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/logo.png`}
        alt="Logo"
        unoptimized
        loading="lazy"
        width={100}
        height={100}
      />
      <ul className="p-1 border-2 rounded-xl fixed flex md:relative bottom-4 z-50 md:flex items-center gap-10 px-4">
      <li
          className={`hover:bg-blue-100 hover:bg-opacity-40 hover:border hover:rounded-xl px-2 py-1 ${
            activeLink === "komal" ? "bg-blue-100 bg-opacity-40 border rounded-xl" : ""
          }`}
        >
          <Link className="flex items-center gap-2" href="#home">
            <UserCircle size={24} /> Home
          </Link>
        </li>
        <li
          className={`hover:bg-blue-100 hover:bg-opacity-40 hover:border hover:rounded-xl px-2 py-1 ${
            activeLink === "komal" ? "bg-blue-100 bg-opacity-40 border rounded-xl" : ""
          }`}
        >
          <Link className="flex items-center gap-2" href="#komal">
            <UserCircle size={24} /> About
          </Link>
        </li>
        <li
          className={`hover:bg-blue-100 hover:bg-opacity-40 hover:border hover:rounded-xl px-2 py-1 ${
            activeLink === "work" ? "bg-blue-100 bg-opacity-40 border rounded-xl" : ""
          }`}
        >
          <Link className="flex items-center gap-2" href="#work">
            <DockIcon size={24} /> Work
          </Link>
        </li>
      </ul>
      <Link href="mailto:komala1217@icloud.com" className="hidden md:block">
        <Mail />
      </Link>
    </nav>
  );
};