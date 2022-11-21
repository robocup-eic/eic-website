import Video from "@/components/common/Video"
import { DescribeRoute } from "@/components/Meta/DescribeRoute"
import Hero from "@/components/Walkie1/Hero"
import Info from "@/components/Walkie1/Info"

export default function Page() {
  return (
    <DescribeRoute title="EIC Chula" description="Engineering Innovator Club" imgURL="./OG-Banner.jpg">
      <Hero />
      <Info />
      <Video src="https://www.youtube.com/embed/JoIOFo9wqqE" />
    </DescribeRoute>
  )
}
