import React from'react'
const ProgressBar = (props) => {
    const { text,icon,bgcolor, completed } = props;
  
    const containerStyles = {
      height: 20,
      width: '40%',
      backgroundColor: "#E0E0E0",
      borderRadius: 8,
      margin: 35,
      flex:'60%',
      marginTop: 25

    }
    const list={
      display:'flex',
      flexdirection:'row',
      justifycontent:'center',
      alignitems:'center',
      marginTop: 25,
      backgroundColor:'#F5F5F5	'
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
    const textstyles={
      fontSize:'20px',
      flex:'20%',
      padding:'20px'
    }
  
    const labelStyles = {
      color: 'white',
      fontSize:'10px',
      padding:'5px',
      fontWeight:'bold'
    }
    const iconstyle={
      flex:'10%',
      padding:'10px'
    }
  
    return (
      <div style={list}>
      <div style={textstyles}>{text}</div>
      <div style={iconstyle}>{icon}</div>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
      </div>
    );
  };
  
  export default ProgressBar;