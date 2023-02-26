import { ReactNode } from "react"

function Task({ title, video, children: description }: { title: string; video: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-gray-900 bg-creamy px-4 py-6 shadow-sm">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <iframe
            className="mx-auto aspect-video h-full w-full rounded-xl"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-tomato">{title}</h2>
          <p className="text-md whitespace-pre-wrap font-light leading-relaxed text-gray-900">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function TaskList() {
  return (
    <section className="">
      {/* tasks */}
      <div className="mx-auto w-full max-w-5xl px-10 pb-8">
        <h1 className="mb-10 text-center text-6xl font-bold text-tomato">Tasks</h1>
        <div className="flex flex-col gap-4">
          <Task title="Restaurant" video="AykrWYCCDoQ">
            One of the most recurring tasks in Robocup@Home. Appearing during the semi-final.
            <br />
            <br />
            This task tests the robot&apos;s interactivity with the synergy of navigation, manipulation, NLP, and
            Computer Vision.
            <br />
            <br />
            Simulating a restaurant, the robot is placed in the dining area looking for a customer to usher. When the
            customer raised their hand, the robot walks over and takes requests from the customer whether it is taking
            an order, getting the bill, etc. The robot then serves the customer their food and begins the process all
            over again.
          </Task>
          <Task title="Receptionist" video="JoIOFo9wqqE">
            Walkie successfully introduces a newly come guest to the host (person sitting in the room). Using speech
            recognition and face recognition, Walkie is able to tell the guest`&apos;s name and favorite drink.
          </Task>
          <Task title="Hand me that" video="b7UrerdvbKo">
          Another second round of tasks in RoboCup@Home.

          This task focuses on Object detection and Human Robot Interaction.

          The robot must identify the object that the human requires. Objects are 
          randomly group together between 3 - 5 items. The robot must identify 
          the operator(human) and wait for their instruction.
          </Task>
        </div>
      </div>

      {/* features */}

      <div className="mx-auto w-full max-w-5xl px-10 pt-10 pb-8">
        <h1 className="mb-10 text-center text-6xl font-bold text-tomato">Features</h1>
        <div className="flex flex-col gap-4">
          <Task title="Instance Segmentation" video="s7u8VM2Ddv4">
            Object detection and instance segmentation using YOLOv8 trained on a custom dataset. This video depicts a
            robot wandering around an office with random objects and furniture. This computer vision model can detect
            those objects and return their segmentation mask.
          </Task>
          <Task title="3D Self-Mapping" video="AZzRgXxIkyQ">
            Walkie2 supports navigating in an unknown area, the grid map is being created in real-time while the robot 
            is operating. Moreover, the data from the depth camera is used to create a voxel layer for 3D obstacle 
            avoidance.

            In this video, the robot follows a target while trying to avoid any obstacles in its path.
          </Task>
          <Task title="Human Posture Detection" video="MqH2SN2LCuw">
            This video demonstrates the hand raising detection this feature is used in tasks for Robocup@Home. The
            Restaurant(hyperlink) task is one example, hand raising detection is used to usher the robot to the
            customer.
            <br />
            <br />
            The hand raising detection is a subset of Posture detection, the one used in the Restaurant task is the
            older version. The new detection, it&apos;s able to detect joints faster, and more accurately, and able to
            differentiate people in crowded areas better
          </Task>
        </div>
      </div>
      {/* <div className="h-48 bg-tomato" /> */}
    </section>
  )
}
