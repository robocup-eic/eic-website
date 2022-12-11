import { DescribeRoute } from "@/components/Meta/DescribeRoute"
import ProjectList from "@/components/Projects/Projects"
import Publications from "@/components/Projects/Publications"

export default function Page() {
  return (
    <DescribeRoute title="EIC Chula" description="Engineering Innovator Club" imgURL="./OG-Banner.jpg">
      <ProjectList />
      <Publications />
    </DescribeRoute>
  )
}
