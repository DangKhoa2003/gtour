'use client';

import { Button } from '@mui/material';
import { ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
const BackTop = () => {
      const [isVisible, setIsVisible] = useState(false);

      useEffect(() => {
            const toggleVisibility = () => {
                  if (window.pageYOffset > 300) {
                        setIsVisible(true);
                  } else {
                        setIsVisible(false);
                  }
            };

            window.addEventListener('scroll', toggleVisibility);

            return () => window.removeEventListener('scroll', toggleVisibility);
      }, []);

      const scrollToTop = () => {
            window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
            });
      };
      return (
            <Button
                  onClick={scrollToTop}
                  className={`bg-[#1ec6b6] rounded-[50%] flex fixed bottom-4 right-4 py-4 hover:bg-primary ${
                        isVisible ? 'block' : 'hidden'
                  }`}
            >
                  <ChevronUp className="h-8 w-8 text-white mx-auto" />
            </Button>
      );
};

export default BackTop;
