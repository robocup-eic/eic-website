import Image from "next/image"
import Link from "next/link"
import Typography from "../common/Typography"

interface CardProps {
  title: string
  imgSrc: string
  href: string
}

function Card({ title, imgSrc, href }: CardProps) {
  return (
    <Link href={href} passHref>
      <a>
        <div className="rounded-3xl max-w-96 border border-tomato bg-tomato p-4 sm:p-8 h-full space-y-6 transition-all hover:brightness-95">
          <div className="overflow-hidden rounded-xl bg-creamy">
            <Image src={imgSrc} alt={title} width={640} height={640} />
          </div>
          <Typography type="h2" className="text-xl md:text-4xl text-white text-right font-normal" custom={true}>
            {title}
          </Typography>
        </div>
      </a>
    </Link>
  )
}

export default function ProjectList() {
  return (
    <section className="pt-4 px-12 md:max-w-5xl xl:max-w-7xl mx-auto">
      <Typography className="text-6xl break-words mb-4 xl:text-[120px] font-medium" custom={true} type="h1">
        Projects
      </Typography>
      {/* <div className="grid grid-cols-2 gap-4 lg:gap-16"> */}
      <div className="flex flex-col sm:flex-row gap-4 lg:gap-16">
        <Card title="Walkie 1" imgSrc="/assets/walkie1-preview.png" href="/projects/walkie1" />
        <Card title="Walkie 2" imgSrc="/assets/walkie2-preview.png" href="/projects/walkie2" />
      </div>
    </section>
  )
}
