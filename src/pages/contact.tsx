import Typography from "@/components/common/Typography"
import { DescribeRoute } from "@/components/Meta/DescribeRoute"

export default function Page() {
  return (
    <DescribeRoute title="EIC Chula" description="Engineering Innovator Club" imgURL="./OG-Banner.jpg">
      <section className="p-6 min-h-screen">
        <Typography type="h1">Contact</Typography>
      </section>
    </DescribeRoute>
  )
}
