import Typography from "../common/Typography"
import Gear from "../materials/Gear"

const Vision = () => {
  return (
    <section className="relative mx-auto min-h-screen grid-cols-2 gap-16 overflow-hidden bg-tomato px-8 text-white sm:px-16 md:grid lg:px-24">
      <div className="relative flex flex-col items-start justify-end">
        <div className="py-20">
          <Typography type="h1" className="font-display text-3xl font-medium md:text-8xl" custom={true}>
            Our Mission
          </Typography>
          <Typography type="p" className="my-4 text-xl">
            EIC is founded in order to create a society that has the ability to invent inventions that are beneficial as
            well as profitable through hands-on workshops and challenging competition.
          </Typography>
        </div>
        <div className="absolute -top-1/3 -left-1/3">
          <Gear className="w-[300px] md:w-[800px]" />
        </div>
      </div>
      <div className="relative">
        <div className="py-20">
          <Typography type="h1" className="font-display text-3xl font-medium md:text-8xl" custom={true}>
            Our Vision
          </Typography>
          <Typography type="p" className="my-4 text-lg">
            {`EIC's goal is to promote the development of the Robotics and AI Industries in Thailand.`}
          </Typography>
        </div>
        <div className="md:-bottom-1/6 absolute bottom-0 -right-1/3">
          <Gear inverted className="w-[300px] md:w-[800px]" />
        </div>
      </div>
    </section>
  )
}

export default Vision
