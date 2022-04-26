import React from 'react'

const Profile = (props) => {
console.log(props)
    return( 
    <div>
       <h1 style={{color:'blue',fontFamily:'Lucida,serif',fontSize:'1.4em',wordSpacing:'5.5px',letterSpacing:'0.75px'}}>
        {props.title}
       </h1>
    <table style={{border:'2px solid black',borderCollapse:'collapse',margin:'35px',width:'90%',tableLayout:'fixed',boxShadow: '5px 10px 18px #888888'}}> 
        <tr >
            <td style={{textAlign:'center', margin:'5px',padding:'5px',backgroundColor:'#EDAFAD',fontFamily: 'Lucida,serif',fontWeight:'bolder'}}>Full name</td>
            <td style={{textAlign:'center',margin:'5px',padding:'5px', backgroundColor:'#F4F3EE',fontFamily: 'Lucida,serif',fontWeight:'bolder'}}>Bio</td>
            <td style={{textAlign:'center',margin:'5px',padding:'5px',backgroundColor:'#BCB8B1',fontFamily: 'Lucida,serif',fontWeight:'bolder'}}>Profession</td>
        </tr>
            {
            props.profileprop.map(
                (el,i) => 
                <tr key ={i}>
                    <td style={{textAlign:'center',margin:'5px',padding:'5px',color:'grey',backgroundColor:'#EDAFAD',fontFamily:'Arial,sans-serif',fontWeight:'bold'}}>{el.fullname}</td>
                    <td style={{textAlign:'center',margin:'5px',padding:'5px',color:'grey',backgroundColor:'#F4F3EE',fontFamily: 'Arial,sans-serif',fontWeight:'bold'}}>{el.bio}</td>
                    <td style={{textAlign:'center',margin:'5px',padding:'5px',color:'grey',backgroundColor:'#BCB8B1',fontFamily: 'Arial,sans-serif',fontWeight:'bold'}}>{el.profession}</td>
                    <button style={{textAlign:'center',backgroundColor:'#F4F3EE',fontFamily: 'Georgia,serif',fontWeight:'bolder',margin:'5px',padding:'5px'}} onClick={() => props.handleName(el.fullname)}>User Name</button>
                </tr>
            )
            }
    </table>
    {props.children}
    
        
        </div>
    )

};
Profile.defaultProps = {
    title: "My Profile",
};

export default Profile;
