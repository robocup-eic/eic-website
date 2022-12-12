import Typography from "@/components/common/Typography"
import LinkButton from "@/components/common/LinkButton"
import Image from "next/image"

interface Information {
  imgURL: string
  description: string
}

const information: Information[] = [
  {
    imgURL: "/assets/walkie2/house-chore.jpg",
    description: "Walkie is a domestic service robot that helps you to do house chores and be your great companion.",
  },
  {
    imgURL: "/assets/walkie2/mech-arms.jpg",
    description:
      "We might think that our daily routine is boring and simple. But, for a robot like Walkie, a simple task may require much complex planning and motion.",
  },
  {
    imgURL: "/assets/walkie2/arrange-items.jpg",
    description:
      "Walkie can arrange groceries in the cabinet, take out the trash, carry your bag, serve the cool drink from the refrigerator, and communicate with you in English.",
  },
  {
    imgURL: "/assets/walkie2/ai.jpg",
    description:
      "Artificial Intelligence plays a significant role in making Walkie reliable and making intelligent decisions in doing boring human routines.",
  },
]

export default function Info() {
  return (
    <section className="md:max-w-6xl mx-auto py-6 md:py-4">
      <div className="relative px-6">
        <Typography custom type="p" className="textsm md:text-lg font-medium indent-4 md:indent-20">
          An intelligent autonomous service robot, our EIC&apos;s friend, is built to participate in Robocup@home 2022
          competition. We initiated Walkie in spring 2021 with a strong belief that Robots are good human companions.
          Walkie can do various household tasks and be a party host. Things he can do are picking and placing the object
          on the shelf, tidying up the garbage on the floor, serving the meal up to the customer&apos;s order, helping
          hold a bag, and following a user.
        </Typography>
      </div>

      <div className="mt-8 grid grid-flow-row-dense grid-cols-2 p-2 gap-2 md:gap-20 md:py-10 md:max-w-4xl mx-auto">
        {information.map((info, index) => (
          <div key={index} className="w-full">
            {/* <img className="w-full rounded-lg" src={info.imgURL} alt="Walkie" /> */}
            <Image className="w-full rounded-lg" width={640} height={360} src={info.imgURL} alt="Walkie" />
            <Typography type="caption" className="text-left">
              {info.description}
            </Typography>
          </div>
        ))}
      </div>

      <div className="p-6">
        <Typography className="text-center" type="caption">
          Our team, EIC from Chulalongkorn University, is developing Walkie&apos;s body and brain to make our robot not
          just a machine. He is our friend.
        </Typography>
        <span className="my-12 flex items-center justify-center ">
          <LinkButton
            size="md"
            href="/assets/EIC_Robotics_Team_Description_Paper_2023.pdf"
            tomato
            // className="mx-72 flex flex-col items-center justify-center "
            // className=" mx-auto w-1/4 items-center justify-center text-center"
          >
            Team Description Paper
          </LinkButton>
        </span>
      </div>
    </section>
  )
}
