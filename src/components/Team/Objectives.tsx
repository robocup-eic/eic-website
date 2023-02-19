/* eslint-disable @next/next/no-img-element */
import Typography from "../common/Typography"

const Objectives = () => {
  return (
    <section className="relative mx-auto px-8 py-8 sm:px-16 lg:px-24 lg:py-16">
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-8 lg:gap-16">
        <div className="col-span-3">
          <div className="h-full space-y-2 rounded-3xl border border-black p-8">
            <Typography type="h2" className="font-display text-xl font-bold text-tomato md:text-4xl" custom={true}>
              Objective
            </Typography>
            <Typography type="p" className="indent-8 font-display text-base font-normal md:text-lg" custom={true}>
              The purpose of EIC is to be a community where students interested in robotics, programming, and
              innovations could join together to try to create amazing innovations and gain experiences in real-world
              engineering at this club.
            </Typography>
          </div>
        </div>
        <div className="col-span-5">
          <div className="h-full space-y-2 rounded-3xl border border-black p-8">
            <Typography type="h2" className="font-display text-xl font-bold text-tomato md:text-4xl" custom={true}>
              Our Accomplishments
            </Typography>
            <Typography type="p" className="indent-8 font-display text-base font-normal md:text-lg" custom={true}>
              Apart from RoboCup@Home, RoboCup Soccer and RoboCup Rescue are also the leagues in Robocup in which our
              club had participated. While Robocup Soccer focuses on algorithms and tactics in football, Robocup Rescue
              relies heavily on building a trustworthy robot that can operate in risky intervention. Our club had won
              first place in 2008, second and third in 2007 and 2006 accordingly for these leagues. Without a doubt, for
              this year, our club has the ambition to be in the top 5 of Robocup@home League.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Objectives
