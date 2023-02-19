import Typography from "@/components/common/Typography"
import { Popover, Transition } from "@headlessui/react"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { Fragment, useMemo } from "react"

const navigation = [
  { title: "Home", url: "/" },
  { title: "Projects", url: "/projects" },
  { title: "Our Team", url: "/team" },
  { title: "Contact", url: "/contact" },
]

export default function Navbar() {
  const router = useRouter()
  const location = useMemo(() => {
    return `/${router.pathname.split("/")[1]}`
  }, [router])

  return (
    <Popover as="header" className="relative z-50">
      <nav className="sticky flex items-center justify-between py-4 px-6">
        <Link href="/" passHref>
          <a>
            <Typography type="h2" className="text-md hover:text-gray-700">
              EIC
            </Typography>
          </a>
        </Link>

        <ul className={clsx("hidden h-10 gap-4 md:flex", "rounded-full border border-gray-900")}>
          {navigation.map((item) => (
            <li key={item.url}>
              <Link href={item.url} passHref>
                <a>
                  <Typography
                    type="span"
                    className={clsx(
                      "rounded-full text-sm font-light",
                      "flex h-full w-full items-center justify-center px-4 text-center",
                      location === item.url && "bg-gray-900 text-white transition-colors hover:bg-gray-800"
                    )}
                  >
                    {item.title}
                  </Typography>
                </a>
              </Link>
            </li>
          ))}
        </ul>

        {/* Nav Button */}
        <div className="-mr-2 flex items-center md:hidden">
          <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-transparent p-2 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500">
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Popover.Button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 z-50 origin-top transform p-2 transition md:hidden">
          <div className="overflow-hidden rounded-lg bg-gray-700 shadow-md ring-1 ring-black ring-opacity-5">
            <div className="pt-5 pb-6">
              {/* hm */}
              <div className="space-y-1 px-2">
                {navigation.map((item) => (
                  <Link href={item.url} key={item.title} passHref>
                    <a
                      key={item.title}
                      className={`font-sm block rounded-md px-3 py-2 text-base ${
                        location === item.url ? "bg-gray-200 text-gray-700" : "text-gray-300"
                      }`}
                    >
                      {item.title}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
