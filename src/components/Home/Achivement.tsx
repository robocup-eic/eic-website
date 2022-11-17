/* eslint-disable @next/next/no-img-element */
import Typography from "../common/Typography"

interface AchivementProps {
  type: "odd" | "even"
  title: string
  image: string
}

const AchivementItem = ({ type, title, image }: AchivementProps) => {
  return (
    <div className="my-2 md:my-8">
      <div>
        <img src={image} className="w-64 rounded-lg" alt="achivement" />
      </div>
      <div className={`mt-2 w-64 ${type === "odd" ? "text-right" : null}`}>
        <Typography type="p" className="text-base md:text-lg">
          {title}
        </Typography>
      </div>
    </div>
  )
}

const Achivement = () => {
  const achivements = [
    {
      title: "2022 : 3rd Place in PLC Competiton",
      image: "https://via.placeholder.com/640x360/D24E45/D24E45",
    },
    {
      title: "2022 : 2nd Place in RoboCup@Home Competition",
      image: "https://via.placeholder.com/640x360/D24E45/D24E45",
    },
    {
      title: "2020 : 2nd Place in MEA Hackathon",
      image: "https://via.placeholder.com/640x360/D24E45/D24E45",
    },
    {
      title: "2017 : 3rd Place in PLC competition",
      image: "https://via.placeholder.com/640x360/D24E45/D24E45",
    },
    {
      title: "2015 : 2nd Place in Motor Expo Automotive Innovation, Beach Cleaning Robot",
      image: "https://via.placeholder.com/640x360/D24E45/D24E45",
    },
    {
      title: "2014 : 2nd Place in PLC competition",
      image: "https://via.placeholder.com/640x360/D24E45/D24E45",
    },
    {
      title: "2012 : 1st Place in PLC competition",
      image: "https://via.placeholder.com/640x360/D24E45/D24E45",
    },
    {
      title: "2010 : 6th Place in RoboCup@Home Competition",
      image: "https://via.placeholder.com/640x360/D24E45/D24E45",
    },
    {
      title: "2008 : 1st Place in RoboCup Soccer Competition and 1st Place RoboCup Rescue",
      image: "https://via.placeholder.com/640x360/D24E45/D24E45",
    },
    {
      title: "2007 : 2nd Place in RoboCup Soccer Competition",
      image: "https://via.placeholder.com/640x360/D24E45/D24E45",
    },
    {
      title: "2006 : 3rd Place in RoboCup Soccer Competition",
      image: "https://via.placeholder.com/640x360/D24E45/D24E45",
    },
  ]

  return (
    <section className="relative mx-auto px-8 sm:px-16 lg:px-24 py-16 min-h-[90vh]">
      <Typography type="h1" className="text-3xl md:text-8xl font-medium font-display text-center" custom={true}>
        Achivement
      </Typography>
      <div className="md:hidden flex flex-col items-center">
        {achivements.map((achivement, index) => {
          return <AchivementItem key={index} type="even" title={achivement.title} image={achivement.image} />
        })}
      </div>
      <div className="hidden md:block">
        <div className="relative">
          <div className="grid grid-cols-2 gap-36">
            <div className="flex flex-col justify-center items-end">
              {achivements.map((achivement, index) => {
                if (index % 2 === 0) {
                  return <AchivementItem key={index} type="odd" title={achivement.title} image={achivement.image} />
                }
              })}
            </div>
            <div className="flex flex-col justify-center">
              {achivements.map((achivement, index) => {
                if (index % 2 !== 0) {
                  return <AchivementItem key={index} type="even" title={achivement.title} image={achivement.image} />
                }
              })}
            </div>
            <div className="bg-black w-0.5 h-5/6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>

      <div></div>
    </section>
  )
}

export default Achivement
