import { DescribeRoute } from "@/components/Meta/DescribeRoute"
import Publications from "@/components/Publications"

export default function Page() {
  return (
    <DescribeRoute title="EIC Chula" description="Engineering Innovator Club" imgURL="./OG-Banner.jpg">
      <Publications />
    </DescribeRoute>
  )
}
