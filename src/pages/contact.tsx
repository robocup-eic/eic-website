/* eslint-disable @next/next/no-img-element */
import Typography from "@/components/common/Typography"
import { DescribeRoute } from "@/components/Meta/DescribeRoute"

export default function Page() {
  return (
    <DescribeRoute title="EIC Chula" description="Engineering Innovator Club" imgURL="./OG-Banner.jpg">
      <section className="relative mb-0 sm:text-sm md:text-lg">
        <div className="text-center">
            <Typography type="h1" className="font-large font-display pt-20" custom={true}>
              robocup.cu@gmail.com
            </Typography>
        </div>
        <Typography type="caption" className="flex justify-center my-4 md:px-40 lg:px-96 text-center text-red text-[#D24E45] font-display">
            Room 204, Building 1, Faculty of Engineering, Chulalongkorn University, Phayatai Road, Bangkok, Bangkok 10330, TH
        </Typography>

        <div className="flex justify-center">
          <img src="eic-building-full.png" alt="EIC Building" className="scale-75 mb-0"></img>
        </div>
      </section>
    </DescribeRoute>
  )
}
