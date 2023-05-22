/* eslint-disable @next/next/no-img-element */
import { Listbox, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import Typography from "../common/Typography"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid"
import teams from "./teams"

const TeamList = () => {
  const [selected, setSelected] = useState("2023")
  const selectedYearTeam = teams.find((team) => team.year === selected)?.teams || []

  return (
    <section className="relative mx-auto bg-tomato px-8 py-16 sm:px-16 lg:px-24">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative rounded-3xl border border-white p-8 py-16 md:p-12 lg:p-16">
          <div className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-10 lg:right-8">
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

          {selectedYearTeam.map((team) => (
            <div key={team.name}>
              <Typography
                type="h2"
                className="text-center font-display text-2xl font-bold text-white md:text-3xl"
                custom={true}
              >
                {team.name}
              </Typography>
              <div className="my-8 flex flex-wrap justify-center gap-8 md:gap-12">
                {team.members
                  .filter((member) => member.coreteam)
                  .map((member) => (
                    <div key={member.id} className="flex flex-col items-center justify-center">
                      <img src={`/assets/members/${member.img}.jpg`} alt={member.id} className="h-48 w-48 rounded-xl" />
                      <div className="mt-4">
                        <Typography
                          type="h3"
                          className="text-center font-display text-base font-semibold text-white md:text-lg"
                          custom={true}
                        >
                          {member.name}
                        </Typography>
                        <Typography
                          type="p"
                          className="text-center font-display text-sm text-white md:text-base"
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
