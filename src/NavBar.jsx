import React from "react";



const NavBar = (props) => {

  const {navbarMessage, navbarNum} = props
    const stylesNav = {
        width:'100vw',
        height:'100px',
        backgroundColor: 'rgb(25, 37, 49)',
        display:'flex',
        justifyContent:'center',
        aligntItems:'center',
        color:'white'
    }
  return(

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={stylesNav} >
        <a href="/" class="navbar-brand" style={{color:"white"}}>Home</a>
{navbarMessage}
{navbarNum}
    </nav>
  );
};

export default NavBar;
