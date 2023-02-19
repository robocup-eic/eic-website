// import { ReactNode, useRef } from "react"
import { ReactNode } from "react"
import Navbar from "./Nav"
import Footer from "./Footer"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
// import { LocomotiveScrollProvider } from "react-locomotive-scroll"

interface PageLayoutProps {
  children: ReactNode | ReactNode[]
}

const variants = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export default function PageLayout({ children }: PageLayoutProps) {
  const router = useRouter()
  // const containerRef = useRef<HTMLDivElement>(null)

  return (
    // <LocomotiveScrollProvider
    //   options={{
    //     smooth: true,
    //     lerp: 0.25,
    //     // ... all available Locomotive Scroll instance options
    //   }}
    //   watch={
    //     [
    //       //..all the dependencies you want to watch to update the scroll.
    //       //  Basicaly, you would want to watch page/location changes
    //       //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    //     ]
    //   }
    //   containerRef={containerRef}
    // >
    // <main data-scroll-container ref={containerRef} className="relative bg-creamy text-gray-900 min-h-screen">
    <main className="relative min-h-screen bg-creamy text-gray-900">
      <Navbar />
      <motion.div initial="initial" animate="animate" variants={variants} key={router.pathname}>
        {children}
      </motion.div>
      <Footer />
    </main>
    // </LocomotiveScrollProvider>
  )
}
