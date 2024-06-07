import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button } from '@mui/material';


const BackToTopButton = () => {
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

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <IconButton
        
        sx={{
          position: 'fixed',
          
          bottom: '20px',
          right: '20px',
          backgroundColor: '#007bff',
          color: '#fff',
          
          
          '&:hover': {
            bgcolor: 'primary.dark'
          },
          zIndex: 1000  
        }}
        
        onClick={scrollToTop}
        style={{ display: isVisible ? 'block' : 'block' }}
      ><KeyboardArrowUpIcon />
      </IconButton>
      )}
    </>
  );
};

export default BackToTopButton;
