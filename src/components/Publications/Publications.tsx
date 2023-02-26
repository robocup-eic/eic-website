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
    title: "Transformable Wheelchair–Exoskeleton Hybrid Robot for Assisting Human Locomotion",
    year: 2023,
    href: "https://www.mdpi.com/2218-6581/12/1/16",
  },
  {
    title: "Affordable Pipetting Robot: Gripper Design for Automatic Changing of Micropipette and Liquid Volume Control",
    year: 2022,
    href: "https://ieeexplore.ieee.org/document/9863351",
  },
  {
    title: "Macro-Mini Linear Actuator Using Electrorheological-Fluid Brake for Impedance Modulation in Physical Human–Robot Interaction",
    year: 2022,
    href: "https://ieeexplore.ieee.org/document/9691906/",
  },
  {
    title: "Design and Modeling of a Variable-Stiffness Spring Mechanism for Impedance Modulation in Physical Human–Robot Interaction",
    year: 2021,
    href: "https://ieeexplore.ieee.org/document/9560966",
  },
  {
    title: "A Spring-Embedded Planetary-Geared Parallel Elastic Actuator",
    year: 2020,
    href: "https://ieeexplore.ieee.org/document/9158998",
  },
  {
    title: "Wheel Slip Angle Estimation of a Planar Mobile Platform",
    year: 2019,
    href: "https://ieeexplore.ieee.org/document/8646198",
  },
  {
    title: "Linear Quadratic Optimal Regulator for Steady State Drifting of Rear Wheel Drive Vehicle",
    year: 2015,
    href: "https://www.researchgate.net/publication/283518455_Linear_Quadratic_Optimal_Regulator_for_Steady_State_Drifting_of_Rear_Wheel_Drive_Vehicle",
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
    href: "https://www.researchgate.net/publication/3701604_Cobot_control",
  },
  {
    title: "Cobots: Robots For Collaboration With Human Operators",
    year: 1996,
    href: "https://peshkin.mech.northwestern.edu/publications/1996_Colgate_CobotsRobotsCollaboration.pdf",
  },
]

export default function Publications() {
  return (
    <section className="mx-auto min-h-screen p-12 md:max-w-5xl xl:max-w-7xl">
      <Typography className="mb-4 break-words text-6xl font-medium xl:text-[120px]" custom={true} type="h1">
        Publications
      </Typography>
      <div className="list-disc space-y-4 indent-10 font-display text-tomato">
        {publications.map((publication) => (
          <li key={publication.title}>
            <Link href={publication.href} passHref>
              <a className="text-black hover:underline" target="_blank" rel="noreferrer">
                {publication.title}
              </a>
            </Link>
            <span className="text-tomato">({publication.year})</span>
          </li>
        ))}
      </div>
    </section>
  )
}
