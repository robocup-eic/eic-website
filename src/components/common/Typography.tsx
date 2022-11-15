import { ReactNode } from "react"
import clsx from "clsx"

interface TypographyProps {
  type?: "h1" | "h2" | "h3" | "p" | "span"
  className?: string
  children: ReactNode
}

export default function Typography({ type, className, children }: TypographyProps) {
  function getClassName(cn: string) {
    return clsx(cn, className, "font-display")
  }

  switch (type) {
    case "h1":
      return <h1 className={getClassName("text-4xl font-medium")}>{children}</h1>
    case "h2":
      return <h2 className={getClassName("text-2xl font-bold")}>{children}</h2>
    case "h3":
      return <h3 className={getClassName("text-2xl font-medium")}>{children}</h3>
    case "p":
      return <p className={getClassName("text-md font-medium")}>{children}</p>
    case "span":
      return <span className={getClassName("text-md font-medium")}>{children}</span>
    default:
      return <p className={getClassName("text-md font-medium")}>{children}</p>
  }
}
