import React from 'react';
import ScrollToTop from "react-scroll-to-top";

const ScrollTop = () => {
    return (
        <ScrollToTop 
            smooth 
            component={<i className='bx bxs-chevrons-up bx-flashing' style={{color:'white', fontSize: '2em', textShadow: '0px 0px 2px rgb(0, 0, 0)'}} ></i>} 
            style={{backgroundColor: '#9595954d'}}
        />
    )
}

export default ScrollTop;