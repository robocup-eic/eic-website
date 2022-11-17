import LinkButton from "@/components/common/LinkButton"
import Typography from "@/components/common/Typography"
import { DescribeRoute } from "@/components/Meta/DescribeRoute"

export default function Page() {
  return (
    <DescribeRoute title="EIC Chula" description="Engineering Innovator Club" imgURL="./OG-Banner.jpg">
      <section className="p-6 min-h-screen">
        <Typography type="h1">Meet our Team</Typography>
        <LinkButton href="/" className="mt-4">
          Back to Home
        </LinkButton>
      </section>
    </DescribeRoute>
  )
}
