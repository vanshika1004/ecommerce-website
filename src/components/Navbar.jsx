import React, { useState } from 'react'
import { FaSearch,FaUser,FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { NavLink,Link } from 'react-router-dom';
import logo from '/images/logo.png';




const Navbar = () => {
    const [isMenuOpen,setisMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setisMenuOpen(!isMenuOpen);
    }
    const navItems=[
        {title:"Jwellery & Accessories",path:"/"},
        {title:"Clothing & Shoes",path:"/"},
        {title:"Home & Living",path:"/"},
        {title:"Toys & Entertainment",path:"/"},
        {title:"Art & Collectibles",path:"/"},
        {title:"Craft Supplies & tools",path:"/"},
    ]
  return (
    <header className='max-w-screen-2xl xl:px-28 px-4 absolute top-0 left-0 right-0'>
        <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3'>
        <FaSearch className='text-Black w-5 h-5 hidden md:block cursor-pointer' />
        <NavLink to="/"><img src={logo} width={150} /></NavLink>
        <div className='text-lg text-Black sm:flex items-center gap-4 hidden'>
            <NavLink to="/" className="flex items-center gap-2"><FaUser /> Account</NavLink>
            <NavLink to="/cart" className="flex items-center gap-2"><FaShoppingBag /> Shopping</NavLink>
        </div>

        {/* navbar for small devices */}
        <div className='sm:hidden'>
            <button onClick={toggleMenu}>
                {
                    isMenuOpen ? <FaTimes className='w-5 h-5 text-Black'/> : <FaBars className='w-5 h-5 text-Black'/>
                }
            </button>
        </div>
        </nav>

        <hr/>
        
        {/* Categories */}
        <div className='pt-4'>
            <ul className='lg:flex items-center justify-between text-Black hidden'>
                {
                    navItems.map(({title,path})=>(
                        <li key={title} className='hover:text-orange-500'>
                            <Link to="/">{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>

        {/* only mobile menu items */}
        <div>
        <ul className={`bg-Black text-white px-4 py-2 rounded ${isMenuOpen?"":"hidden"}` }>
                {
                    navItems.map(({title,path})=>(
                        <li key={title} className='hover:text-orange-500 my-3 cursor-pointer'>
                            <Link to="/">{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </header>
  )
}

export default Navbar