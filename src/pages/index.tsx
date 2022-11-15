import LinkButton from "@/components/common/LinkButton"
import Typography from "@/components/common/Typography"
import { DescribeRoute } from "@/components/Meta/DescribeRoute"
import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <DescribeRoute title="EIC Chula" description="Engineering Innovator Club">
      <section className="p-6 min-h-screen">
        <Typography type="h1">Test</Typography>
        <LinkButton href="/" className="mt-4">
          Test
        </LinkButton>
      </section>
    </DescribeRoute>
  )
}

export default Home
