import LinkButton from "@/components/common/LinkButton"
import Typography from "@/components/common/Typography"
import Walkie2 from "@/components/materials/Walkie2"

export default function Hero() {
  return (
    <section className="relative mx-auto h-[80vh] max-h-[500px] w-full overflow-hidden sm:max-h-[550px] xl:max-h-[675px] xl:max-w-7xl">
      <Walkie2 className="absolute -top-12 -left-4 w-full sm:w-10/12 md:w-8/12" />
      <div className="absolute top-4 right-10 flex flex-col items-end gap-2">
        <div className="gap-4">
          <Typography custom type="h1" className="text-right text-6xl sm:text-7xl md:text-[100px]">
            Walkie 2
          </Typography>
          <Typography custom type="h1" className="text-right text-6xl sm:text-7xl md:text-[100px]">
            Robot
          </Typography>
        </div>
        <LinkButton href="https://github.com/robocup-eic/smach" className="mt-2 text-right sm:mt-4 md:mt-6">
          GitHub
        </LinkButton>
      </div>
    </section>
  )
}
