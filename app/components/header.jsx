import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <header className='header' >
    <div className="container">
        <div className="logo">
            <Link href='/'>Home</Link>
        </div>
        <div className="links">
            <Link href='/about'>about</Link>
            <Link href='/about/team'>Our Team</Link>
            <Link href='/about'>about</Link>
            <Link href='/code/repos'>Code</Link>
        </div>
    </div>
    </header>
    </>
  )
}

export default Header