import LinkButton from "@/components/common/LinkButton"
import Typography from "@/components/common/Typography"
import Walkie2 from "@/components/materials/Walkie2"

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen mx-auto w-full overflow-hidden xl:max-w-7xl">
      <Walkie2 className="w-full sm:w-10/12 md:w-8/12 absolute -top-12 -left-4" />
      <div className="absolute top-4 right-10 flex flex-col items-end gap-2">
        <div className="gap-4">
          <Typography custom type="h1" className="text-6xl sm:text-7xl md:text-[100px] text-right">
            Walkie 2
          </Typography>
          <Typography custom type="h1" className="text-6xl sm:text-7xl md:text-[100px] text-right">
            Robot
          </Typography>
        </div>
        <LinkButton href="https://github.com/robocup-eic/smach" className="mt-2 sm:mt-4 md:mt-6 text-right">
          GitHub
        </LinkButton>
      </div>
    </section>
  )
}
