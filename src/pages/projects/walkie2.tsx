import LinkButton from "@/components/common/LinkButton"
import Typography from "@/components/common/Typography"
import { DescribeRoute } from "@/components/Meta/DescribeRoute"

export default function Page() {
  return (
    <DescribeRoute title="EIC Chula" description="Engineering Innovator Club">
      <section className="p-6 min-h-screen">
        <Typography className="text-center" type="h1">Walkie 2</Typography>
        <LinkButton href="/" className="mt-4">
          Back to Home
        </LinkButton>
      </section>
    </DescribeRoute>
  )
}
