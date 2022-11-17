import Hero from "@/components/Home/Hero"
import Vision from "@/components/Home/Vision"
import Achivement from "@/components/Home/Achivement"
import { DescribeRoute } from "@/components/Meta/DescribeRoute"

export default function Page() {
  return (
    <DescribeRoute title="EIC Chula" description="Engineering Innovator Club" imgURL="./OG-Banner.jpg">
      <Hero />
      <Vision />
      <Achivement />
    </DescribeRoute>
  )
}
