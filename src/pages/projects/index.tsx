import LinkButton from "@/components/common/LinkButton"
import Typography from "@/components/common/Typography"
import { DescribeRoute } from "@/components/Meta/DescribeRoute"

export default function Page() {
  return (
    <DescribeRoute title="EIC Chula" description="Engineering Innovator Club" imgURL="./OG-Banner.jpg">
      <section className="p-6 min-h-screen">
        <Typography type="h1">Projects</Typography>
        <div className="flex gap-4">
          <LinkButton href="/projects/walkie1">Walkie 1</LinkButton>
          <LinkButton href="/projects/walkie2">Walkie 2</LinkButton>
        </div>
      </section>
    </DescribeRoute>
  )
}
