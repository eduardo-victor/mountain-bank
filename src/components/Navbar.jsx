import {React, useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import Logo from '../assets/logo.png'

const Navbar = () => {
    const [nav, setNav]  = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='w-screen h-[80px] bg-bluedefault fixed drop-shadow-lg'>
        <div className='px-8 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <a href=""><img src={Logo} className='w-14 sm:w-16 '/></a>
            </div>
            <ul className='hidden md:flex'>
                <li><a className='text-xl text-yellowdefault  hover:text-whitedefault hover:border-b-2 hover:border-yellowdefault' href="">Inicio</a></li>
                <li><a className='text-xl text-yellowdefault ml-8  hover:text-whitedefault hover:border-b-2 hover:border-yellowdefault' href="">Serviços</a></li>
                <li><a className='text-xl text-yellowdefault ml-8 hover:text-whitedefault hover:border-b-2 hover:border-yellowdefault' href="">Carreira</a></li>
                <li><a className='text-xl text-yellowdefault ml-8 hover:text-whitedefault hover:border-b-2 hover:border-yellowdefault' href="">Sobre</a></li>
            </ul>
            <div className='hidden md:flex pr-4'>
                <button className='hover:text-yellowdefault hover:border-yellowdefault px-6 py-3 mr-4'>Entrar</button>
                <button className='hover:text-yellowdefault hover:border-yellowdefault px-6 py-3'>Registrar</button>
            </div>
            <div className='md:hidden' onClick={handleClick}>
                {!nav ? <MenuIcon className='w-8 text-yellowdefault' /> : <XIcon className='w-8 text-yellowdefault'/>}
            </div>
        </div>
        <ul className={!nav ? 'hidden' : 'absolute bg-bluedefault w-full px-8'}>
            <li className='border-b-2 border-whitedefault w-full '><a className='text-xl text-yellowdefault  hover:text-whitedefault' href="">Inicio</a></li>
            <li className='border-b-2 border-whitedefault w-full'><a className='text-xl text-yellowdefault  hover:text-whitedefault' href="">Serviços</a></li>
            <li className='border-b-2 border-whitedefault w-full'><a className='text-xl text-yellowdefault  hover:text-whitedefault' href="">Carreira</a></li>
            <li className='border-b-2 border-whitedefault w-full'><a className='text-xl text-yellowdefault  hover:text-whitedefault' href="">Sobre</a></li>           
            <div className='flex flex-col my-4'>
                <button className='hover:text-yellowdefault hover:border-yellowdefault px-8 py-3 mb-4'>Entrar</button>
                <button className='hover:text-yellowdefault hover:border-yellowdefault px-8 py-3'>Registrar</button>
            </div> 
        </ul>
    </div>
  )
}

export default Navbar