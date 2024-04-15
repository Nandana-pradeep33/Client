
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
    title: "Sunset",
    desc: "Each character will appear one by one",
  },
  {
    id: 2,
    img: Photo1,
    title: "Dog",
    desc: "Each character will appear one by one",
  },
  {
    id: 3,
    img: Photo3,
    title: "Sunrise",
    desc: "Each character will appear one by one",
  },
  {
    id: 4,
    img: Photo4,
    title: "Sunrise",
    desc: "Each character will appear one by one",
  },
  {
    id: 5,
    img: Photo5,
    title: "Sunrise",
    desc: "Each character will appear one by one",
  },
  {
    id: 6,
    img: Photo6,
    title: "Sunrise",
    desc: "Each character will appear one by one",
  },
  {
    id: 7,
    img: Photo7,
    title: "Sunrise",
    desc: "Each character will appear one by one",
  },
  {
    id: 8,
    img: Photo8,
    title: "Sunrise",
    desc: "Each character will appear one by one",
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
    </div>
  );
};

export default Landingpage;
