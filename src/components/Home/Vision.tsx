import Typography from "../common/Typography"
import Gear from "../materials/Gear"

const Vision = () => {
  return (
    <section className="relative mx-auto px-24 sm:px-16 lg:px-20 grid grid-cols-2 gap-16 min-h-screen bg-tomato text-white overflow-hidden">
      <div className="relative flex flex-col justify-end items-start">
        <div className="py-20">
          <Typography type="h1" className="text-8xl font-medium font-display" custom={true}>
            Our Mission
          </Typography>
          <Typography type="p" className="text-xl my-4">
            EIC is founded in order to create a society that has the ability to invent inventions that are beneficial as
            well as profitable through hands-on workshops and challenging competition.
          </Typography>
        </div>
        <div className="absolute -top-1/3 -left-1/3">
          <Gear />
        </div>
      </div>
      <div className="relative">
        <div className="py-20">
          <Typography type="h1" className="text-8xl font-medium font-display" custom={true}>
            Our Vision
          </Typography>
          <Typography type="p" className="text-lg my-4">
            {`EIC's goal is to promote the development of the Robotics and AI Industries in Thailand.`}
          </Typography>
        </div>
        <div className="absolute -bottom-1/6 -right-1/3">
          <Gear />
        </div>
      </div>
    </section>
  )
}

export default Vision
