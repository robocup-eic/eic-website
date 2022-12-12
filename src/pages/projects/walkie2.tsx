import { DescribeRoute } from "@/components/Meta/DescribeRoute"
import LinkButton from "@/components/common/LinkButton"
import Typography from "@/components/common/Typography"
import Image from "next/image"
import Hero from "@/components/Walkie2/Hero"
import Info from "@/components/Walkie2/Info"
import Video from "@/components/common/Video"

export default function Page() {
  return (
    <DescribeRoute title="EIC Chula" description="Engineering Innovator Club">
      <Hero />
      <Info />
      <Video src="https://www.youtube.com/embed/XggiG9MH7a8" />
    </DescribeRoute>
  )
}
