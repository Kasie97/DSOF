"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <div className="sticky top-0 z-50 dark:bg-black border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex flex-col items-center relative">
        <Link href="/">
          <Image
            src="/foundation-log.png"
            alt="DSOF Logo"
            width={400}
            height={150}
          />
        </Link>
        <br />

        {/* Nav Section */}
        <div className="flex w-1/2 justify-between px-12 text-black dark:text-white text-lg font-medium pb-8">
          {/* Who we are */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("who")}
            onMouseLeave={() => setDropdown(null)}
          >
            <div className="cursor-pointer">Who we are</div>
            {dropdown === "who" && (
              <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded shadow-lg w-48 z-50">
                <ul className="flex flex-col text-black dark:text-white text-left">
                  <li className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Link href="/about-us" className="block px-4 py-2">
                      About Us
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Link href="/our-team" className="block px-4 py-2">
                      Our Team
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Link href="/board-of-trustees" className="block px-4 py-2">
                      Board of Trustees
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Programmes */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("programmes")}
            onMouseLeave={() => setDropdown(null)}
          >
            <div className="cursor-pointer">Programmes</div>
            {dropdown === "programmes" && (
              <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded shadow-lg w-48 z-50">
                <ul className="flex flex-col text-black dark:text-white text-left">
                  <li className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Link href="/scholarships" className="block px-4 py-2">
                      Scholarships
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Link href="/health" className="block px-4 py-2">
                      Health
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Link href="/football" className="block px-4 py-2">
                      Football
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Media Center */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("media")}
            onMouseLeave={() => setDropdown(null)}
          >
            <div className="cursor-pointer">Media Center</div>
            {dropdown === "media" && (
              <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded shadow-lg w-48 z-50">
                <ul className="flex flex-col text-black dark:text-white text-left">
                  <li className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Link href="/latest-news" className="block px-4 py-2">
                      Latest News
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Link href="/publications" className="block px-4 py-2">
                      Publications
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Link href="/video-articles" className="block px-4 py-2">
                      Video Articles
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Registration */}
          <div>
            <Link
              href="/registration"
              className="[color:black] [text-decoration:none] hover:cursor-pointer"
            >
              Registration
            </Link>
          </div>

          {/* FAQ */}
          <div>
            <Link
              href="/faq"
              className="[color:black] [text-decoration:none] hover:cursor-pointer"
            >
              FAQS
            </Link>
          </div>

          {/* Contact Us */}
          <div>
            <Link
              href="/contact-us"
              className="[color:black] [text-decoration:none] hover:cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
