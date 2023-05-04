import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header>
    <div>
    <div className='topNav'>
        <Link href="/" passHref={true}><Image alt='logo' src={'/images/logo_black.png'} width={50} height={50}></Image></Link>
        <nav>
          <ul>
            <li>
              <Link href="/" passHref={true}>Home  </Link>
            </li>
            <li>
              <Link passHref={true} href="/events">Events  </Link>
            </li>
            <li>
              <Link passHref={true} href="/about">About Us</Link>
            </li>
          </ul>



        </nav>

      </div>
      <p className='title'><b>Events you want to visit</b> </p>
    </div>
      

    </header>
  )
}

export default Header
