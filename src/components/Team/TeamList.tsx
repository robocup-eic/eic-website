/* eslint-disable @next/next/no-img-element */
import { Listbox, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import Typography from "../common/Typography"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid"

const TeamList = () => {
  const [selected, setSelected] = useState("2022")
  const teams = [
    {
      year: "2022",
      teams: [
        {
          name: "Team Leader",
          members: [
            {
              name: "Kittipat Chaiyakul",
              position: "President",
              img: "https://via.placeholder.com/500x500/ECE7E3/ECE7E3",
            },
            {
              name: "Kittipat Chaiyakul",
              position: "Vice President",
              img: "https://via.placeholder.com/500x500/ECE7E3/ECE7E3",
            },
            {
              name: "Kittipat Chaiyakul",
              position: "Fuck President",
              img: "https://via.placeholder.com/500x500/ECE7E3/ECE7E3",
            },
          ],
        },
        {
          name: "ROS Team",
          members: [
            {
              name: "Namin Pickle",
              position: "President",
              img: "https://via.placeholder.com/500x500/ECE7E3/ECE7E3",
            },
            {
              name: "Kaka Pickle",
              position: "Vice President",
              img: "https://via.placeholder.com/500x500/ECE7E3/ECE7E3",
            },
            {
              name: "Kittipat Chaiyakul",
              position: "Fuck President",
              img: "https://via.placeholder.com/500x500/ECE7E3/ECE7E3",
            },
            {
              name: "Kaka Pickle",
              position: "Vice President",
              img: "https://via.placeholder.com/500x500/ECE7E3/ECE7E3",
            },
            {
              name: "Kittipat Chaiyakul",
              position: "Fuck President",
              img: "https://via.placeholder.com/500x500/ECE7E3/ECE7E3",
            },
          ],
        },
      ],
    },
    {
      year: "2021",
      teams: [
        {
          name: "Team Leader",
          members: [
            {
              name: "Kittipat Chaiyakul",
              position: "President",
              img: "https://via.placeholder.com/500x500/ECE7E3/ECE7E3",
            },
          ],
        },
        {
          name: "ROS Team",
          members: [
            {
              name: "Namin Pickle",
              position: "President",
              img: "https://via.placeholder.com/500x500/ECE7E3/ECE7E3",
            },
            {
              name: "Kaka Pickle",
              position: "Vice President",
              img: "https://via.placeholder.com/500x500/ECE7E3/ECE7E3",
            },
          ],
        },
      ],
    },
  ]
  const selectedYearTeam = teams.find((team) => team.year === selected)?.teams || []

  return (
    <section className="relative mx-auto px-8 sm:px-16 lg:px-24 py-16 bg-tomato">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative border border-white rounded-3xl py-16 p-8 md:p-12 lg:p-16">
          <div className="absolute top-2 right-2 md:top-4 md:right-4 lg:top-8 lg:right-8">
            <Listbox.Button className="relative cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{selected}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute right-0 max-h-60 w-24 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {teams.map((team) => (
                  <Listbox.Option
                    key={team.year}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={team.year}
                  >
                    {({ selected }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {team.year}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>

          {selectedYearTeam.map((team, i) => (
            <div key={i}>
              <Typography
                type="h2"
                className="text-2xl md:text-3xl text-white font-bold text-center font-display"
                custom={true}
              >
                {team.name}
              </Typography>
              <div className="my-8 flex flex-wrap gap-8 md:gap-12 justify-center">
                {team.members.map((member, i) => (
                  <div key={i} className="flex flex-col justify-center items-center">
                    <img src={member.img} alt="" className="w-48 h-48 rounded-xl" />
                    <div className="mt-4">
                      <Typography
                        type="h3"
                        className="text-base md:text-lg text-white font-semibold text-center font-display"
                        custom={true}
                      >
                        {member.name}
                      </Typography>
                      <Typography
                        type="p"
                        className="text-sm md:text-base text-white text-center font-display"
                        custom={true}
                      >
                        {member.position}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Listbox>
    </section>
  )
}

export default TeamList
