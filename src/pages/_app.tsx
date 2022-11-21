import "@/styles/tailwind.css"
import "@/styles/fonts.css"
import type { AppProps } from "next/app"
import PageLayout from "@/components/common/PageLayout"
import { AnimateSharedLayout } from "framer-motion"
import { useEffect } from "react"
import AnimatedCursor from "@/components/common/AnimatedCursor"

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.addEventListener("touchstart", () => null, {
      passive: true,
    })
  }, [])

  return (
    <PageLayout>
      <AnimateSharedLayout>
        <AnimatedCursor />
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </PageLayout>
  )
}
export default MyApp
