import Image from "next/image"
import Link from "next/link"
import Typography from "../common/Typography"
import { SocialFacebook, SocialInstagram, SocialYoutube } from "../materials/Socials"

export default function Contact() {
  return (
    <section className="relative sm:text-sm md:text-lg">
      <div className="relative z-10 text-center">
        <Typography type="h1" className="text-2xl font-display pt-20" custom={true}>
          robocup.cu@gmail.com
        </Typography>
        <Typography
          type="caption"
          className="flex justify-center my-4 md:px-40 lg:px-96 text-center text-red text-[#D24E45] font-display"
        >
          Room 204, Building 1, Faculty of Engineering, Chulalongkorn University, Phayatai Road, Bangkok, Bangkok 10330,
          TH
        </Typography>

        <div className="flex gap-4 justify-center">
          <Link href="https://www.facebook.com/eicchulalongkorn/" passHref>
            <a>
              <SocialFacebook className="w-10 h-10 text-black transition-colors hover:text-tomato" />
            </a>
          </Link>
          <Link href="https://www.instagram.com/eic_chula/">
            <a>
              <SocialInstagram className="w-10 h-10 text-black transition-colors hover:text-tomato" />
            </a>
          </Link>
          <Link href="https://www.youtube.com/@robocupchula7592">
            <a>
              <SocialYoutube className="w-10 h-10 text-black transition-colors hover:text-tomato" />
            </a>
          </Link>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 max-w-6xl">
        <Image src="/assets/building-1.png" alt="EIC Building" className="w-full" width={1870} height={1131} />
      </div>
    </section>
  )
}
