import "@/styles/tailwind.css"
import "@/styles/fonts.css"
import type { AppProps } from "next/app"
import PageLayout from "@/components/common/PageLayout"
import { AnimateSharedLayout } from "framer-motion"
import { useEffect, useState } from "react"
// import AnimatedCursor from "@/components/common/AnimatedCursor"
import { useWindowSize } from "usehooks-ts"

function MyApp({ Component, pageProps }: AppProps) {
  const { width } = useWindowSize()
  const [isTouchScreenDevice, setIsTouchScreenDevice] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouchScreenDevice(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          // @ts-ignore
          navigator.msMaxTouchPoints > 0
      )
    }
  }, [width])

  useEffect(() => {
    document.addEventListener("touchstart", () => null, {
      passive: true,
    })
  }, [])

  return (
    <PageLayout>
      <AnimateSharedLayout>
        {/* {!isTouchScreenDevice && <AnimatedCursor />} */}
        <div className="pt-16 sm:pt-0">
          <Component {...pageProps} />
        </div>
      </AnimateSharedLayout>
    </PageLayout>
  )
}
export default MyApp
