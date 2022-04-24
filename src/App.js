import React from 'react'
import "./style.css";
import "./App.css";
import Profile from './Profile/Profile';


function App() {
  const profile = [  
    {
    fullname:'Mohamed Wanna',
    bio: 'Licence',
    profession: 'Freelance',
},

];
const handleName = (username) => { 
  alert(
     `My name is ${username}`)

 }
  return (

    <div className="App">
    <Profile profileprop={profile}  title= "Hey! It's sooo nice to see you here!" handleName={handleName}>
      <img src="/images/bestnatureimage.jpg"  alt="nature"style={{border: '5px solid #ddd',borderRadius:'10px',padding: '5px',margin: '150px',boxShadow: '5px 10px 8px 10px #888888',width:"1000px", height:"800px"}}/>
    </Profile>
    </div>
  );
}

export default App;
