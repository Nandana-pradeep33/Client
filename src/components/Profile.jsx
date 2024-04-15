import { Link } from 'react-router-dom';

import React from 'react';
import profile from '../assets/profile.jpeg';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function Profile() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex">
        <div className="w-1/2 h-72 bg-white-200 flex flex-col justify-center items-center pt-8">
          <img className='h-28 w-28 rounded-full mb-4' src={profile} alt="" />
          <div className="flex flex-col items-center">
            <p className="font-bold mb-2">John Doe</p>
            <div className="mb-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Follow
              </button>
            </div>
            {/* Rating Option Here */}
          </div>
        </div>
        <div className="w-1/2 h-72 bg-white-200 flex flex-col justify-start items-start p-8">
          <div className="mb-1">
            <p><span className="font-bold">FULLNAME:</span> John Doe</p>
            <hr className="mt-1 mb-1 w-full" />
          </div>
          <div className="mb-1">
            <p><span className="font-bold">EMAIL:</span> johndoe@example.com</p>
            <hr className="mt-1 mb-1 w-full" />
          </div>
          <div className="mb-1">
            <p><span className="font-bold">PHONENO:</span> 123-456-7890</p>
            <hr className="mt-1 mb-1 w-full" />
          </div>
          <form>
          <div className="mb-1">
            
            <label className='font-bold'>Class:</label>
            <input type='text' className='border border-black pl-2'></input>
            <hr className="mt-1 mb-1 w-full" />
          </div>
          <div className="mb-1">
          <label className='font-bold'>Branch:</label>
            <input type='text' className='border border-black pl-2'></input>
            <hr className="mt-1 mb-1 w-full" />
          </div>
          </form>
          <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gray-100 p-8 ">
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
        <Link to="/">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-3 px-4 rounded">
    Submit
  </button>
</Link>
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

export default Profile;
