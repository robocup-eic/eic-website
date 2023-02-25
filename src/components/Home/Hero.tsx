import LinkButton from "../common/LinkButton"
import Typography from "../common/Typography"
import Robocup from "../materials/Robocup"

const Hero = () => {
  return (
    <section className="relative mx-auto min-h-[90vh] grid-cols-2 gap-16 px-8 sm:px-16 md:grid lg:px-24">
      <div className="relative z-10 flex flex-col items-start justify-start py-8">
        <div>
          <Typography type="h1" className="font-display text-4xl font-medium md:text-8xl" custom={true}>
            Welcome to EIC!
          </Typography>
          <Typography type="p" className="my-4 text-sm md:text-xl">
            We are a team of students of Chulalongkorn University, majoring in multiple Engineering majors, including
            both Thai and International programs!
          </Typography>
        </div>
        <LinkButton href="/team" size="lg" className="mt-10 text-sm md:text-xl">
          Learn More About Us !
        </LinkButton>
      </div>
      <div className="">
        <div className="absolute bottom-0 right-0 w-5/6 sm:w-2/3 md:w-1/2">
          <Robocup />
        </div>
      </div>
    </section>
  )
}

export default Hero
