import Typography from "@/components/common/Typography"
import { Disclosure, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"

const navigation = [
  { title: "Home", url: "/" },
  { title: "Robots", url: "/robots" },
  { title: "Publications", url: "/publications" },
  { title: "Our Team", url: "/team" },
  { title: "Contact", url: "/contact" },
]

export default function Navbar() {
  const router = useRouter()
  const location = useMemo(() => {
    return `/${router.pathname.split("/")[1]}`
  }, [router])

  return (
    <Disclosure
      as="header"
      className="fixed top-0 left-0 z-50 w-full bg-creamy px-6 transition-all duration-150 ease-out sm:relative sm:py-4"
    >
      {({ open }) => (
        <>
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

            {/* Mobile menu */}
            <div className="-mr-2 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </nav>

          {/* Mobile Nav */}
          <Transition
            show={open}
            as="div"
            enter="transition ease-in-out duration-500 transform"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="transition ease-in-out duration-500 transform"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="translate-x-full opacity-0"
            className="absolute inset-x-0 z-20 flex min-h-screen justify-end bg-creamy pr-8 sm:hidden"
          >
            <Disclosure.Panel as="div">
              {({ close }) => (
                <div className="space-y-1 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Link href={item.url} key={item.title} passHref>
                      <Disclosure.Button
                        as="a"
                        href="#"
                        onClick={() => {
                          close()
                        }}
                        className={clsx(
                          location === item.url ? "underline" : "no-underline",
                          "text-20 flex justify-end py-2 pl-3 pr-4 font-bold"
                        )}
                      >
                        {item.title}
                      </Disclosure.Button>
                    </Link>
                  ))}
                </div>
              )}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
