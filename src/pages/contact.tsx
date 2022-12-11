import Contact from "@/components/Contact/Contact"
import { DescribeRoute } from "@/components/Meta/DescribeRoute"

export default function ContactPage() {
  return (
    <DescribeRoute title="EIC Chula" description="Engineering Innovator Club" imgURL="./OG-Banner.jpg">
      <Contact />
    </DescribeRoute>
  )
}
