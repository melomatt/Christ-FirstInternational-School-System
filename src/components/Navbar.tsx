"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { setTheme } = useTheme();
  // const { toggleSidebar } = useSidebar();
  return (
    <nav className="p-4 flex items-center justify-between sticky top-0 bg-background z-50">
      {/* LEFT - LOGO */}
      <Link href="/" className="flex items-center gap-2">
        <div className="relative w-10 h-10">
          <Image
            src="/cfis.png"
            alt="CFIS Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      </Link>

      {/* CENTER - NAV LINKS */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">
          Home
        </Link>
        <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
          About
        </Link>
        <Link href="#academics" className="text-sm font-medium hover:text-primary transition-colors">
          Academics
        </Link>
        <Link href="#admissions" className="text-sm font-medium hover:text-primary transition-colors">
          Admissions
        </Link>
        <Link href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">
          Gallery
        </Link>
        <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
          Contact
        </Link>
      </div>
    
      {/* <Button variant="outline" onClick={toggleSidebar}>
        Custom Button
      </Button> */}
      {/* RIGHT */}
      <div className="flex items-center gap-4">
        {/* THEME MENU */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
