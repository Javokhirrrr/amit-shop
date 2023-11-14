import React from 'react'
import logo from "../assest/logo.png"

const Header = () => {
  return (
    <header className='fixed shadow-md w-full h-16'>
        {/* desktop */}

        <div className=''>
            <div className=''>
                <img src={logo} className="w-full" />
            </div>
        </div>

        {/* mobile */}
    </header>
  )
}

export default Header

