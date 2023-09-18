'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MainNav from '@/components/main-nav';

const Header = () => {
      const [scrollY, setScrollY] = useState(0);

      const handleScrollY = () => {
            setScrollY(window.scrollY);
      };

      useEffect(() => {
            window.addEventListener('scroll', handleScrollY);

            return () => window.removeEventListener('scroll', handleScrollY);
      }, [scrollY]);
      return (
            <header
                  className={`fixed top-0 z-50 w-full transition-colors duration-500 ease-linear ${
                        scrollY >= 100 ? 'bg-black' : 'bg-transparent'
                  }`}
            >
                  <div className="container mx-auto py-4 max-sm:px-6 lg:px-8 flex justify-between items-center text-background">
                        <div className="relative top-0 left-0">
                              <Link href="/">
                                    <h1 className="text-3xl tracking-wide">
                                          G
                                          <span className="font-bold">
                                                Tour
                                          </span>
                                    </h1>
                                    <div className="absolute -top-1 -left-6 h-10 w-10 rounded-[50%] bg-transparent"></div>
                              </Link>
                        </div>
                        <MainNav />
                  </div>
            </header>
      );
};

export default Header;
