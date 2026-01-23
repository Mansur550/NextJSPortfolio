'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';



const link = [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About' },
    { url: '/portfolio', title: 'Portfolio' },
    { url: '/contact', title: 'Contact' },
]

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='h-full flex items-center justify-between px-4 sm:px8 md:px-12 lg:px-20 xl:px-48'>

            {/* logo */}
            <div className=' lg:flex '>
                <Link href="/"
                    className='text-sm bg-black rounded-md p-1 font-semibold
                flex items-center justify-center'>
                    <span className='text-white mr-1'>Mansur</span>
                    <span className='w-13 h-8 rounded bg-white text-black pl-1 pr-1 flex items-center justify-center'>Islam</span>
                </Link>
            </div>
            {/* links */}
            <div className="hidden md:flex gap-4  ">
                {link.map(link => (
                    <Link href={link.url} key={link.title}>{link.title}</Link>
                ))}

            </div>
            {/* links */}
            <div className='hidden md:flex gap-4 w-1/3 '>
                <Link href="https://github.com/Mansur550">
                    <Image src="/github.png" alt="" width={24} height={24}></Image>
                </Link>
                <Link href="https://www.linkedin.com/in/mansur-islam">
                    <Image src="/linkedin.png" alt="" width={24} height={24}></Image>
                </Link>
                <Link href="https://https://www.facebook.com/7mansur.islam.7/">
                    <Image src="/facebook.png" alt="" width={24} height={24}></Image>
                </Link>

            </div>

            {/* Responsive */}
            <div className='md:hidden'>
                <button className='w-10 h-8 flex flex-col justify-between z-50 relative'
                    onClick={() => setOpen((prev) => !prev)}>
                    <div className='w-10 h-1 bg-white rounded'></div>
                    <div className='w-10 h-1 bg-white rounded'></div>
                    <div className='w-10 h-1 bg-white rounded'></div>
                </button>
                {/* Menu list */}
                {open && (
                    <div className='absolute inset-0 z-40  w-screen h-screen bg-black text-white
            flex flex-col items-center justify-center gap-8 text-4xl'>
                        {link.map((link) => (
                            <Link href={link.url} key={link.title} onClick={() => setOpen(false)}>
                                {link.title}</Link>
                        ))}

                    </div>
                )}
            </div>
        </div>

    )
};

export default Navbar;