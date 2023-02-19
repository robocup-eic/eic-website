import clsx from "clsx"

interface SponsorProps {
  theme: "creamy" | "tomato" | "none"
}

export default function Sponsor({ theme }: SponsorProps) {
  return (
    <div className="my-8 flex justify-center gap-2">
      {Array(8)
        .fill("")
        .map((_, i) => i)
        .map((e) => (
          <div
            key={e}
            className={clsx("h-8 w-8", theme === "tomato" && "bg-creamy", theme === "creamy" && "bg-tomato")}
          />
        ))}
    </div>
  )
}
