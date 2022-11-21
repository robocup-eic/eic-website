import "@/styles/tailwind.css"
import "@/styles/fonts.css"
import type { AppProps } from "next/app"
import PageLayout from "@/components/common/PageLayout"
import { AnimateSharedLayout } from "framer-motion"
import { useEffect } from "react"

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.addEventListener("touchstart", () => null, {
      passive: true,
    })
  }, [])

  return (
    <PageLayout>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </PageLayout>
  )
}
export default MyApp
