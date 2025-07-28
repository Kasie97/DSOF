'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const navLinks = [
  {
    label: 'Who we are',
    href: '/about-us',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Board of Trustees', href: '/board-of-trustees' },
      { label: 'Our Team', href: '/our-team' },
    ],
  },
  {
    label: 'Programs',
    href: '/programs',
    links: [
      { label: 'Scholarships', href: '/programs/scholarship' },
      { label: 'Medicals', href: '/programs/medicals' },
      { label: 'Sports', href: '/programs/sports' },
    ],
  },
  {
    label: 'Media Center',
    links: [
      { label: 'Latest News', href: '/media/latest-news' },
      { label: 'Video Articles', href: '/media/video-articles' },
    ],
  },
];

const simpleLinks = [
  { label: 'FAQ', href: '/faq' },
  { label: 'Registration Page', href: '/register' },
  { label: 'Contact Us', href: '/contact-us' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  const navTextClass = scrolled ? 'text-white font-bold' : 'text-black font-medium';
  const dropdownBg = scrolled ? 'bg-white/50' : 'bg-white/30';

  return (
    <header className="fixed top-0 w-full z-50 bg-foundation-bg/50 border-b border-foundation-bg/30 transition-all duration-300">
      <div className="flex flex-col items-center py-4">
        {!scrolled && (
          <div className="transition-opacity duration-300">
            <Link href="/">
              <Image
                src="/dsof.svg"
                alt="DSOF Logo"
                width={400}
                height={80}
              />
            </Link>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex flex-wrap justify-center gap-8 mt-4 transition-all duration-300 ${navTextClass}`}
        >
          {navLinks.map((group, i) => (
            <div key={i} className="relative group">
              {group.href ? (
                <Link
                  href={group.href}
                  className={`transition-colors duration-200 ${navTextClass}`}
                >
                  {group.label}
                </Link>
              ) : (
                <span className={`transition-colors duration-200 ${navTextClass}`}>
                  {group.label}
                </span>
              )}

              {group.links && (
                <div
                  className={`absolute left-0 top-full mt-2 p-4 rounded-md shadow-lg ${dropdownBg} backdrop-blur-sm invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 min-w-[200px]`}
                >
                  <ul className="space-y-2 text-sm">
                    {group.links.map((link, j) => (
                      <li key={j}>
                        <Link
                          href={link.href}
                          className="block hover:text-green-700 transition"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {simpleLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={`${navTextClass} hover:scale-105 hover:font-bold transition-all duration-200`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden mt-4">
          <button onClick={toggleMobileMenu} className="text-2xl text-black">
            {mobileOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        {mobileOpen && (
          <div className="md:hidden mt-4 w-full px-4 space-y-4 text-black font-medium">
            <div>
              <p className="font-semibold">Who we are</p>
              <div className="pl-4 space-y-1">
                <Link href="/about-us">About Us</Link><br />
                <Link href="/board-of-trustees">Board of Trustees</Link><br />
                <Link href="/our-team">Our Team</Link>
              </div>
            </div>
            <div>
              <p className="font-semibold">Programs</p>
              <div className="pl-4 space-y-1">
                <Link href="/programs">Programs</Link><br />
                <Link href="/programs/scholarship">Scholarships</Link><br />
                <Link href="/programs/medicals">Medicals</Link><br />
                <Link href="/programs/sports">Sports</Link>
              </div>
            </div>
            <div>
              <p className="font-semibold">Media Center</p>
              <div className="pl-4 space-y-1">
                <Link href="/media/latest-news">Latest News</Link><br />
                <Link href="/media/video-articles">Video Articles</Link>
              </div>
            </div>
            <Link href="/faq">FAQ</Link><br />
            <Link href="/register">Registration Page</Link><br />
            <Link href="/contact-us">Contact Us</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
