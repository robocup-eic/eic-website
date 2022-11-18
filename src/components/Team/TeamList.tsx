/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import Typography from "../common/Typography"

const TeamList = () => {
  const [year, setYear] = useState("2022")
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
  const selectedYearTeam = teams.find((team) => team.year === year)?.teams || []

  return (
    <section className="relative mx-auto px-8 sm:px-16 lg:px-24 py-16 bg-tomato">
      <div className="relative border border-white rounded-3xl py-16 p-8 md:p-12 lg:p-16">
        <div className="absolute top-2 right-2 md:top-4 md:right-4 lg:top-8 lg:right-8">
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="border-none bg-none outline-none bg-white py-2 px-4 rounded-2xl text-base md:text-xl font-display font-medium"
          >
            {teams.map((yearlist, i) => (
              <option key={i} value={yearlist.year}>
                {yearlist.year}
              </option>
            ))}
          </select>
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
    </section>
  )
}

export default TeamList
