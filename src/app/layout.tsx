
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbarmain from "@/components/Navbar-comp/Navbar-main";
import Footermain from "@/components/Footer-comp/Footermain";
import { AuthProvider } from "./context/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omarike",
  description: "Omarike is a E-commerce website",
  icons:{
    icon:"/favicon.iconp"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         <link href="https://fonts.googleapis.com/css2?family=Asimovian&family=Signika:wght@300..700&display=swap" rel="stylesheet"></link>
      </head>
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
            <Navbarmain/>
            {children}
            <Footermain/>
            
        </AuthProvider>
         
        
       
      </body>
    </html>
  );
}
