'use client'
import ThemeContext from "@/app/context/ThemeContext";
import React, { useContext, } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent, 
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";

function Navbar() {
  
const {theme,setTheme} = useContext(ThemeContext)!
  
  const toggleTheme = ()=>{
    setTheme((prev)=>({
      ...prev,
      text: prev.text === "Dark"? "Light":"Dark",
      color: prev.text === "Dark"? "white":"black",
      bg: prev.text === "Dark"? "#0b0e14":"white"
    }))
  }

  
  return (
    <div 
      style={{
        backgroundColor:theme.bg,
        color:theme.color
      }}
    className={`font-workSans  `}>
      {/* Mobile Menu */}
      <div className="flex lg:hidden absolute right-2 top-5 font-workSans">
        <Sheet>
          <SheetTrigger>
            <Menu width={32} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Link href={"/"}>Home</Link>
              </SheetTitle>
              <SheetTitle>
                <Link href={"/blog/1"}>Blog</Link>
              </SheetTitle>
              <SheetTitle>
                <Link href={"/"}>Contact</Link>
              </SheetTitle>
              {/* <SheetTitle>
                <Link href={"/"}>Create Blog</Link>
              </SheetTitle> */}
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Menu */}
      <div className="flex justify-between py-4 w-[80%] mx-auto items-center pb-4">
        <Link href={'/'} className="font-workSans font-bold text-lg"
         style={{
                    backgroundColor:theme.bg,
                    color:theme.color
                  }}>
        Tech<span className="font-bold font-workSans">   Insights</span>        
        {/* <Image
          src={"/images/logo.png"}
          alt="Logo"
          width={200}
          height={200}
          quality={100}
          className="w-32"
        ></Image> */}
        </Link>

        <ul className="hidden lg:flex gap-6 ">
          <li>
            <Link href="/" className="hover:font-bold">Home</Link>
          </li>
          <li>
            <Link href="/blog/1"className="hover:font-bold">Blog</Link>
          </li>
          <li>
            <Link href="/"className="hover:font-bold">Contact</Link>
          </li>
        </ul>

        <div className="flex gap-4 items-center">
        {/* <Link href="/" className="hidden lg:flex font-workSans">
          Create Blog
        </Link> */}
        <Button className="mr-2 sm:mr-0" variant={'secondary'} size={'sm'} onClick={toggleTheme}>{theme.text}</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
