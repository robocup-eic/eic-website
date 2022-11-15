import clsx from "clsx"
import Link from "next/link"
import { ReactNode, useMemo } from "react"

interface ButtonProps {
  size?: "sm" | "md" | "lg"
  href: string
  className?: string
  children: ReactNode
}

export default function LinkButton({ size = "md", href, className, children, ...props }: ButtonProps) {
  const textSize = useMemo(() => {
    switch (size) {
      case "sm":
        return "text-md"
      case "md":
        return "text-lg"
      case "lg":
        return "text-xl"
      default:
        return "text-base"
    }
  }, [size])

  return (
    <Link href={href} passHref>
      <a
        className={clsx(
          "px-8 py-2 bg-gray-900 hover:bg-gray-800 transition-colors text-white font-display rounded-full inline-block",
          className,
          textSize
        )}
        {...props}
      >
        {children}
      </a>
    </Link>
  )
}
