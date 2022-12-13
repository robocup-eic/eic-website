import Link from "next/link"
import Typography from "../common/Typography"

interface Publication {
  title: string
  year: number
  href: string
}

const publications: Publication[] = [
  /* some publication links are duplicate */
  {
    title: "Wheel Slip Angle Estimation of a Planar Mobile Platform",
    year: 2019,
    href: "https://ieeexplore.ieee.org/abstract/document/770061",
  },
  {
    title: "Linear Quadratic Optimal Regulator for Steady State Drifting of Rear Wheel Drive Vehicle",
    year: 2015,
    href: "https://ieeexplore.ieee.org/abstract/document/770061",
  },
  {
    title: "ASSIST LEVEL WALKING OF PASSIVE BIPED WALKER WITH UPPER BODY AND ANKLE SPRING MECHANISMS",
    year: 2010,
    href: "https://www.worldscientific.com/doi/abs/10.1142/9789814329927_0071",
  },
  {
    title: "Plasma-RX: Autonomous Rescue robots",
    year: 2008,
    href: "https://ieeexplore.ieee.org/abstract/document/4913305?casa_token=sDZApyldotgAAAAA:PmT8fbxo6deaGf8wskcyi6D-Y5JiUHDHYo8hzr4qbAnB3eQ3fazhiRP1DqtRaAuGNs4Fa3U_Kxw",
  },
  {
    title: "Cobots for the automobile assembly line",
    year: 1999,
    href: "https://ieeexplore.ieee.org/abstract/document/770061",
  },
  {
    title: "Cobot control",
    year: 1997,
    href: "https://ieeexplore.ieee.org/abstract/document/770061",
  },
  {
    title: "Cobots: Robots For Collaboration With Human Operators",
    year: 1996,
    href: "https://ieeexplore.ieee.org/abstract/document/4913305?casa_token=sDZApyldotgAAAAA:PmT8fbxo6deaGf8wskcyi6D-Y5JiUHDHYo8hzr4qbAnB3eQ3fazhiRP1DqtRaAuGNs4Fa3U_Kxw",
  },
]

export default function Publications() {
  return (
    <section className="p-12 md:max-w-5xl xl:max-w-7xl mx-auto">
      <Typography className="text-6xl break-words mb-4 xl:text-[120px] font-medium" custom={true} type="h1">
        Publications
      </Typography>
      <div className="list-disc space-y-4 indent-10 text-tomato font-display">
        {publications.map((publication) => (
          <li key={publication.title}>
            <Link href={publication.href} passHref>
              <a className="text-black hover:underline">{publication.title}</a>
            </Link>
            <span className="text-tomato"> ({publication.year})</span>
          </li>
        ))}
      </div>
    </section>
  )
}
