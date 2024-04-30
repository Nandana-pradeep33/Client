import  { useState } from "react";
import ResponsiveAppBar from './ResponsiveAppBar';
import { Link } from 'react-router-dom';
import students from '../assets/st2.png';
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Slide, Fade } from "react-awesome-reveal";
import Grid from '@mui/material/Grid';
import Photo1 from "../assets/web.jpg";
import Photo2 from "../assets/musicc.jpg";
import Photo3 from "../assets/dance.jpg";
import Photo4 from "../assets/ai.jpg";
import Photo5 from "../assets/book1.jpg";
import Photo6 from "../assets/block.jpg";
import Photo7 from "../assets/cloud.jpg";
import Photo8 from "../assets/flutter.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const CardsData = [
  {
    id: 1,
    img: Photo2,
    title: "Music",
    desc: "Explore your interest ",
  },
  {
    id: 2,
    img: Photo1,
    title: "Web Development",
    desc: "Explore your interest ",
  },
  {
    id: 3,
    img: Photo3,
    title: "Dance",
    desc: "Explore your interest ",
  },
  {
    id: 4,
    img: Photo4,
    title: "Artificial Intelligance",
    desc: "Explore your interest ",
  },
  {
    id: 5,
    img: Photo5,
    title: "Academics",
    desc: "Explore your interest ",
  },
  {
    id: 6,
    img: Photo6,
    title: "BlockChain",
    desc: "Explore your interest ",
  },
  {
    id: 7,
    img: Photo7,
    title: "Google Cloud",
    desc: "Explore your interest ",
  },
  {
    id: 8,
    img: Photo8,
    title: "Flutter",
    desc: "Explore your interest ",
  },
  
];
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const WavyShape = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="wavy-shape"
      >
        <path
          fill="#181B30"
          fillOpacity="1"
          d="M0,224L120,202.7C240,181,480,139,720,138.7C960,139,1200,181,1320,202.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    );
  };
  
const Landingpage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Change the speed here (in milliseconds)
  };
  return (
    <div>
      <ResponsiveAppBar />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
        <div className="flex flex-col items-center justify-between w-full  lg:flex-row">
          <div className=" lg:mb-0 lg:max-w-lg lg:pr-5">
          <Slider {...settings}>
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">CLASS MATE</p>
              </div>
              <h2 className="font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6" style={{ fontSize: '50px' }}>
                Share your <span id="textAnimation" className="inline-block text-deep-purple-accent-400">Skills</span>
                <br className="hidden md:block" />
                Lets Grow{' '}
                <span className="inline-block text-deep-purple-accent-400">together</span>
              </h2>
              <p className="text-gray-700 text-base md:text-lg">Discover a community where sharing your expertise leads to mutual growth, exchanging knowledge with like-minded individuals, fostering personal and collective growth.</p>
            </div>
            <div>
            <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">CLASS MATE</p>
              </div>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6" style={{ fontSize: '40px' }}>
                Find a <span id="textAnimation" className="inline-block text-deep-purple-accent-400">Scribe or</span>
                <br className="hidden md:block" />
                 Offer Your Service{' '}
                <span className="inline-block text-deep-purple-accent-400">as One !</span>
              </h2>
              <p  className="text-gray-700 text-base md:text-lg">Search for scribe or be a helping hand to someone. Click the button below to know more.</p>
              <Link to="/Scribe">
  <button className="mt-3 border border-black rounded-full py-2 px-4 text-black hover:bg-blue-900 hover:text-white transition-colors duration-300">
    Explore More
  </button>
</Link>

            </div>
            </Slider>
            <div className="flex items-center space-x-3">
              
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-3/4">
            <div className="lg:h-96 lg:w-120" style={{height:'29rem'}}>
              <img className="object-cover   h-full w-full" src={students} alt="" />
            </div>
            
          </div>
        </div>
        
       
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 110 1440 200"><path fill="#181b30" fill-opacity="1" d="M0,128L60,154.7C120,181,240,235,360,218.7C480,203,600,117,720,117.3C840,117,960,203,1080,229.3C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      <div  className='pl-14 h-full align-items-center' style={{ backgroundColor: '#181B30',height:'780px' }}>
        <div className='align-items-center'>
        <h2 className='text-white text-center font-bold text-4xl pb-5 mb-20 ' style={{fontSize:'45px'}}>Explore Your Choice</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center p-6 pr-16 mr-5 gap-1 ">
        {CardsData.map(({ id, img, title, desc }) => {
          return (
            <div
              key={id}
              className="text-white shadow-md rounded-lg overflow-hidden relative group mb-9 "
            >
              <img
                src={img}
                alt=""
                className="w-full max-w-[300px] h-[270px] rounded-lg "
              />
              {/* overlay section */}
              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <Fade cascade damping={0.05}>
                      {desc}
                    </Fade>
                    <div>
                      <button className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                        View
                      </button>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
      </div>
      <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are various FAQ which would be useful to you. Tke a look into it.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How to find a Scribe?"
              text="In the hero section select explore now option then choose need a scribe. Then you can add the date on which you need the scribe."
            />
            <AccordionItem
              header="Is there any choice to find a person with similiar interest?"
              text="Ofcourse just search your field of interest then you can see students in those fields and can connect with them."
            />
            <AccordionItem
              header="Is this platform completely free?"
              text="Yes this platform is absolutely free to support peer learning and growth of students."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="Through which medium i could connect a student?"
              text="You can connect either through watsapp link or through mail provided." />
            <AccordionItem
              header="Is this platform Safe?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How to add my skills again?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3056D3" stop-opacity="0.36" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="container mx-auto">
        <p>&copy; 2024 ClassMate. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default Landingpage;
const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);
  
  
    const handleToggle = () => {
     
      setActive(!active);
    };
  
  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
      </div>
    </div>
  );
};
