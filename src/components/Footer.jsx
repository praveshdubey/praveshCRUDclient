import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    <div className='main-footer'>
        <div className='container'>
            <div className='rows'>
                <p className='col'>
                   All right reserved by pravesh dubey &copy;{new Date().getFullYear()}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer