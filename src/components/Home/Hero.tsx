import LinkButton from "../common/LinkButton"
import Typography from "../common/Typography"
import Robocup from "../materials/Robocup"

const Hero = () => {
  return (
    <section className="relative mx-auto px-24 sm:px-16 lg:px-20 grid grid-cols-2 gap-16 min-h-[90vh]">
      <div className="flex flex-col justify-between items-start py-16">
        <div>
          <Typography type="h1" className="text-8xl font-medium font-display" custom={true}>
            Welcome <br /> to EIC!
          </Typography>
          <Typography type="p" className="text-xl my-4">
            We are a team of students of Chulalongkorn University, majoring in multiple Engineering majors, including
            both Thai and International programs!
          </Typography>
        </div>
        <LinkButton href="/team" size="lg">
          Learn More About Us !
        </LinkButton>
      </div>
      <div>
        <div className="absolute bottom-0 right-0 w-1/2">
          <Robocup />
        </div>
      </div>
    </section>
  )
}

export default Hero
