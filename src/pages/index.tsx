import LinkButton from "@components/common/LinkButton"
import Typography from "@components/common/Typography"
import { DescribeRoute } from "@components/Meta/DescribeRoute"
import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <DescribeRoute title="Next.js boilerplate" description="by betich">
      <main className="p-6">
        <Typography type="h1">Test</Typography>
        <LinkButton href="/" className="mt-4">
          Test
        </LinkButton>
      </main>
    </DescribeRoute>
  )
}

export default Home
