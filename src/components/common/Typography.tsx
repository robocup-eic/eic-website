import { ReactNode } from "react"
import clsx from "clsx"

interface TypographyProps {
  type?: "h1" | "h2" | "h3" | "p" | "span" | "grid" | "caption"
  className?: string
  children: ReactNode
  custom?: Boolean
}

export default function Typography({ type, className, children, custom }: TypographyProps) {
  function getClassName(cn: string) {
    return clsx(cn, className, "font-display")
  }

  switch (type) {
    case "h1":
      return <h1 className={custom ? className : getClassName("text-[120px] font-medium")}>{children}</h1>
    case "h2":
      return <h2 className={custom ? className : getClassName("text-2xl font-bold")}>{children}</h2>
    case "h3":
      return <h3 className={custom ? className : getClassName("text-2xl font-medium")}>{children}</h3>
    case "p":
      return <p className={custom ? className : getClassName("text-lg font-medium")}>{children}</p>
    case "caption":
      return <p className={custom ? className : getClassName("px-3 pt-2 text-[20px] font-medium")}>{children}</p>
    case "grid":
      return (
        <span className={custom ? className : getClassName("min-h-[50px] rounded-lg bg-red-500 shadow-xl")}>
          {children}
        </span>
      )
    case "span":
      return <span className={custom ? className : getClassName("text-md font-medium")}>{children}</span>

    default:
      return <p className={custom ? className : getClassName("text-md font-medium")}>{children}</p>
  }
}
