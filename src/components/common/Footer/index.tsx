import clsx from "clsx"
import { useRouter } from "next/router"
import { useMemo } from "react"
import Typography from "../Typography"
// import Sponsor from "./Sponsor"

export default function Footer() {
  const router = useRouter()
  const theme = useMemo(() => {
    const pathnames = router.pathname.split("/")
    const route = pathnames[1]
    if (route === "") return "creamy"
    else if (route === "projects") {
      if (pathnames.length > 2) return "tomato"
      else return "creamy"
    } else if (route === "contact") {
      return "none"
    } else return "tomato"
  }, [router])

  return (
    <footer
      className={clsx(
        "text-center p-10",
        theme === "creamy" && "bg-creamy text-gray-900",
        theme === "tomato" && "bg-tomato text-white"
      )}
    >
      {theme !== "none" && (
        <>
          {/* <Sponsor theme={theme} /> */}
          <Typography className="font-bold text-xs">© 2022 EIC, Chulalongkorn University</Typography>
        </>
      )}
    </footer>
  )
}
