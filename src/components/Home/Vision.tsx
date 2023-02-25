import Typography from "../common/Typography"
import Gear from "../materials/Gear"

const Vision = () => {
  return (
    <section className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-tomato py-36 px-8 text-white">
      <div className="grid h-full w-full max-w-4xl grid-cols-1 items-center gap-16 sm:grid-cols-2">
        <div className="">
          <Typography type="h1" className="font-display text-5xl font-medium md:text-6xl" custom={true}>
            Our Mission
          </Typography>
          <Typography type="p" className="my-4 h-36 text-xl">
            EIC is founded in order to create a society that has the ability to invent inventions that are beneficial as
            well as profitable through hands-on workshops and challenging competition.
          </Typography>
        </div>
        <div className="">
          <Typography type="h1" className="font-display text-5xl font-medium md:text-6xl" custom={true}>
            Our Vision
          </Typography>
          <Typography type="p" className="my-4 h-36 text-lg">
            {`EIC's goal is to promote the development of the Robotics and AI Industries in Thailand.`}
          </Typography>
        </div>
      </div>

      <div className="absolute top-1/3 -left-1/3">
        <Gear className="w-[300px] md:w-[800px]" />
      </div>
      <div className="md:-bottom-1/6 absolute bottom-0 -right-1/3">
        <Gear inverted className="w-[300px] md:w-[800px]" />
      </div>
    </section>
  )
}

export default Vision
