import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
   src: [
     {
       path: "./fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
       weight: "100 900",
       style: "normal",
     },
     {
       path: "./fonts/Inter/Inter-Italic-VariableFont_opsz,wght.ttf",
       weight: "100 900",
       style: "italic",
     },
     {
       path: "./fonts/Inter/static/Inter_18pt-Black.ttf",
       weight: "900",
       style: "normal",
     },
     {
       path: "./fonts/Inter/static/Inter_18pt-BlackItalic.ttf",
       weight: "900",
       style: "italic",
     },
     {
       path: "./fonts/Inter/static/Inter_18pt-Bold.ttf",
       weight: "700",
       style: "normal",
     },
     {
       path: "./fonts/Inter/static/Inter_18pt-BoldItalic.ttf",
       weight: "700",
       style: "italic",
     },
     {
       path: "./fonts/Inter/static/Inter_18pt-ExtraBold.ttf",
       weight: "800",
       style: "normal",
     },
     {
       path: "./fonts/Inter/static/Inter_18pt-ExtraBoldItalic.ttf",
       weight: "800",
       style: "italic",
     },
     {
       path: "./fonts/Inter/static/Inter_18pt-ExtraLight.ttf",
       weight: "200",
       style: "normal",
     },
     {
       path: "./fonts/Inter/static/Inter_18pt-ExtraLightItalic.ttf",
       weight: "200",
       style: "italic",
     },
     {
       path: "./fonts/Inter/static/Inter_18pt-Italic.ttf",
       weight: "400",
       style: "italic",
     },
     {
       path: "./fonts/Inter/static/Inter_18pt-Light.ttf",
       weight: "300",
       style: "normal",
     },
     {
       path: "./fonts/Inter/static/Inter_18pt-LightItalic.ttf",
       weight: "300",
       style: "italic",
     },
     {
       path: "./fonts/Inter/static/Inter_18pt-Medium.ttf",
       weight: "500",
       style: "normal",
     },
     {
       path: "./fonts/Inter/static/Inter_18pt-MediumItalic.ttf",
       weight: "500",
       style: "italic",
     },
     {
       path: "./fonts/Inter/static/Inter_18pt-Regular.ttf",
       weight: "400",
       style: "normal",
     },
     {
       path: "./fonts/Inter/static/Inter_18pt-SemiBold.ttf",
       weight: "600",
       style: "normal",
     },
     {
       path: "./fonts/Inter/static/Inter_18pt-SemiBoldItalic.ttf",
       weight: "600",
       style: "italic",
     },
     {
       path: "./fonts/Inter/static/Inter_18pt-Thin.ttf",
       weight: "100",
       style: "normal",
     },
     {
       path: "./fonts/Inter/static/Inter_18pt-ThinItalic.ttf",
       weight: "100",
       style: "italic",
     },
   ],
   variable: "--font-inter",
 });

   
export const metadata: Metadata = {
   title: "Medmentors | Komal Singh | Nursing, First Aid, CPR & Basic Life Support Training",
   description: " Join Komal Singh at MedMentor for expert nursing courses, first aid, CPR, CDR, and basic life support training. Empower yourself with essential healthcare skills today!",
   metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_URL!),
   applicationName: "MedMentors", 
   authors: [
     {
       name: "Sourabh",
       url: "https://www.linkedin.com/in/sourabh-sharma-8987451a2/",
     },
   ],
   generator: "MedMentors",

   keywords: [
      "MedMentor",
      "Komal Singh",
      "nursing courses",
      "first aid training",
      "CPR certification",
      "CDR training",
      "basic life support",
      "healthcare education",
      "emergency care skills",
      "nurse training",
      "healthcare workshops"
    ],
   referrer: "origin",
   creator: "Sourabh",
   icons : `${process.env.NEXT_PUBLIC_WEBSITE_URL}/favicon.ico`,
   publisher: "Medmentors",
   robots: {
     index: true,
     follow: true,
   },
   alternates: { canonical: "/" },
   twitter:{
      card : 'summary_large_image'
   },
   openGraph:{
      type : 'website',
      url : process.env.NEXT_PUBLIC_WEBSITE_URL!,
      title : "Medmentors",
      siteName : "Medmentors",
      images:[
         {
            url : `${process.env.NEXT_PUBLIC_WEBSITE_URL}/opengraph-image.jpg`,
            height : 630,  
            width : 1200,
            alt : "Welcome to MedMentors"
         }
      ],
      description : "Join Komal Singh at MedMentor for expert nursing courses, first aid, CPR, CDR, and basic life support training. Empower yourself with essential healthcare skills today!",
   },  
   other:{
      ["bingbot"]: "noarchive",
   },
   
 };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
