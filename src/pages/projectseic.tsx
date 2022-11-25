import { DescribeRoute } from "@/components/Meta/DescribeRoute"
//import Projects from "@/components/Projects/ProjectsWalkie"
import Typography from "@/components/common/Typography"


export default function Page() {
  return (
    <DescribeRoute title="EIC Chula" description="Engineering Innovator Club" imgURL="./OG-Banner.jpg">
      <section className="relative mx-auto px-8 sm:px-16 lg:px-24 md:grid grid-cols-2 gap-16 min-h-[90vh]">
        <div className="flex flex-col justify-start items-start py-16 relative z-10">
          <div>
            <Typography type="h1" className="text-4xl md:text-8xl font-medium font-display" custom={true}>
            Projects
            </Typography>
          </div>
        </div>
      </section>
    </DescribeRoute>
  )
}