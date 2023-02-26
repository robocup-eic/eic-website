import { DescribeRoute } from "@/components/Meta/DescribeRoute"
import RobotList from "@/components/Robots"

export default function Page() {
  return (
    <DescribeRoute title="EIC Chula" description="Engineering Innovator Club" imgURL="./OG-Banner.jpg">
      <RobotList />
    </DescribeRoute>
  )
}
