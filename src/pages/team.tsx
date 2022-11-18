import Quote from "@/components/Team/Quote"
import { DescribeRoute } from "@/components/Meta/DescribeRoute"
import AboutClub from "@/components/Team/AboutClub"
import Objectives from "@/components/Team/Objectives"
import TeamList from "@/components/Team/TeamList"

export default function Page() {
  return (
    <DescribeRoute title="EIC Chula" description="Engineering Innovator Club" imgURL="./OG-Banner.jpg">
      <Quote />
      <AboutClub />
      <Objectives />
      <TeamList />
    </DescribeRoute>
  )
}
