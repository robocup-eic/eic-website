import LinkButton from "@/components/common/LinkButton"
import Typography from "@/components/common/Typography"
import { DescribeRoute } from "@/components/Meta/DescribeRoute"
import Walkie1sm from "@/components/materials/Walkie1sm"
import Walkie2sm from "@/components/materials/Walkie2sm"

export default function Page() {
  return (
    <DescribeRoute title="EIC Chula" description="Engineering Innovator Club" imgURL="./OG-Banner.jpg">
      <section className="p-12 min-h-screen">
        <Typography type="h1">Projects</Typography>
        <div className="flex flex-col lg:grid lg:grid-cols-6 gap-4 lg:gap-16">
          <div className="col-span-2">
            <div className="rounded-3xl border border-tomato bg-tomato p-8 h-full space-y-2">
              <div className="flex rounded-xl bg-creamy items-baseline">
                <Walkie1sm className="relative pt-16"/>
              </div>
                <Typography type="h2" className="text-xl md:text-4xl text-white text-right font-normal indent-8" custom={true}>
                <LinkButton href="/projects/walkie1">Walkie 1</LinkButton>
                </Typography>
            </div>
          </div>
          <div className="col-span-2">
            <div className="rounded-3xl border border-tomato bg-tomato p-8 h-full space-y-1">
              <div className="flex rounded-xl bg-creamy items-bottom">
                <Walkie2sm className="relative"/>
              </div>
                <Typography type="h2" className="text-xl md:text-4xl text-white text-right font-normal indent-8" custom={true}>
                <LinkButton href="/projects/walkie2">Walkie 2</LinkButton>
                </Typography>
            </div>
          </div>
        </div>
        <Typography type="h1">Publications</Typography>
        <div className="list-disc space-y-4 indent-10 text-tomato font-display">
          <li><a className="text-black">Wheel Slip Angle Estimation of a Planar Mobile Platform</a> (2019)</li>
          <li><a className="text-black">Linear Quadratic Optimal Regulator for Steady State Drifting of Rear Wheel Drive Vehicle</a> (2015)</li>
          <li><a className="text-black">ASSIST LEVEL WALKING OF PASSIVE BIPED WALKER WITH UPPER BODY AND ANKLE SPRING MECHANISMS</a>(2010)</li>
          <li><a className="text-black">Plasma-RX: Autonomous Rescue robots</a> (2008)</li>
          <li><a className="text-black">Cobots for the automobile assembly line</a> (1999)</li>
          <li><a className="text-black">Cobot control</a> (1997)</li>
          <li><a className="text-black">Cobots: Robots For Collaboration With Human Operators</a> (1996)</li>
        </div>
      </section>
    </DescribeRoute>
  )
}
