import clsx from "clsx"

interface SponsorProps {
  theme: "creamy" | "tomato" | "none"
}

export default function Sponsor({ theme }: SponsorProps) {
  return (
    <div className="flex justify-center gap-2 my-8">
      {Array(8)
        .fill("")
        .map((_, i) => i)
        .map((e) => (
          <div
            key={e}
            className={clsx("w-8 h-8", theme === "tomato" && "bg-creamy", theme === "creamy" && "bg-tomato")}
          />
        ))}
    </div>
  )
}
