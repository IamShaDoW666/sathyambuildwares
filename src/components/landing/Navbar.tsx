import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRef } from "react";
const Navbar = () => {
    const titleRef = useRef(null)
    return (
        <nav className="sticky w-full bg-red-400 z-50 top-0 items-center xl:px-12 lg:px-8 px-4 xl:py-8 py-4 flex justify-between">
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
                <Link ref={titleRef} as={'h1'} id="title" href={'/'} className="lg:text-5xl cursor-pointer text-xl sm:text-3xl font-bold text-slate-800">Sathyam Buildwares</Link>
            </motion.div>
            <div className="flex justify-between gap-x-4">
                <motion.div whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: 0.2
                    }
                }}>

                    <button className="text-slate-800 font-semibold hover:text-slate-500" onClick={() => signIn()}>Login</button>
                </motion.div>
            </div>
        </nav>
    );
}

export default Navbar;