import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import React, { useState } from 'react'

import profile from '../assets/profile.jpeg';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function App() {
  const [year , setYear] = useState('');
  const [branch, setBranch] = useState('');
  const location = useLocation();
  const userData = location.state;

  return (
    <div className="flex flex-col h-screen">
      <div className="w-full max-w-4xl flex-1 flex">
        <div className="w-1/2  bg-white-200 flex flex-col justify-center items-center pt-8">
          <img className='h-28 w-28 rounded-full mb-4 ml-5' src={profile} alt=""  style={{marginLeft:"6rem"}}/>
          <div className="flex flex-col items-center">
            <p className="font-bold mb-2" style={{marginLeft:"6rem"}}>{userData.name}</p>
            <div className="mb-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"style={{marginLeft:"6rem"}}>
                Follow
              </button>
            </div>
            {/* Rating Option Here */}
          </div>
        </div>
        <div className="w-1/2 bg-white-200 flex flex-col justify-start items-start ml-5 p-8" style={{marginLeft:"22rem"}}>
          <div className="mb-1">
            <p><span className="font-bold">FULLNAME:</span> {userData.name}</p>
            <hr className="mt-1 mb-1 w-full" />
          </div>
          <div className="mb-1">
            <p><span className="font-bold">EMAIL:</span> {userData.email}</p>
            <hr className="mt-1 mb-1 w-full" />
          </div>
          <div className="mb-1">
            <p><span className="font-bold">PHONENO:</span> {userData.contact}</p>
            <hr className="mt-1 mb-1 w-full" />
          </div>
          <form>
          <div className="mb-1">
            
            <label className='font-bold'>Class:</label>
            <input type='text' className='border border-black pl-2'
            onChange={(e) => setYear(e.target.value)} ></input>
            <hr className="mt-1 mb-1 w-full" />
          </div>
          <div className="mb-1">
          <label className='font-bold'>Branch:</label>
            <input type='text' className='border border-black pl-2'
            onChange={(e) => setBranch(e.target.value)}></input>
            <hr className="mt-1 mb-1 w-full" />
          </div>
          </form>
          
        </div>
      </div>
      <div className="w-1/2 h-72 bg-white-200 flex-1p-8 mb-5" style={{marginLeft:"39rem"}}>


      <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={skillOptions}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.title}
            </li>
          )}
          style={{ width: '50%' }}
          renderInput={(params) => (
            <TextField {...params} label="Add Skill" placeholder="Favorites" />
          )}
        />
        <div className="mt-4">
        <Link
  to={{
    pathname: '/',
    state: {
      name: userData.name,
      email: userData.email,
      contact: userData.contact,
      branch: branch,
      year: year,
    },
  }}
>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-3 px-4 rounded">
    Submit
  </button>
</Link>
          </div>
      </div>
    </div>
  );
}

  const skillOptions = [
    { title: 'Dance' },
    { title: 'Music' },
    { title: 'Web Development' },
    { title: 'AI' },
    { title: 'Flutter' },
    { title: 'Academics' },
    { title: 'Act as Scribe' }
  ];

export default App;