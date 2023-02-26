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
        <div className="max-w-96 h-full space-y-6 rounded-3xl border border-tomato bg-tomato p-4 transition-all hover:brightness-95 sm:p-8">
          <div className="overflow-hidden rounded-xl bg-creamy">
            <Image src={imgSrc} alt={title} width={640} height={640} />
          </div>
          <Typography type="h2" className="text-right text-xl font-normal text-white md:text-4xl" custom={true}>
            {title}
          </Typography>
        </div>
      </a>
    </Link>
  )
}

export default function RobotList() {
  return (
    <section className="mx-auto px-12 pt-4 md:max-w-5xl xl:max-w-7xl">
      <Typography className="mb-4 break-words text-6xl font-medium xl:text-[120px]" custom={true} type="h1">
        Robots
      </Typography>
      {/* <div className="grid grid-cols-2 gap-4 lg:gap-16"> */}
      <div className="flex flex-col gap-4 sm:flex-row lg:gap-16">
        <Card title="Walkie 1" imgSrc="/assets/walkie1-preview.png" href="/robots/walkie1" />
        <Card title="Walkie 2" imgSrc="/assets/walkie2-preview.png" href="/robots/walkie2" />
      </div>
    </section>
  )
}
