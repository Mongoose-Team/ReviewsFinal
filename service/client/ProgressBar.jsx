import React from 'react';

const ProgressBar = (props) => {
    const  completed = props.completed;
  
    const containerStyles = {
      height: 7,
      width: '35%',
      backgroundColor: "#ebebeb",
      borderRadius: 0,
      marginTop:3,
    
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: '#525252',
      borderRadius: 0,
      textAlign: 'left',
      
    }
  
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          
        </div>
      </div>
    );
  };

export default ProgressBar;