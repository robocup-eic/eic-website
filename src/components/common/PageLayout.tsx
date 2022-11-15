import { ReactNode } from "react"
import Navbar from "./Nav"
import Footer from "./Footer"

interface PageLayoutProps {
  children: ReactNode | ReactNode[]
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <main className="relative bg-creamy text-gray-900 min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
