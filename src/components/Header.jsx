import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
function Header() {
    return (
        <nav className='bg-slate-200 shadow-md flex  justify-around h-16 items-center'>
            <h1 className='heading3 cursor-pointer'>
                <span className='text-slate-500'>Boris</span>
                <span className='text-slate-700'>Estate</span>
            </h1>
            <form action="#" className='bg-slate-100 px-3 py-2 rounded-lg flex items-center'>
                <input type="text" className="bg-transparent  outline-none text-black "
                    placeholder='Search' />
                <span>
                    <FaSearch className='text-slate-600' />
                </span>
            </form>
            <ul className='flex gap-5'>
                <Link to='/' >
                    <li className="hidden md:inline text-slate-700 hover:underline paragraph1 cursor-pointer trans">Home</li>
                </Link>
                <Link to='/about'>
                    <li className="hidden md:inline text-slate-700 hover:underline paragraph1 cursor-pointer trans">About</li>
                </Link>
                <Link to='/login'>
                    <li className="hidden md:inline text-slate-700 hover:underline paragraph1 cursor-pointer trans">Sign in</li>
                </Link>
            </ul>

        </nav>
    )
}

export default Header
