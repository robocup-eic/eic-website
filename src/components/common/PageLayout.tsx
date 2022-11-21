import { ReactNode } from "react"
import Navbar from "./Nav"
import Footer from "./Footer"
import { useRouter } from "next/router"
import { motion } from "framer-motion"

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

  return (
    <main className="relative bg-creamy text-gray-900 min-h-screen">
      <Navbar />
      <motion.div initial="initial" animate="animate" variants={variants} key={router.pathname}>
        {children}
      </motion.div>
      <Footer />
    </main>
  )
}
