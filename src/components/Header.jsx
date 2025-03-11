import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import AppContext from '../context/AppContext'
function Header() {
    const { isLoggedIn, userData } = useContext(AppContext)
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

            </ul>
            {
                isLoggedIn ? (
                    <div className="group relative size-8 bg-slate-100 rounded-full grid place-items-center cursor-pointer">
                        {'B'}
                        <ul className=" absolute hidden group-hover:block top-8 overflow-hidden p-2 border border-slate-300 trans bg-slate-200 rounded-lg shadow-lg text-sm w-24">
                            <Link to='/profile'>
                                <li className='hover:bg-slate-300 cursor-pointer  my-1 trans'>Account</li>
                            </Link>
                            <li className='hover:bg-slate-300 cursor-pointer  my-1 trans'>Verify email</li>
                            <li className='text-red-400 hover:bg-slate-300 cursor-pointer  my-1 trans'>Log out</li>
                        </ul>
                    </div>
                ) : (
                    <Link to='/login'>
                        <p className="hidden md:inline text-slate-700 hover:underline paragraph1 cursor-pointer trans">Sign in</p>
                    </Link>
                )

            }

        </nav>
    )
}

export default Header
