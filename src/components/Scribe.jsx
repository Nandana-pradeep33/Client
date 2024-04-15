import React, { useState } from 'react';

import  scribeBackgroundImage from '../assets/support_students.png';
//import bookBackgroundImage from './schl1.jpg';
//import { hover } from '@testing-library/user-event/dist/hover';


const Scribe = () => {
  const [dates, setDates] = useState(['']);

  const [showBottomBoxLeft, setShowBottomBoxLeft] = useState(true);
  const [showBottomBoxRight, setShowBottomBoxRight] = useState(false);
  

  const handleAddDate = () => {
    setDates([...dates, '']);
  };

  const handleDateChange = (index, value) => {
    const newDates = [...dates];
    newDates[index] = value;
    setDates(newDates);
  };
  
  const textStyle = {
    fontSize: '1.6rem',
    fontFamily: 'serif', 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  };

  const textStyle2 = {
    fontSize: '1.4rem',  
  };


  const buttonStyle ={
    fontSize: '1.1rem',
  }

  const handleRightDivClick = () => {
      setDates(['']); // Clear the dates
      setShowBottomBoxLeft(false); // Hide the bottom box Left
      setShowBottomBoxRight(true); // Show the bottom box Right
  };

  const handleLeftDivClick = () => {
    setShowBottomBoxLeft(true); // Show the bottom box Left
    setShowBottomBoxRight(false); // Hide the bottom box Right
  };


  return (
    
    <div className='mainbox w-screen h-screen ' >

      <div className="topbox w-screen h-1/6"style={{backgroundColor:'#006B3C'}}>

        {/* left Div */}
        <div className="float-left w-1/2 h-full flex justify-center items-center border border-black hover:bg-green-500"
        onClick={handleLeftDivClick}>
          <p className="text-white text-lg font-bold hover:text-black transition-transform duration-300 transform hover:scale-110" style={textStyle2}>Do you need a scribe?</p>
        </div>

        {/* right Div */}
        <div className="float-left w-1/2 h-full flex justify-center items-center hover:bg-green-500 border border-black"onClick={handleRightDivClick}>
          <p className="text-white text-lg font-bold hover:text-black transition-transform duration-300 transform hover:scale-110" style={textStyle2}>Do you want to act as a scribe?</p>
        </div>
      </div>

      
      {/* bottom div */}

      {showBottomBoxLeft && (
      <div className="bottombox w-screen h-5/6 "style={{backgroundColor:'#FFFDD0'}}>

        {/* choosedatetext div */}
        <div className='float-left w-1/4 h-1/4 flex justify-center items-center' style={{marginLeft:576}}>
          <p className='text-black text-lg font-size-15 pt-24'style={textStyle}>Choose The Date</p>
        </div>

        {/* contacttext div */}
        <div className='float-left h-1/4 flex justify-center items-center' style={{marginLeft:56,width:400}}>
          <p className='text-black text-lg font-size-15 flex justify-center items-center pt-24'style={textStyle}>Contact</p>
        </div>

        {/* Picture Div */}
        <div className='float-left h-2/3 bg-green-500 rounded-full'style={{
          marginLeft:100,
          width:400,
          backgroundImage:`url(${scribeBackgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition:'center'
          }}>  
          </div>
        
        {/* Central Div */}
        <div className="float-left w-1/6 border border-black  flex flex-col justify-between flex justify-center items-center "
         style={{
          marginLeft:150,
          marginRight:'auto',
          marginTop:40,
          //backgroundColor:'#C5E5FE'
          }}>
          <div className="mx-5 mt-5">
            {dates.map((date, index) => (
              <div key={index} className="flex items-center mb-4">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => handleDateChange(index, e.target.value)}
                  className="border border-gray-400 rounded px-3 py-2 mr-2"
                />
                {index === dates.length - 1 && (
                  <button
                   onClick={handleAddDate}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:text-black transition-transform duration-300 transform hover:scale-110"
                  >
                    +
                  </button>
                )}
              </div>
            ))}
          </div>
          <button className=" font-bold bg-blue-500 text-white px-4 py-2 rounded mx-5 mb-5 hover:text-black transition-transform duration-300 transform hover:scale-110 rounded-full"style={buttonStyle}>SUBMIT</button>
        </div>

        {/*Contact Div*/}
        <div className='float-left h-2/3 border border-black'style={{
          marginLeft: 110,
          width:400,
          }}>  
        </div>

      </div>

      )}





      {showBottomBoxRight && (
      <div className="bottombox w-screen h-5/6 "style={{backgroundColor:'#FFFDD0'}}>

        {/*<div className='w-1/4 h-1/4 flex justify-center items-center' style={{marginLeft:'auto',marginRight:'auto'}}>
        </div>*/}

        {/* Picture Div */}
        <div className='float-left h-2/3 bg-green-500 rounded-full'style={{
          marginLeft:100,
          width:400,
          marginTop:154,
          backgroundImage:`url(${scribeBackgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition:'center'
          }}>  
        </div>
        
        {/*Selectiontext Div*/}
        <div className='h-1/4 flex justify-center items-center' style={{marginLeft:950,width:400}}>
          <p className='text-black text-lg font-size-15 flex justify-center items-center pt-24'style={textStyle}>Select Dates you prefered</p>
        </div>

        {/*Selection Div*/}
        <div className='float-left h-2/3 border border-black'style={{
          marginLeft: 450,
          width:400
          }}>  
        </div>

      </div>

      )}

    </div>
  );
};

export default Scribe;
