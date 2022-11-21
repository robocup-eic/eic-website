import clsx from "clsx"
import Link from "next/link"
import { ReactNode, useMemo } from "react"

interface ButtonProps {
  size?: "sm" | "md" | "lg"
  href: string
  className?: string
  customColor?: boolean
  children: ReactNode
}

export default function LinkButton({ size = "md", href, customColor, className, children, ...props }: ButtonProps) {
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
          "inline-block rounded-full px-8 py-4 font-display transition-colors",
          !customColor && "bg-gray-900 text-white hover:bg-gray-800",
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
