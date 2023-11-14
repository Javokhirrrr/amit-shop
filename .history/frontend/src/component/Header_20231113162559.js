import React from 'react'
import logo from "../assest/logo.png"

const Header = () => {
  return (
    <header className='fixed shadow-md'>
        {/* desktop */}

        <div className=''>
            <div className=''>
                <img src={logo} />
            </div>
        </div>

        {/* mobile */}
    </header>
  )
}

export default Header

