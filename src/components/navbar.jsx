'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import NavLink from './navlink';
import { motion } from 'framer-motion';


const link = [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About' },
    { url: '/portfolio', title: 'Portfolio' },
    { url: '/contact', title: 'Contact' },
]

const Navbar = () => {
    const topVariants = {
        closed: { rotate: 0 },
        open: {
            rotate: 45,
            backgroundColor: "rgb(255, 255, 255)",
        },

    };

    const centerVariants = {
        closed: { opacity: 1 },
        open: {
            opacity: 0,
        },

    };

    const bottomVariants = {
        closed: { rotate: 0 },
        open: {
            rotate: -45,
            backgroundColor: "rgb(255, 255, 255)",
        }
    };

    const listVariants = {
        closed: {
            x: '100vw',
        },
        open: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            }
        },
    };

    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0,
        },
        open: {
            x: 0,
            opacity: 1
        },
    };



    const [open, setOpen] = useState(false);
    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>

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
                {link.map((link) => (
                    // <Link href={link.url} key={link.title}>{link.title}</Link>
                    <NavLink link={link} key={link.url} />
                ))}

            </div>
            {/* links */}
            <div className='hidden md:flex gap-4  '>
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
                    <motion.div
                        variants={topVariants}
                        animate={open ? 'open' : 'closed'}
                        className='w-10 h-1 bg-black rounded origin-left'></motion.div>
                    <motion.div
                        variants={centerVariants}
                        animate={open ? 'open' : 'closed'}
                        className='w-10 h-1 bg-black rounded origin-left'></motion.div>
                    <motion.div
                        variants={bottomVariants}
                        animate={open ? 'open' : 'closed'}
                        className='w-10 h-1 bg-black rounded origin-left'></motion.div>
                </button>
                {/* Menu list */}
                {open && (
                    <motion.div
                        variants={listVariants}
                        initial="closed"
                        animate="open"
                        className='absolute inset-0 z-40  w-screen h-screen bg-black text-white
            flex flex-col items-center justify-center gap-8 text-4xl '>
                        {link.map((link) => (
                            <motion.div variants={listItemVariants} key={link.title}>
                                <Link href={link.url} onClick={() => setOpen(false)}>
                                    {link.title}</Link>
                            </motion.div>
                        ))}

                    </motion.div>
                )}
            </div>
        </div>

    )
};

export default Navbar;