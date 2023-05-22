import Navbar from "@/components/landing/Navbar";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const titleVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  hidden: { opacity: 0, scale: 0 }
};
const mottoVariants = {
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, delay: 0.3 } },
  hidden: { opacity: 0, scale: 0, y: 100 }
};
const Landing = () => {
  const controls = useAnimation();
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef);
  useEffect(() => {
    if (titleInView) {
      controls.start("visible");
    }
  }, [controls, titleInView]);

  return (
    <>
      <div className="h-screen bg-blue-300">
        <Navbar />
        Hello
      </div>
      <section className="relative">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <motion.div
                ref={titleRef}
                animate={controls}
                initial="hidden" variants={titleVariants}>
                <h1 className="lg:text-6xl text-4xl mb-4 leading-snug font-semibold">Empowering Your Construction Projects</h1>
              </motion.div>
              <motion.div variants={mottoVariants} initial="hidden" animate={controls}>
                <p className="text-2xl text-gray-600">Building the Future Together</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;