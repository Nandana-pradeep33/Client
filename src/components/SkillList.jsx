import React,{ useState , useEffect } from 'react'
import whatsapp from '../assets/whatsapp.png';
import contact from '../assets/contact2.png';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const textStyle = {
  fontSize: '1.6rem',
  fontFamily: 'serif',
  marginLeft:75,
  marginTop:20,
};

const SkillList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedStarsMap, setSelectedStarsMap] = useState({});  

    let { title } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [ratingPopups, setRatingPopups] = useState({});

    const toggleRatingPopup = (userId) => {
        setSelectedUserId(userId); // Assuming setSelectedUserId is a state setter function
    setShowRatingPopup(!showRatingPopup);
        setRatingPopups(prevState => ({
          ...prevState,
          [userId]: !prevState[userId] // Toggle the popup for the specific user
        }));
      };
      

    const [selectedUserId, setSelectedUserId] = useState(null);

  const [showRatingPopup, setShowRatingPopup] = useState(false);
  const [selectedStars, setSelectedStars] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:3001/usersBySkill/${title}`)
      .then(response => {
        setUsers(response.data);
        console.log(users);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users by skill:', error);
        setLoading(false);
      });
  }, [title]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (users.length === 0) {
    return <p>No users found with the skill {title}</p>;
  }


  const getSelectedStars = (userId) => {
    return selectedStarsMap[userId] || 0;
  };
 
  const handleStarClick = (userId,starValue) => {
    // Update selectedStars to the clicked starValue
    setSelectedStarsMap(prevState => ({
        ...prevState,
        [userId]: starValue
      }));
    //setSelectedStars(starValue);
    console.log(starValue);
  };

  const handleClear = (userId) => {
    setSelectedStarsMap(prevState => ({
      ...prevState,
      [userId]: 0
    }));
  };

  const handleSubmit = async (userId) => {
    try {
        const selectedStars = getSelectedStars(userId);
        if (!selectedStars) {
            console.error('No stars selected for user');
            return;
          }
      
  
      // Send a request to the backend to update the user's rating
      const response = await axios.put(`http://localhost:3001/updateRating/${selectedUserId}`, { rating: selectedStars });
      console.log(response.data);
      
      // Handle success, e.g., show a success message
    } catch (error) {
      console.error(error);
      // Handle error, e.g., show an error message
    }
  };
  
  return (
    <div className='mainbox w-screen h-screen'>
        <div className='skillname w-3/4 h-20 flex justify-center items-center ml-auto mr-auto 'style={{backgroundColor:'#181B30', marginBottom:'3rem'}}>
            <p className='text-white text-lg font-bold  '>{title}</p>
        </div>
        {users.map(user => (
            <div  key={user._id}>
        <div key={user._id} className=' w-3/4 h-20 border border-black ml-auto mr-auto mt-5 rounded-lg ' style={{marginTop:'2rem'}} >

          <div className='name w-1/2 h-20 float-left'>
            <div className='contact rounded-full float-left'style={{
             width:50,
             height:50,
             marginLeft:10,
             marginTop:14,
             backgroundImage:`url(${contact})`,
             backgroundRepeat: 'no-repeat',
             backgroundSize: 'cover',
             backgroundPosition:'center' 
            }}>
            </div> 
            <p style={textStyle}>{user.name}</p> 
          </div>
          <div className='connect float-left'style={{
            height:80,
            width:400
          }}>
            <p className='pt-5 font-bold'style={{
             fontSize: '1.3rem',
             paddingLeft:310, 
             fontFamily:'monospace'
            }}>Connect</p>
          </div>
          <div className='icon float-left 'style={{
            width:80,
            height:70,
            backgroundImage:`url(${whatsapp})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition:'center'
          }}>   
          </div>
          <div className='rate float-left bg-yellow-500 font-bold rounded float-left border border-black mr-2 'style={{
            fontSize: '1.1rem',
            marginTop:15,
            height:50,
            width:70  //92
          }}onClick={() => toggleRatingPopup(user._id)}>
            <p style={{
              marginLeft:17,
              marginTop:10
            }}>Rate</p>
          </div>
        </div>
        
        
        {/* Rating popup */}
       {/* {showRatingPopup && (
          <div className="rating-popup">
            <div className="stars">
             {[1, 2, 3, 4, 5].map((value) => (
                <span 
                  key={value} 
                  onClick={() =>  handleStarClick(value)}
                  style={{ color: selectedStars >= value ? 'orange' : 'gray', cursor: 'pointer' }}
                >
                 ★
                </span>
             ))}*/}

{ratingPopups[user._id] && (
          <div className="rating-popup">
            <div className="stars">
              {[1, 2, 3, 4, 5].map((value) => (
                <span
                  key={value}
                  onClick={() => handleStarClick(user._id, value)} 
                  style={{ color: getSelectedStars(user._id) >= value ? 'orange' : 'gray', cursor: 'pointer' }}
                
                >
                  ★
                </span>
              ))}
            <button className="submit-button font-bold bg-blue-500 rounded px-4 py-2 ml-2 mt-2 hover:text-white transition-transform duration-300 transform hover:scale-110"
           onClick={() => handleSubmit(user._id)}>Submit</button>
            <button className="clear-button font-bold bg-blue-500 rounded px-4 py-2 ml-2 mt-2 hover:text-white transition-transform duration-300 transform hover:scale-110"onClick={() => handleClear(user._id)}>Clear</button>
          </div>
          
        </div>
        
      )}
      
      </div>
         ))}  
  
    </div>
  );
}

export default SkillList
