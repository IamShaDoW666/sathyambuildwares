import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import Link from "next/link";
import type { SetStateAction, Dispatch } from "react";
import { useRef, useState } from "react";

const MobileNav = ({open, setOpen}: {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>}) => {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <Link className="text-xl font-semibold" href="/">LOGO</Link>
            </div>
            <div className="flex flex-col ml-4">
                <Link className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </Link>
                <Link className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Contact
                </Link>
            </div>  
        </div>
    )
}
const Navbar = ({changeNav}: {changeNav: boolean}) => {
    const titleRef = useRef(null)
    const [open, setOpen] = useState(false)
    const handleSignIn = () => {
        signIn() // eslint-disable-line @typescript-eslint/no-floating-promises
    }
    return (
        <nav className={`sticky w-full z-50 top-0 items-center transition-all duration-300  xl:px-12 lg:px-8 px-4 xl:py-8 py-4 justify-center flex sm:justify-between ${changeNav ? 'bg-white text-slate-700' : 'text-white/80'}`}>
            <div className="hidden sm:block">
                <MobileNav open={open} setOpen={setOpen} />
            </div>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .9,
                    opacity: 0,
                    y: -50
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: .2

                    }
                },
            }}>
                <Link ref={titleRef} as={'h1'} id="title" href={'/'} className="lg:text-5xl cursor-pointer text-2xl sm:text-3xl font-bold">Sathyam Buildwares</Link>
            </motion.div>
            <div className="sm:flex hidden justify-between gap-x-4">
                <motion.div whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: 0.2
                    }
                }}>

                    <button className="font-semibold text-sm sm:text-base" onClick={handleSignIn}>Login</button>
                </motion.div>
            </div>
        </nav>
    );
}

export default Navbar;