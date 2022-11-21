import LinkButton from "@/components/common/LinkButton"
import Typography from "@/components/common/Typography"
import Walkie1 from "../materials/Walkie1"

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-5 gap-6 mx-auto relative overflow-hidden md:max-w-4xl xl:max-w-6xl pt-6">
      {/* <div className="absolute top-4 left-4 md:left-10 flex flex-col items-start gap-2"> */}
      <div className="col-span-3 order-2 md:order-1 mx-6">
        <Typography custom type="h1" className="mb-2 text-6xl sm:text-7xl md:text-[100px]">
          Walkie 1
        </Typography>
        <div className="flex gap-4 md:gap-10 items-center">
          <Typography custom type="h1" className="text-4xl sm:text-7xl md:text-[100px]">
            Robot
          </Typography>
          <LinkButton size="sm" href="https://github.com/robocup-eic/smach" className="h-14">
            GitHub
          </LinkButton>
        </div>

        <Typography
          custom
          type="p"
          className="mt-6 text-lg leading-relaxed font-medium indent-4 md:indent-8 text-justify"
        >
          An intelligent autonomous service robot, our EIC&apos;s friend, is built to participate in Robocup@home 2022
          competition. We initiated Walkie in spring 2021 with a strong belief that Robots are good human companions.
          Walkie can do various household tasks and be a party host. Things he can do are picking and placing the object
          on the shelf, tidying up the garbage on the floor, serving the meal up to the customer&apos;s order, helping
          hold a bag, and following a user.
        </Typography>
      </div>
      {/* <Walkie1 className="w-8/12 sm:w-5/12 absolute -top-12 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-4" /> */}
      <div className="order-1 md:order-2 md:col-span-2">
        <Walkie1 className="w-[60vw] md:w-[340px] h-auto mx-auto" />
      </div>
    </section>
  )
}
