import React from 'react';
import profile from '../assets/profile.jpeg';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useUser } from './UserContext';


import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useState , useEffect  } from 'react'


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Profile2 = () => {

  
  const [averageRating, setAverageRating] = useState(0);
  const [ratingDistribution, setRatingDistribution] = useState([]);


  const generateStarIcons = (rating) => {
    const totalStars = 5;
    const filledStars = rating;
    const emptyStars = totalStars - filledStars;
  
    const starIcons = [];
  
    // Filled stars
    for (let i = 0; i < filledStars; i++) {
      starIcons.push(<span key={i} className="text-yellow-500">★</span>);
    }
  
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      starIcons.push(<span key={filledStars + i} className="text-gray-300">★</span>);
    }
  
    return starIcons;
  };


   
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email');
    const [userDetails, setUserDetails] = useState(null);
    const [year , setYear] = useState('');
  const [branch, setBranch] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkillChange = (event, selectedOptions) => {
    setSelectedSkills(selectedOptions.map((option) => option.title));
  };
  useEffect(() => {
    if (userDetails && userDetails.year !== null && userDetails.branch !== null) {
      setYear(userDetails.year || '');
      setBranch(userDetails.branch || '');
    }
  }, [userDetails]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          
          const response = await axios.put('http://localhost:3001/updateUser', { email: userDetails.email, year, branch,skills: selectedSkills });
          console.log(response.data);
          window.location.reload(); 
          // Handle success, e.g., show a success message
        } catch (error) {
          console.error(error);
          // Handle error, e.g., show an error message
        }
      };
      
   /*   useEffect(() => {
        if (email) {
          axios.get(`http://localhost:3001/userDetails/${email}`)
            .then(response => {
              const { userDetails, averageRating, ratingDistribution } = response.data;
              setUserDetails(userDetails);
              setAverageRating(averageRating);
              setRatingDistribution(ratingDistribution);
            })
            .catch(error => {
              console.error('Error fetching user details:', error);
            });
        }
      }, [email]);*/
      useEffect(() => {
        if (email) {
          axios.get(`http://localhost:3001/userDetails/${email}`)
            .then(response => {
              const { userDetails} = response.data;
              setUserDetails(userDetails);
              
            })
            .catch(error => {
              console.error('Error fetching user details:', error);
            });
        }
      }, [email]);
  
  return (
    <div className="flex flex-col h-screen">
      <div className="w-full max-w-4xl flex-1 flex">
        <div className="w-1/2  bg-white-200 flex flex-col justify-center items-center pt-8">
          <img className='h-28 w-28 rounded-full mb-4 ml-5' src={profile} alt=""  style={{marginLeft:"6rem"}}/>
          <div className="flex flex-col items-center">
          {userDetails ? (
            <p className="font-bold mb-2" style={{marginLeft:"6rem"}}>{userDetails.name}</p>

        ) : (
            <p>Loading user details...</p>
          )}
            <div className="mb-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"style={{marginLeft:"6rem"}}>
                Follow
              </button>
              
            </div>
            {/* Rating Option Here */}
          </div>
        </div>
        {userDetails ? (
        <div className="w-1/2 bg-white-200 flex flex-col justify-start items-start ml-5 mt-5 pt-16" style={{marginLeft:"22rem"}}>
        
          <div className="mb-2">
            <p><span className="font-bold p-3">FULLNAME:</span>{userDetails.name}</p>
            <hr className="mt-1 mb-1 w-full" />
          </div>
          <div className="mb-2">
            <p><span className="font-bold p-3">EMAIL:</span>{userDetails.email}</p>
            <hr className="mt-1 mb-1 w-full" />
          </div>
          <div className="mb-2">
            <p><span className="font-bold p-3">PHONENO:</span>{userDetails.contact}</p>
            <hr className="mt-1 mb-1 w-full" />
          </div>
          <div className="mb-2">
            <p><span className="font-bold p-3 ">CLASS:</span>{userDetails.year}</p>
            <hr className="mt-1 mb-1 w-full" />
          </div>
          <div className="mb-4 w-full">
            <p><span className="font-bold p-3">BRANCH:</span>{userDetails.branch} </p>
            <hr className="mt-1 mb-1 w-full" />
          </div>
          <p className='w-full'><span className="font-bold p-2 ml-1 w-full">Skills: </span>{userDetails.skills ? userDetails.skills.join(', ') : 'Skills not available'}</p>

       
          <div className="mt-4">
         
          <p>Rating:{userDetails.rating}</p>
         { /* <div className="rating">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={index < averageRating ? 'star active' : 'star'}
              >
                ★
                <span className="rating-count">{ratingDistribution[index]}</span>
              </span>
            ))}

          </div> */}
          </div>
        </div>
        ) : (
            <p>Loading user details...</p>
          )}
      </div>
    
      <div className="w-1/2 h-72 bg-white-200 flex-1p-8 mb-5" style={{marginLeft:"40rem"}}>


      
      <Autocomplete
  multiple
  id="checkboxes-tags-demo"
  options={skillOptions}
  disableCloseOnSelect
  getOptionLabel={(option) => (option ? option.title : '')}
  onChange={handleSkillChange}
  value={selectedSkills.map((skill) => skillOptions.find((option) => option.title === skill))}
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
 

 <button  onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-3 px-4 rounded">
   Set Skills
 </button>

         </div>
      </div>
    </div>
  );
}

  const skillOptions = [
    { title: 'Dance' },
    { title: 'Music' },
    { title: 'Web Development' },
    { title: 'Artificial Intelligance' },
    { title: 'Flutter' },
    { title: 'Academics' },
    { title: 'Act as Scribe' }
  ];

export default Profile2;
