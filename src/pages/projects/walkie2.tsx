import LinkButton from "@/components/common/LinkButton"
import Typography from "@/components/common/Typography"
import { DescribeRoute } from "@/components/Meta/DescribeRoute"

export default function Page() {
  return (
    <DescribeRoute title="EIC Chula" description="Engineering Innovator Club" imgURL="./OG-Banner.jpg">
      {/* <section className=" relative mx-12 h-1/6 "> */}
      <section className="full-w-screen-2xl relative mx-12 h-1/6 ">
        <span className=" mx-auto  h-1/6 p-10  ">
          <img src="/Walkie 2.svg" className="max-h-[60%] max-w-[60%] " />
          <Typography type="h1" className="absolute top-0 right-0   text-right ">
            Walkie 2
          </Typography>
          <Typography type="h1" className="absolute top-[120pt] right-0  text-right  ">
            Robot
          </Typography>
          <LinkButton
            href="https://github.com/robocup-eic/smach"
            className="absolute top-[240pt] right-0 mt-4  text-right "
          >
            Github
          </LinkButton>
        </span>
        <section className="relative p-6">
          <Typography type="p" className="pt-10 indent-20">
            An intelligent autonomous service robot, our EIC's friend, is built to participate in Robocup@home 2022
            competition. We initiated Walkie in spring 2021 with a strong belief that Robots are good human companions.
            Walkie can do various household tasks and be a party host. Things he can do are picking and placing the
            object on the shelf, tidying up the garbage on the floor, serving the meal up to the customer's
            order,helping hold a bag, and following a user.
          </Typography>
        </section>

        <span className="grid grid-flow-row-dense grid-cols-2 gap-20  p-10">
          <span className=" w-full">
            <img className="w-full" src="/Rectangle 25.svg" alt="cant find shit" />
            <Typography type="caption" className="text-left">
              Walkie is a domestic service robot that helps you to do house chores and be your great companion.
            </Typography>
          </span>
          <span className=" w-full">
            <img className="w-full" src="/Rectangle 25.svg" alt="cant find shit" />
            <Typography type="caption" className="text-left">
              We might think that our daily routine is boring and simple. But, for a robot like Walkie, a simple task
              may require much complex planning and motion.
            </Typography>
          </span>

          <span className="  w-full">
            <img className=" w-full" src="/Rectangle 25.svg" alt="cant find shit" />
            <Typography type="caption" className="text-left">
              Walkie can arrange groceries in the cabinet, take out the trash, carry your bag, serve the cool drink from
              the refrigerator, and communicate with you in English.
            </Typography>
          </span>
          <span className=" w-full">
            <img className=" w-full" src="/Rectangle 25.svg" alt="cant find shit" />
            <Typography type="caption" className="text-left">
              Artificial Intelligence plays a significant role in making Walkie reliable and making intelligent
              decisions in doing boring human routines.
            </Typography>
          </span>
        </span>
        <section className=" p-6">
          <Typography className="text-center" type="caption">
            Our team, EIC from Chulalongkorn University, is developing Walkie's body and brain to make our robot not
            just a machine. He is our friend.
          </Typography>
          <span className="my-12  flex items-center justify-center ">
            <LinkButton
              size="md"
              href="https://github.com/robocup-eic/smach"
              // className="mx-72 flex flex-col items-center justify-center "
              // className=" mx-auto w-1/4 items-center justify-center text-center"
              className="bg-[#D24E45]"
            >
              Team Description Paper
            </LinkButton>
          </span>
        </section>
      </section>
    </DescribeRoute>
  )
}
