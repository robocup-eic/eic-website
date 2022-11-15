import Typography from "@/components/common/Typography"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"

export default function Navbar() {
  const router = useRouter()
  const location = useMemo(() => {
    return `/${router.pathname.split("/")[1]}`
  }, [router])

  return (
    <nav className="flex sticky items-center justify-between py-4 px-6">
      <Link href="/" passHref>
        <a>
          <Typography type="h1" className="text-md hover:text-gray-700">
            EIC
          </Typography>
        </a>
      </Link>

      <ul className={clsx("flex gap-4 h-10", "rounded-full border border-gray-900")}>
        {[
          { title: "Home", url: "/" },
          { title: "Projects", url: "/projects" },
          { title: "Our Team", url: "/team" },
          { title: "Contact", url: "/contact" },
        ].map((item) => (
          <li key={item.url}>
            <Link href={item.url} passHref>
              <a>
                <Typography
                  type="span"
                  className={clsx(
                    "font-light text-sm rounded-full",
                    "px-4 text-center flex justify-center items-center h-full w-full",
                    location === item.url && "bg-gray-900 hover:bg-gray-800 transition-colors text-white"
                  )}
                >
                  {item.title}
                </Typography>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
