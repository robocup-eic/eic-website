import { DescribeRoute } from "@/components/Meta/DescribeRoute"
import Hero from "@/components/Walkie2/Hero"
import Info from "@/components/Walkie2/Info"
import Video from "@/components/common/Video"

export default function Page() {
  return (
    <DescribeRoute title="EIC Chula" description="Engineering Innovator Club" imgURL="./OG-Banner.jpg">
      <Hero />
      <Info />
      <Video src="https://www.youtube.com/embed/JoIOFo9wqqE" />
    </DescribeRoute>
  )
}
