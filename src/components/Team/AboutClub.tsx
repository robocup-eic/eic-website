/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Typography from "../common/Typography"

const AboutClub = () => {
  return (
    <section className="relative mx-auto px-8 sm:px-16 lg:px-24">
      <div className="flex flex-col lg:grid grid-cols-8 gap-8 lg:gap-16">
        <div className="col-span-5">
          {/* <div className="bg-tomato w-full aspect-video rounded-2xl"></div> */}
          <Image
            src="/assets/eic/group-photo.jpg"
            alt="EIC"
            width={1920}
            height={1080}
            className="w-full rounded-2xl"
          />
        </div>
        <div className="col-span-3 space-y-4 md:space-y-8">
          <Typography type="h1" className="text-2xl lg:text-4xl text-tomato font-bold font-display" custom={true}>
            EIC Club
          </Typography>
          <Typography type="p" className="text-base md:text-lg my-4 font-normal font-display indent-8" custom={true}>
            Engineering Innovator Club (EIC) of the Faculty of Engineering, Chulalongkorn University, established in
            1997 by group of students. EIC focus on robotic designing, intelligence programming, and high level control.
          </Typography>
          <Typography type="p" className="text-base md:text-lg my-4 font-normal font-display indent-8" custom={true}>
            EIC intends to be a part of the robotics and AI industry to develop people with STEM education to motivate
            creating innovations and build the innovator community in the faculty with necessary skills including Design
            Thinking Process, Mechanical design using CAD, Designing controlling algorithm and developing Artificial
            Intelligence.
          </Typography>
        </div>
      </div>
    </section>
  )
}

export default AboutClub
