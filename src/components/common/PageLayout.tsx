import { ReactNode } from "react"
import Navbar from "@/components/Nav/Navbar"

interface PageLayoutProps {
  children: ReactNode | ReactNode[]
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}
