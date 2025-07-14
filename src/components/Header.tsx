'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [open, setOpen] = useState('');

  const toggleDropdown = (key: string) => {
    setOpen(open === key ? '' : key);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-md border-b border-white/30 transition-all duration-300">
      <div className="flex flex-col items-center py-4">
        <div className="pt-8">
          <Link href="/">
            <Image
              src="/foundation-log.png"
              alt="DSOF Logo"
              width={200}
              height={60}
            />
          </Link>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 mt-4 text-black font-medium">
          <div className="relative group">
            <button onClick={() => toggleDropdown('who')}>Who we are</button>
            {open === 'who' && (
              <div className="absolute top-full left-0 bg-white shadow-md rounded-md mt-2 p-2 space-y-2">
                <Link href="/about-us">About-us</Link>
                <Link href="/board-of-trustees">Board of Trustees</Link>
                <Link href="/our-team">Our team</Link>
              </div>
            )}
          </div>
          <div className="relative group">
            <button onClick={() => toggleDropdown('programs')}>Programs</button>
            {open === 'programs' && (
              <div className="absolute top-full left-0 bg-white shadow-md rounded-md mt-2 p-2 space-y-2">
                <Link href="/scholarships">Scholarships</Link>
                <Link href="/medicals">Medicals</Link>
                <Link href="/sports">Sports</Link>
              </div>
            )}
          </div>
          <div className="relative group">
            <button onClick={() => toggleDropdown('media')}>Media Center</button>
            {open === 'media' && (
              <div className="absolute top-full left-0 bg-white shadow-md rounded-md mt-2 p-2 space-y-2">
                <Link href="/news">Latest News</Link>
                <Link href="/videos">Video Articles</Link>
              </div>
            )}
          </div>
          <Link href="/faq">FAQ</Link>
          <Link href="/registration">Registration Page</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
