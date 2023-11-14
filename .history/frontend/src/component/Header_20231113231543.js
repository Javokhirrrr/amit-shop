import React from 'react'
import logo from "../assest/logo.png"
import { Link } from 'react-router-dom'
import {FaUserAlt} from "react-icons/fa"
import {BsFillCartFill} from "react-icons/bs"

const Header = () => {
  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-6'>
        {/* desktop */}

        <div className='flex items-center justify-between h-full'>
            <Link to={""}>
              <div className='h-10'>
                <img src={logo} className="h-full" />
              </div>
            </Link>

            <div className=''>
                <nav>

                </nav>
                <div className=''>
                    <BsFillCartFill/>
                </div>
                <div className=''>
                    <FaUserAlt/>
                </div>
            </div>
        </div>

        {/* mobile */}
    </header>
  )
}

export default Header

